function gate() {
    var gatepass = document.getElementById("pass").value;

	if (gatepass == 'ヒント') {
		alert("文章を押してみよう！");
	} else {
		alert("ログインできません。");
	}

	document.getElementById("pass").value = '';

}

function tips() {
	alert("惜しい！");
}
