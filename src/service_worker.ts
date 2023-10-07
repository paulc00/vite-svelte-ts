chrome.runtime.onStartup.addListener(() => {
	initialize()
})

// Clean local storage on install.
chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.local.clear()
	initialize()
})

// TODO: Need to figure out how to update tabs storage when the tabs change!

// Perform updates on settings changes.
// chrome.storage.sync.onChanged.addListener((changes) => {
// 	for (const key of Object.keys(changes)) {
// 		switch (key) {
// 			case 'showShelf':
// 				setShelf()
// 				break

// 			case 'iconColor':
// 			case 'defaultIconColor':
// 				setIcon()
// 				break
// 		}
// 	}
// })

async function initialize() {

  console.log(tabs);
  // No need to query windows

  // TODO: Restructure to tabs to wins[] > tabs[]
  // For each unique window in the tabs array
  // create a window
  // add all tabs for that window to the related tabs array

  // TODO: Store wins > tabs in storage

}

