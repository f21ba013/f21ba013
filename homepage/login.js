function gate() {
    var gatepass = document.getElementById("pass").value;

	if (gatepass == 'ヒント') {
		alert("リンクが隠されています！");
	} else {
		alert("ログインできません。");
	}

	document.getElementById("pass").value = '';

}

function tips() {
	alert("惜しい！");
}
