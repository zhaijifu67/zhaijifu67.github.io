/* ============================================================
   theme.js —— 主题初始化与切换
   放在 <head> 中同步执行，尽早设置 data-theme，避免闪屏
   模式：light / dark / auto（跟随系统）
   ============================================================ */
(function() {
	'use strict';

	var KEY = 'zhaiye-theme';
	var mode = 'auto';

	try {
		var saved = localStorage.getItem(KEY);
		if (saved === 'light' || saved === 'dark' || saved === 'auto') mode = saved;
	} catch (e) {
		/* localStorage 不可用则保持 auto */
	}

	var mql = window.matchMedia ?
		window.matchMedia('(prefers-color-scheme: dark)') : {
			matches: false
		};

	function resolve(m) {
		return m === 'auto' ? (mql.matches ? 'dark' : 'light') : m;
	}

	function apply(m) {
		var root = document.documentElement;
		root.setAttribute('data-theme-mode', m);
		var resolved = resolve(m);
		root.setAttribute('data-theme', resolved);
		root.setAttribute('data-bs-theme', resolved); // 新增：让 Bootstrap 同步
	}

	apply(mode);

	function onMediaChange() {
		var current = document.documentElement.getAttribute('data-theme-mode');
		if (current === 'auto') apply('auto');
	}

	if (mql.addEventListener) mql.addEventListener('change', onMediaChange);
	else if (mql.addListener) mql.addListener(onMediaChange);

	window.ZhaiyeTheme = {
		get: function() {
			return document.documentElement.getAttribute('data-theme-mode') || 'auto';
		},
		resolved: function() {
			return document.documentElement.getAttribute('data-theme') || 'light';
		},
		set: function(m) {
			if (m !== 'light' && m !== 'dark' && m !== 'auto') m = 'auto';
			try {
				localStorage.setItem(KEY, m);
			} catch (e) {
				/* 忽略 */
			}
			apply(m);
			document.dispatchEvent(new CustomEvent('themechange', {
				detail: {
					mode: m,
					theme: resolve(m)
				}
			}));
			return m;
		},
		cycle: function() {
			var order = ['light', 'dark', 'auto'];
			var next = order[(order.indexOf(this.get()) + 1) % order.length];
			this.set(next);
			return next;
		}
	};
})();