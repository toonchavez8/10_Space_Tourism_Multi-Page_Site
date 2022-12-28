const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
	tab.addEventListener("click", changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
	// Constants for the left and right arrow keys
	const keydownLeft = 37;
	const keydownRight = 39;

	// If the left or right arrow key was pressed
	if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
		// Prevent the default browser behavior for these keys
		e.preventDefault();

		// If the right arrow key was pressed
		if (e.keyCode === keydownRight) {
			// Increment the tab focus index
			tabFocus++;

			// If the focus index is out of bounds, set it to the start of the array
			if (tabFocus >= tabs.length) {
				tabFocus = 0;
			}
		}

		// If the left arrow key was pressed
		if (e.keyCode === keydownLeft) {
			// Decrement the tab focus index
			tabFocus--;

			// If the focus index is out of bounds, set it to the end of the array
			if (tabFocus < 0) {
				tabFocus = tabs.length - 1;
			}
		}

		// Set the focus to the new tab
		tabs[tabFocus].focus();
	}
}

function changeTabPanel(e) {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute("aria-controls");
	const targetImage = targetTab.getAttribute("data-image");

	const tabContainer = targetTab.parentNode;
	const mainContainer = tabContainer.parentNode;

	tabContainer
		.querySelector('[aria-selected="true"]')
		.setAttribute("aria-selected", false);

	targetTab.setAttribute("aria-selected", true);

	hideContent(mainContainer, '[role="tabpanel"]');
	showContent(mainContainer, [`#${targetPanel}`]);

	hideContent(mainContainer, "picture");
	showContent(mainContainer, [`#${targetImage}`]);
}

function hideContent(parent, content) {
	parent
		.querySelectorAll(content)
		.forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
	parent.querySelector(content).removeAttribute("hidden");
}
