/* ============================================================
   home.js —— 首页渲染与搜索过滤
   依赖 tools.js 与 header.js（搜索框由 header.js 注入）
   ============================================================ */
(function() {
	'use strict';

	var TOOLS = window.TOOLS || [];
	var sectionsEl = document.getElementById('sections');
	var chipsEl = document.getElementById('chips');
	var emptyEl = document.getElementById('empty');
	var qInput = document.getElementById('q');

	if (!sectionsEl || !chipsEl) return;

	function isExternal(href) {
		return /^https?:/i.test(href || '');
	}

	/* 统一图标渲染：支持 emoji 字符串 / 图片 / 显式 emoji 对象 */
	function iconHTML(icon, cls) {
		if (!icon) return '';
		if (typeof icon === 'string') {
			return '<span class="' + cls + '">' + icon + '</span>';
		}
		if (icon.type === 'image' && icon.src) {
			return '<span class="' + cls + '">' +
				'<img src="' + icon.src + '" alt="' + (icon.alt || '') +
				'" loading="lazy" width="24" height="24"></span>';
		}
		if (icon.type === 'emoji' && icon.value) {
			return '<span class="' + cls + '">' + icon.value + '</span>';
		}
		return '';
	}

	function escapeAttr(str) {
		return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
			.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	/* ---------- 渲染分组与卡片 ---------- */
	sectionsEl.innerHTML = TOOLS.map(function(group, gi) {
		var panels = (group.items || []).map(function(item) {
			var ext = isExternal(item.href) ? ' target="_blank" rel="noopener"' : '';
			var key = (item.title + ' ' + item.desc + ' ' + group.title).toLowerCase();
			return '<a class="panel" href="' + escapeAttr(item.href) + '"' + ext +
				' style="--accent:' + escapeAttr(item.accent || 'var(--brand)') + '"' +
				' data-key="' + escapeAttr(key) + '">' +
				iconHTML(item.icon, 'panel-icon') +
				'<div><h3>' + item.title + '</h3><p>' + item.desc + '</p></div>' +
				'</a>';
		}).join('');

		return '<section class="group" id="g-' + gi + '">' +
			'<h2 class="group-title">' + iconHTML(group.icon, 'group-icon') +
			group.title + '</h2>' +
			'<div class="grid">' + panels + '</div>' +
			'</section>';
	}).join('');

	/* ---------- 分类胶囊 ---------- */
	chipsEl.innerHTML = TOOLS.map(function(group, gi) {
		return '<a class="chip" href="#g-' + gi + '">' +
			iconHTML(group.icon, 'chip-icon') + group.title + '</a>';
	}).join('');

	/* ---------- 实时搜索 ---------- */
	if (qInput) {
		qInput.addEventListener('input', function() {
			var kw = qInput.value.trim().toLowerCase();
			var total = 0;

			sectionsEl.querySelectorAll('.group').forEach(function(section) {
				var shown = 0;
				section.querySelectorAll('.panel').forEach(function(panel) {
					var hit = !kw || (panel.dataset.key || '').indexOf(kw) !== -1;
					panel.hidden = !hit;
					if (hit) shown++;
				});
				section.hidden = shown === 0;
				total += shown;
			});

			if (emptyEl) emptyEl.classList.toggle('show', total === 0);
		});
	}
})();