document.addEventListener('DOMContentLoaded', function () {
	const iframe = document.getElementById('bayclock-iframe');

	// Load the saved iframe dimensions and scrolling setting from storage
	chrome.storage.sync.get(
		['iframeWidth', 'iframeHeight', 'enableScrolling'],
		function (result) {
			iframe.style.width = result.iframeWidth
				? result.iframeWidth + 'px'
				: '300px'; // Default to 300x110 if not set
			iframe.style.height = result.iframeHeight
				? result.iframeHeight + 'px'
				: '110px';

			// Apply scrolling setting
			if (result.enableScrolling === false) {
				iframe.setAttribute('scrolling', 'no');
			} else {
				iframe.removeAttribute('scrolling');
			}
		}
	);

	// Settings button to open settings.html
	document
		.getElementById('settings-button')
		.addEventListener('click', function () {
			chrome.tabs.create({ url: 'settings.html' });
		});
});
