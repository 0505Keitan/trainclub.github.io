var SMFua = navigator.userAgent;
if (SMFua.indexOf("Mac") && SMFua.match("(MSIE)([^0-9a-zA-Z]){1}(5)")) {
	document.write("[<a href='http://mf1.shinobi.jp/stat/869992405f7aa57c696d2c11d6c76b12/default__.js' target='_blank'>NINJA_MAILFORM</a>]<br>");
} else {
	if (!SMFS_error){var SMFS_error = '';}
	if (!SMF_arr){var SMF_arr=new Object();}
	if (!SMFStyle_arr){var SMFStyle_arr=new Object();}
	if (!SMFSubmit_arr){var SMFSubmit_arr=new Object();}
	
	var SMFTemplate_name = encodeURI("default__");
	
	if ((SMFS_error = "")) {
		SMFError_message(SMFS_error);
	} else if (SMF_arr[SMFTemplate_name]) {
		SMFError_message('『default__』が重複しています。<br>');
	} else {
		SMF_arr[SMFTemplate_name] = "<div>
		<div class='name_top' style='width:100%;margin:3px 3px 3px 0px;clear:both;'>
		<div class='name_left' style='color:black;width:600px;padding:2px 5px;text-align:text-align:center;;width:590px;'>*<input type='hidden' name='nac' value='na'>[お名前orニックネーム]
		</div>
		<div class='name_right' style='width:600px;padding:0px 5px;text-align:text-align:center;;width:590px;'>
		<input type='text' name='na' style='width:250px;font-size:12px;' value='' class='name_parts'>
		</div>
		<BR clear='all'>
		</div>
		<div class='mail_top' style='width:100%;margin:3px 3px 3px 0px;clear:both;'>
		<div class='mail_left' style='color:black;width:600px;padding:2px 5px;text-align:text-align:center;;width:590px;'>[メールアドレス]</div><div class='mail_right' style='width:600px;padding:0px 5px;text-align:text-align:center;;width:590px;'><input type='text' name='ma' style='width:250px;font-size:12px;' value='' class='mail_parts'></div><BR clear='all'></div><div class='title_top' style='width:100%;margin:3px 3px 3px 0px;clear:both;'><div class='title_left' style='color:black;width:600px;padding:2px 5px;text-align:text-align:center;;width:590px;'>*<input type='hidden' name='tic' value='ti'>[件名]</div><div class='title_right' style='width:600px;padding:0px 5px;text-align:text-align:center;;width:590px;'><input type='text' name='ti' style='width:250px;font-size:12px;' value='' class='title_parts'></div><BR clear='all'></div><div class='textarea_top' style='width:100%;margin:3px 3px 3px 0px;clear:both;'><div class='textarea_left' style='color:black;width:600px;padding:2px 5px;text-align:text-align:center;;width:590px;'>*<input type='hidden' name='tac' value='ta'>[お問い合わせ内容を入力してください。]</div><div class='textarea_right' style='width:600px;padding:0px 5px;text-align:text-align:center;;width:590px;'><textarea cols='60' rows='15' style='font-size:12px;' name='ta' class='textarea_parts'></textarea></div><BR clear='all'></div><div class='url_top' style='width:100%;margin:3px 3px 3px 0px;clear:both;'><div class='url_left' style='color:black;width:600px;padding:2px 5px;text-align:text-align:center;;width:590px;'>[リンクご希望の場合は下にリンクアドレスを入力してください。]</div><div class='url_right' style='width:600px;padding:0px 5px;text-align:text-align:center;;width:590px;'><input type='text' name='ul' style='width:250px;font-size:12px;' value='http://' class='url_parts'></div><BR clear='all'></div><div class='submit' id='default___submit' style='text-align:center;'><!--submit_button_top--><input class='submit_button' type='button' value='送信' name='submit' onclick=soushin('869992405f7aa57c696d2c11d6c76b12','default__'); ><!--submit_button_end--></div></div>";
		SMFStyle_arr[SMFTemplate_name] = "font-size:12px;font-family:ＭＳ ゴシック,Osaka,sans-serif;text-align:center;width:100%;margin:3px 3px 3px 0px;clear:both;";
		SMFSubmit_arr[SMFTemplate_name] = "text-align:center;";
		SMFmailform_exist();
		if(!insertSMFCSS('http://mf1.shinobi.jp/mailform/skin_css/0_plain.css'))
			alert("F:CSS:0:plain");
	}
}

