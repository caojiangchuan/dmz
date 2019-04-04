/*
* Copyright (c) 2015 zendaimoney.com. All Rights Reserved.
*/
package com.tongc.req;

import java.io.Serializable;
import java.util.Map;

/**
 * ReqMain
 * <p/>
 * Author: Hao Chen
 * Date: 2015/6/29 15:04
 * Mail: haoc@zendaimoney.com
 * $Id$
 */
public class ReqMain implements Serializable {

    private Map<String,Object> reqParam;

    private String reqTimestamp;

    private String reqUrl;

    private String platform;

    private String sn;

    public Map<String, Object> getReqParam() {
        return reqParam;
    }

    public void setReqParam(Map<String, Object> reqParam) {
        this.reqParam = reqParam;
    }

    public String getReqTimestamp() {
        return reqTimestamp;
    }

    public void setReqTimestamp(String reqTimestamp) {
        this.reqTimestamp = reqTimestamp;
    }

    public String getReqUrl() {
        return reqUrl;
    }

    public void setReqUrl(String reqUrl) {
        this.reqUrl = reqUrl;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getSn() {
        return sn;
    }

    public void setSn(String sn) {
        this.sn = sn;
    }
}