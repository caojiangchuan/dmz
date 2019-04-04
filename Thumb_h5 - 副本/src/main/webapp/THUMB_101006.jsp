<%@ page language="java" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%
String path = request.getContextPath();
session.setAttribute("path", path);
%>
<head>
<link href="${sessionScope.path}/js/img/zdico.png" rel="icon" type="image/x-icon" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>用户登录接口</title>
</head>
<body>
<form action="${path}/front/requestApi" method="post">
	<input type="hidden" name="arg0" value="101006">
		<table>
			<tr>
				<td align="right">参数<font color="red">*</font>：</td>
				<td> <input name="arg1" type="text" size="100"
							maxlength="1000" value="">{"paramType":"bank"}
				</td>
			</tr>

			<tr>
				<td align="center"><input type="submit" value=" 提交  "/>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>