sahi_wait
=========

## Intro
1. We add some more waits function in Sahi. Lagacy scripts are fully supported.
2. It's important that we use jQuery selector to locate html element (Sahi selector sucks), please refer [here](http://api.jquery.com/category/selectors/) for jQuery selector details
3. It's like wait functions in Selenium. 
4. By co-worker request, we add ExtJs wait functions.
5. If you need more, please send us new issues, thanks very much.

## Demo
Run test/test.sah to test test/test.html...

## Author
[Tachikoma](https://github.com/github/markup)
[Yinkan Li](https://github.com/liyinkan)

## Setup
1. Make sure your project include jQuery library
2. Include target/sahi-wait.sah in your sahi script
```js
_include('sahi-wait.sah');
```
3. Use new wait functions in your sahi script.

## Apis
### It's important that we use jQuery selector to locate html element (Sahi selector sucks), please refer [here](http://api.jquery.com/category/selectors/) for jQuery selector details
### Waits
#### __wait_not_exist(selector)
Wait until an element not exist. The selector is jQuery selector.
#### __wait_exist(selector)
#### __wait_image_load(selector)
Wait until the images are loaded.
#### __wait_visible(selector)
Wait until an element is visible.
(It's not reliable...)
#### __wait_invisible(selector)
(It's not reliable...)
#### __assert_exist(selector)
#### __assert_not_exist(selector)
### ExtJs waits
#### __wait_ext_window_exist(title)
Wait until a ExtJs window popup.
#### __wait_ext_window_not_exist($title)
#### __wait_ext_mask()
Wait until all Ext component in view are unmasked.
#### __wait_ext_mask_in_window($title)
Wait until Ext component in a specific window are unmasked.
#### __wait_ext_label_visible
Wait until a form field label is visible. (a form field is visible.)
