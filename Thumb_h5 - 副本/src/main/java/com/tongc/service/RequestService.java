package com.tongc.service;

import com.alibaba.fastjson.JSONObject;
import com.tongc.common.config.ProfileParamBean;
import com.tongc.common.utils.*;
import com.tongc.req.ReqHeadParam;
import com.tongc.req.ReqMain;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.httpclient.util.DateUtil;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by 00235374 on 2015/10/29.
 */
@Slf4j
@Service
public class RequestService {

    @Autowired
    private ProfileParamBean profileParamBean;

    /**
        traceId:前端设备唯一标识，未使用
        method: 接口编号
        paramobj：参数集
    */
    public String requestRemoteService(String traceId,String method, Map<String,Object> paramObj) {
        return requestRemoteService(traceId,method, paramObj, "", "");
    }

    public String requestRemoteService(String traceId,String method, Map<String,Object> paramObj, String plateForm, String channelNo) {
        System.out.println("method:" + method + ",plateForm:" + plateForm + "channelNo:" + channelNo);

        //拼接消息报文头
        ReqMain reqMain = new ReqMain();
        reqMain.setPlatform(profileParamBean.getPlatform());
        reqMain.setReqTimestamp(DateUtil.formatDate(new Date(),"YYYYMMDDhhmmss"));
        reqMain.setReqUrl(profileParamBean.getRequestUrl());
        reqMain.setSn(profileParamBean.getPlatform()+DateUtil.formatDate(new Date(),"YYYYMMDDhhmmss"));


        reqMain.setReqParam(paramObj);

        try {

            String str = JSONObject.toJSONString(reqMain);

            System.out.println("reqMain:" + str);
            String returnStr = requestRemoteService(traceId,profileParamBean.getThumbCrmGateway(), method, str);
            System.out.println("returnStr:" + returnStr);
            return returnStr;
        } catch (Exception e) {
            e.printStackTrace();
            return JsonException.toJson(BussErrorCode.ERROR_CODE_0102, null);
        }
    }

    public String requestRemoteService(String traceId, String requestUrl, String method, String requestParam) {

        String url = requestUrl;
        StringBuffer res;
        Map<String, Object> param = new HashMap<>();
        param.put("arg0", method);
        param.put("arg1", requestParam);
        param.put("arg2",MD5.MD5Encode(method+"|"+requestParam+"|"+profileParamBean.getThumbCrmKey()));
        try {
            log.info("Request route address  【{}】",url);
            log.info("Request method 【{}】 , param 【{}】, md5Str 【{}】",method,requestParam,param.get("arg2"));
            res = HttpUtils.URLPost(url, param);
//            res = HttpUtils.URLGet(url, param);
            log.info("Response 【{}】",res.toString());
            return res.toString();
        } catch (Exception e) {
            e.printStackTrace();
            return JsonException.toJson(BussErrorCode.ERROR_CODE_0102, null);
        }
    }
}
