function copyText() {
	var copyText = document.getElementById("url");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
}