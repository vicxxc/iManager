/***
 * 校验规则
 */
var formValid_ruleList={
	    require : /.+/,   //输入不能为空
		//isMail:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,  //输入必须符合邮箱格式  
		isMail:/(^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$)|(^$)/,//输入必须为邮箱格式或为空
	    isNumber:/^[0-9]+$|(^$)/,   //输入必须为数字且为非负整数或为空，（常用）
		isPositNumber:/^[0-9]*[1-9][0-9]*$/,   //输入必须为数字且为正整数
		isPwd:/^[A-Za-z0-9]{6,15}$/ ,  //只能输入字母和数字6到15位
		loginNamevalidate:/^[A-Za-z0-9]{3,20}$/,
		companyNameValidate:/^[A-Za-z0-9]{3,60}$/,
		numberLetter:/^[a-zA-Z0-9\u4e00-\u9fa5]+$/,//只能输入字母或数字并且不能为空
		needInputValidate:/^[A-Za-z0-9]{3,60}$/
		
};
