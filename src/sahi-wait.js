(function(definition) {
	definition(window.__sahi_wait = {});
})(function(exports) {
	var wait = function(fn) {
		exports.waiting = true;
		var intervalThread;
		var endWaiting = function() {
			exports.waiting = false;
			clearInterval(intervalThread);
		};
		intervalThread = setInterval(function() {
			if (fn()) {
				endWaiting();
			}
		}, 200);
	}
	exports.__wait = wait;
	
	var is_jquery_select_exist = function(selector) {
		var ele = jQuery(selector);
		return ele && ele.length > 0;		
	}
	
	exports.__is_jquery_select_exist = is_jquery_select_exist;
	
	var is_jquery_select_not_exist = function(selector) {
		return !is_jquery_select_exist(selector);
	}
	
	exports.__is_jquery_select_not_exist = is_jquery_select_not_exist;

	var wait_jquery_select_not_exist = function(selector) {
		wait(function() {
			return is_jquery_select_not_exist(selector);
		});
	}
	
	exports.__wait_jquery_select_not_exist = wait_jquery_select_not_exist;
	
	var wait_jquery_select_exist = function(selector) {
		wait(function() {
			return is_jquery_select_exist(selector)
		});
	}
	
	exports.__wait_jquery_select_exist = wait_jquery_select_exist;
	
	var wait_jquery_select_image_load = function(selector) {
		wait(function() {
			var elements = jQuery(selector);
			if (elements && elements.length > 0) {
				for (var i = 0 ; i < elements.length ; i++) {
					var ele = elements[i];
					if (!(ele.clientWidth && ele.clientWidth > 0 && ele.clientHeight && ele.clientHeight >0)) {
						return false;
					}
				}
			}
			return true;
		});
	}
	
	exports.__wait_jquery_select_image_load = wait_jquery_select_image_load;
	
	var is_jquery_select_visible = function(selector) {
		var j = jQuery(selector);
		if (!j || j.length === 0) {
			return false;
		}
		if (j.parents(':hidden').length > 0) {
			return false;
		}
		for (var i = 0 ; i < j.length ; i++) {
			if (!j[i].visible()) {
				return false;
			}
		}
		return true;
	}
	
	var is_jquery_select_invisible = function(selector) {
		return !is_jquery_select_visible(selector);
	}
	
	var wait_jquery_select_visible = function(selector) {
		wait(function() {
			is_jquery_select_visible(selector);
		});
	}
	
	exports.__wait_jquery_select_visible = wait_jquery_select_visible;
	
	var wait_jquery_select_invisible = function(selector) {
		wait(function() {
			is_jquery_select_invisible(selector);
		});
	}
	
	exports.__wait_jquery_select_invisible = wait_jquery_select_invisible;
	
	exports.waiting = false;
});