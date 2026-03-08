# Script Injector

This is a simple script injector that injects javascript code into some pages to modify the UI.

I recently set up the bookmark manager Karakeep, and so far I love everything except the compact view on the dashboard is not nearly dense enough for my taste. This just injects a javascript snippet that reduces the height and margins on the elements in the compact view.

## Usage

1. Clone the code
2. Go to chrome://extensions/
3. Enable developer mode (top right)
4. Click "Load unpacked" (top left)
5. Select the scriptinjector directory
6. The extension should now be loaded and will modify the UI of the Karakeep dashboard.

There is no way to turn it on or off aside from modifying the code and reloading the extension or uninstalling it.
