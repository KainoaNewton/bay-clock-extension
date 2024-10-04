// Create a context menu item when the extension is loaded
chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		id: 'openSettings', // Unique ID for this menu item
		title: 'Open Settings', // Text displayed in the context menu
		contexts: ['action'], // Only show when right-clicking the extension icon
	});

	chrome.contextMenus.create({
		id: 'openBayClock', // Another menu item
		title: 'Open BayClock', // Text for the second item
		contexts: ['action'], // Show this as well
	});
});

// Handle clicks on context menu items
chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === 'openSettings') {
		// If "Open Settings" is clicked, open the settings page
		chrome.tabs.create({ url: 'settings.html' });
	}

	if (info.menuItemId === 'openBayClock') {
		// If "Open BayClock" is clicked, open the BayClock website
		chrome.tabs.create({ url: 'https://bayclock.org' });
	}
});