function SMFmailform_exist() {
	document.write("<div id=default___top style='width:600px;'><div class='main' style='border:solid 1px black;font-size:12px;font-family:ＭＳ ゴシック,Osaka,sans-serif;text-align:center;width:600;'><!--old_browser--><form id='default__'><!--old_browser--><!--skin_html_tmp_top--><div><div class='name_top' style='width:100%;margin:3px 3px 3px 0px;clear:both;'><div class='name_left' style='color:black;width:600px;padding:2px 5px;text-align:text-align:center;;width:590px;'>*<input type='hidden' name='nac' value='na'>[お名前orニックネーム]</div><div class='name_right' style='width:600px;padding:0px 5px;text-align:text-align:center;;width:590px;'><input type='text' name='na' style='width:250px;font-size:12px;' value='' class='name_parts'></div><BR clear='all'></div><div class='mail_top' style='width:100%;margin:3px 3px 3px 0px;clear:both;'><div class='mail_left' style='color:black;width:600px;padding:2px 5px;text-align:text-align:center;;width:590px;'>[メールアドレス]</div><div class='mail_right' style='width:600px;padding:0px 5px;text-align:text-align:center;;width:590px;'><input type='text' name='ma' style='width:250px;font-size:12px;' value='' class='mail_parts'></div><BR clear='all'></div><div class='title_top' style='width:100%;margin:3px 3px 3px 0px;clear:both;'><div class='title_left' style='color:black;width:600px;padding:2px 5px;text-align:text-align:center;;width:590px;'>*<input type='hidden' name='tic' value='ti'>[件名]</div><div class='title_right' style='width:600px;padding:0px 5px;text-align:text-align:center;;width:590px;'><input type='text' name='ti' style='width:250px;font-size:12px;' value='' class='title_parts'></div><BR clear='all'></div><div class='textarea_top' style='width:100%;margin:3px 3px 3px 0px;clear:both;'><div class='textarea_left' style='color:black;width:600px;padding:2px 5px;text-align:text-align:center;;width:590px;'>*<input type='hidden' name='tac' value='ta'>[お問い合わせ内容を入力してください。]</div><div class='textarea_right' style='width:600px;padding:0px 5px;text-align:text-align:center;;width:590px;'><textarea cols='60' rows='15' style='font-size:12px;' name='ta' class='textarea_parts'></textarea></div><BR clear='all'></div><div class='url_top' style='width:100%;margin:3px 3px 3px 0px;clear:both;'><div class='url_left' style='color:black;width:600px;padding:2px 5px;text-align:text-align:center;;width:590px;'>[リンクご希望の場合は下にリンクアドレスを入力してください。]</div><div class='url_right' style='width:600px;padding:0px 5px;text-align:text-align:center;;width:590px;'><input type='text' name='ul' style='width:250px;font-size:12px;' value='http://' class='url_parts'></div><BR clear='all'></div><div class='submit' id='default___submit' style='text-align:center;'><!--submit_button_top--><input class='submit_button' type='button' value='送信' name='submit' onclick=soushin('869992405f7aa57c696d2c11d6c76b12','default__'); ><!--submit_button_end--></div></div><!--skin_html_tmp_end--></form></div></div>");
	document.write("<scr" + "ipt defer id='default___dynld' type='text/javascript' src='http://mf1.shinobi.jp/mf_post.js' charset='utf-8'></scr" + "ipt>");
	SMFhooter();
}

function SMFError_message(SMFError_mes) {
	document.write("<p style='font-size:12px;'>" + SMFError_mes + "</p>");
	SMFS_error = '';
}

function SMFhooter() {
	var SMFtext = document.getElementById('SMFkkk');
	if (SMFtext) {
		var SMFfooter = document.getElementById('shinobi_jp_text');
		SMFtext.id = 'shinobi_jp_text';
		SMFtext.style.textAlign = SMFfooter.style.textAlign;
		SMFtext.style.fontSize = SMFfooter.style.fontSize;
		SMFtext.style.width = SMFfooter.style.width;
		SMFtext.style.height = SMFfooter.style.height;
//		SMFtext.style.paddingRight = SMFfooter.style.paddingRight;
		SMFfooter.parentNode.replaceChild(SMFtext,SMFfooter);
	}
}

function insertSMFCSS(url) {
	var na = navigator.userAgent;
	if (!url) {
		return false;
	} else if (document.all && !window.opera) {
		document.createStyleSheet(url);
	} else if (document.styleSheets || window.opera) {
		var SMFLink = document.createElement('LINK');
		SMFLink.rel = "StyleSheet";
		SMFLink.type = "text/css";
		SMFLink.href = url;
		
		var SMFHead = document.getElementsByTagName('HEAD').item(0);
		SMFHead.appendChild(SMFLink);
	} else {
		return false;
	}
	return true;
}