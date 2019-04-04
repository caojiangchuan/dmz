package com.tongc.common.config;

import com.alibaba.fastjson.JSONArray;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

public class ProfileParamBean {

	private String requestUrl;

	@Value("${thumbCrmGateway}")
	private String thumbCrmGateway;

	@Value("${thumbCrmKey}")
	private String thumbCrmKey;


	@Value("${platform}")
	private String platform;

	public String getRequestUrl() {
		return requestUrl;
	}

	public void setRequestUrl(String requestUrl) {
		this.requestUrl = requestUrl;
	}

	public String getThumbCrmGateway() {
		return thumbCrmGateway;
	}

	public void setThumbCrmGateway(String thumbCrmGateway) {
		this.thumbCrmGateway = thumbCrmGateway;
	}

	public String getThumbCrmKey() {
		return thumbCrmKey;
	}

	public void setThumbCrmKey(String thumbCrmKey) {
		this.thumbCrmKey = thumbCrmKey;
	}

	public String getPlatform() {
		return platform;
	}

	public void setPlatform(String platform) {
		this.platform = platform;
	}
}
