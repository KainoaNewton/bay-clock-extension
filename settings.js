// Automatically update preview and save settings whenever a change is made
document.getElementById('iframe-size').addEventListener('change', function () {
	updatePreview();
	saveSettings();
});

document
	.getElementById('enable-scrolling')
	.addEventListener('change', function () {
		updatePreview();
		saveSettings();
	});

function updatePreview() {
	const iframeSize = document.getElementById('iframe-size').value.split('x');
	const iframeWidth = iframeSize[0];
	const iframeHeight = iframeSize[1];
	const enableScrolling = document.getElementById('enable-scrolling').checked;

	const previewIframe = document.getElementById('preview-iframe');

	// Update iframe width and height in preview
	previewIframe.style.width = iframeWidth + 'px';
	previewIframe.style.height = iframeHeight + 'px';

	// Apply scrolling setting
	if (enableScrolling === false) {
		previewIframe.setAttribute('scrolling', 'no');
	} else {
		previewIframe.removeAttribute('scrolling');
	}
}

function saveSettings() {
	const iframeSize = document.getElementById('iframe-size').value.split('x');
	const iframeWidth = iframeSize[0];
	const iframeHeight = iframeSize[1];
	const enableScrolling = document.getElementById('enable-scrolling').checked;

	chrome.storage.sync.set({
		iframeWidth: iframeWidth,
		iframeHeight: iframeHeight,
		enableScrolling: enableScrolling,
	});
}

// Initialize preview on page load
updatePreview();
