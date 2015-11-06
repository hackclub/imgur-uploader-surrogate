var Uploader = Uploader || {};

Uploader.outputText = function(text) {
	var output = document.getElementById("output");
	var p = document.createElement("p");
	p.textContent = text;
	output.appendChild(p);
}

Uploader.outputImage = function(imageUrl) {
	var output = document.getElementById("output");

	var img = document.createElement("img");
	img.src = imageUrl;
	output.appendChild(img);
}

Uploader.onFileUpload = function(imgurUrl) {

	var proxiedUrl = imgurUrl.replace("i.imgur.com/", "kageurufu.net/imgur/?")

	Uploader.outputText("Your image has been uploaded to:");
	Uploader.outputText(proxiedUrl);
	Uploader.outputImage(proxiedUrl);
}

Uploader.initFileUploadButton = function(){
		// https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
	var inputElement = document.getElementById("cameraInput");

	function handleFiles() {
		var fileList = this.files; /* now you can work with the file list */
		var file = fileList[0];
		Imgur.upload(file, Uploader.onFileUpload);
	}

	inputElement.addEventListener("change", handleFiles, false);
}

Uploader.main = function() {
	Uploader.initFileUploadButton();
}

Uploader.main();
