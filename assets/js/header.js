/* ============================================================
   header.js —— 顶部栏注入
   放在 <body> 最前面，直接引用即可：
     <script src="{root}assets/js/header.js"></script>
   - 自动根据脚本自身 URL 推导项目根路径（支持子目录页面）
   - 是否注入搜索框由 <body data-search="true"> 决定
   - 同时注入「返回顶部」按钮
   ============================================================ */
(function() {
	'use strict';

	var script = document.currentScript ||
		document.querySelector('script[src*="assets/js/header.js"]');

	var src = (script && script.src) || '';
	var marker = 'assets/js/header.js';
	var idx = src.indexOf(marker);
	var root = idx >= 0 ? src.slice(0, idx) : './';

	var body = document.body || document.documentElement;
	var showSearch = body.dataset.search === 'true' ||
		(script && script.dataset.search === 'true');

	var ICONS = {
		search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
			'stroke-linecap="round" aria-hidden="true">' +
			'<circle cx="11" cy="11" r="7"></circle>' +
			'<path d="m20 20-3.5-3.5"></path></svg>',

		github: '<svg viewBox="0 0 64 64" width="24" height="24"><path fill="currentColor" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0"/></svg>',

		qq: '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" fill-rule="evenodd" d="M12.01 22.597c-.737.076-2.183.15-3.5.153a20 20 0 0 1-1.893-.07a5 5 0 0 1-.728-.12a1.7 1.7 0 0 1-.34-.123a1 1 0 0 1-.41-.37a1.1 1.1 0 0 1-.152-.684c.026-.235.123-.426.226-.569c.192-.268.476-.462.707-.597q.154-.088.319-.167a6.5 6.5 0 0 1-1.051-1.818a6 6 0 0 1-.379.431a2.4 2.4 0 0 1-.373.317c-.108.071-.369.229-.702.188a.87.87 0 0 1-.611-.39a1.3 1.3 0 0 1-.171-.39a3.3 3.3 0 0 1-.091-.908c.013-.72.174-1.76.613-3.173c.34-1.092.719-2.032 1.229-3.296l.007-.017l.296-.734c-.039-2.318.42-4.526 1.529-6.19c1.156-1.734 2.98-2.815 5.466-2.82h.018c2.486.005 4.31 1.086 5.466 2.82c1.108 1.664 1.568 3.872 1.53 6.19q.154.387.295.734l.007.018c.51 1.263.89 2.203 1.229 3.295c.439 1.412.6 2.452.613 3.173c.007.356-.023.663-.09.908c-.034.12-.085.26-.172.39a.87.87 0 0 1-.611.39c-.333.04-.594-.117-.702-.188a2.4 2.4 0 0 1-.373-.317a6 6 0 0 1-.379-.431a6.5 6.5 0 0 1-1.05 1.818q.163.078.317.167c.232.135.515.33.708.598c.103.142.2.333.226.567c.027.246-.032.481-.152.685a1 1 0 0 1-.41.37a1.7 1.7 0 0 1-.34.124a5 5 0 0 1-.728.119c-.531.052-1.206.071-1.893.07c-1.317-.002-2.763-.077-3.5-.153m-5.502-12.22c-.057-2.19.372-4.118 1.275-5.475c.877-1.316 2.235-2.15 4.227-2.152c1.992.003 3.35.836 4.227 2.152c.903 1.357 1.332 3.285 1.275 5.476a.8.8 0 0 0 .053.298l.354.88c.518 1.281.875 2.168 1.194 3.196c.256.822.401 1.48.477 1.987c-.274-.389-.49-.733-.51-.765a.75.75 0 0 0-.738-.347h-.002a.75.75 0 0 0-.647.742c-.002.996-.531 2.384-1.727 3.398a.75.75 0 0 0-.068 1.08v.001a.76.76 0 0 0 .332.21c.141.043.311.1.486.167c-.36.018-.77.026-1.204.025c-1.325-.002-2.86-.087-3.502-.157c-.643.07-2.177.155-3.502.157a25 25 0 0 1-1.205-.025a8 8 0 0 1 .487-.167a.75.75 0 0 0 .331-.21h.001a.75.75 0 0 0 .186-.636v-.001a.75.75 0 0 0-.254-.444c-1.196-1.014-1.725-2.402-1.727-3.398a.75.75 0 0 0-.647-.742h-.002a.75.75 0 0 0-.739.347c-.02.032-.235.376-.509.765a13.5 13.5 0 0 1 .477-1.987c.319-1.028.676-1.914 1.194-3.196l.354-.88a.8.8 0 0 0 .053-.298" clip-rule="evenodd"/></svg>',

		afdian: '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M9 14.234a.567.567 0 1 0 0 1.134a.567.567 0 0 0 0-1.134m5.351 1.705a.567.567 0 1 0 0 1.135a.567.567 0 0 0 0-1.135m8.401 1.436c-.189.095-.461.1-.713.013c-.169-.06-.352-.116-.534-.172c-.339-.104-.904-.276-1.011-.407a.533.533 0 1 0-.853.643c.059.08.139.146.22.209c-.816 1.131-4.398 3.382-9.464 2.273c-2.283-.5-3.819-1.413-4.444-2.639c-.451-.885-.348-1.797-.133-2.293c.62-1.29 5.097-4.261 7.955-5.943a.537.537 0 0 0 .188-.733c-.149-.254-.49-.356-.73-.189c-.231.135-1.015.601-2.015 1.236c-.338-.227-.923-.508-1.86-.6c-1.486-.148-4.92-.805-6.029-1.275C2.535 7.162.731 6.27 1.131 5.267c.092-.234.527-.613 1.47-.974a8.5 8.5 0 0 1 1.995-.492l-.212.103c-.642.312-1.343.662-1.813 1.075c-.034-.022-.07-.044-.094-.069a.527.527 0 0 0-.754-.017a.533.533 0 0 0-.017.756c.19.2.471.35.829.465l.039.014c1.245.383 3.458.336 6.578.211c1.345-.052 2.615-.102 3.674-.082c3.512.07 6.152 1.469 8.07 4.279c1.178 1.725.753 3.426.079 4.903a1.4 1.4 0 0 1-.231-.222a.54.54 0 0 0-.75-.085a.535.535 0 0 0-.086.751c.109.137.665.778 1.355.724l.037-.002c.021-.003.042.001.064-.003c.472-.086.768-.063 1.045.111c.367.232.547.37.511.485c-.021.073-.076.125-.168.177M8.19 11.418l-.315.231a1.6 1.6 0 0 1-.243-.32c.123-.038.33.007.558.089m14.733 4.356a1.9 1.9 0 0 0-.81-.27c.632-1.544 1.034-3.565-.336-5.572c-2.096-3.072-5.101-4.668-8.93-4.744c-1.091-.022-2.377.029-3.737.083c-1.58.063-3.683.145-5.112.027c.285-.155.588-.304.851-.431c1.006-.49 1.797-.872 1.535-1.548c-.137-.396-.547-.603-1.219-.618C3.748 2.669.688 3.489.138 4.872c-.31.779-.361 2.282 2.775 3.61c1.29.548 4.934 1.216 6.341 1.355c.397.039.701.119.931.205a75 75 0 0 0-.986.664c-.577-.329-1.521-.718-2.226-.237a.94.94 0 0 0-.435.768c-.01.385.224.763.486 1.066c-1.038.83-1.877 1.634-2.175 2.253c-.332.762-.467 2.008.153 3.224c.786 1.544 2.524 2.62 5.166 3.199c3.454.755 6.437.075 8.411-.966c1.099-.579 1.878-1.27 2.257-1.887l.356.113c.169.051.338.103.496.159c.522.181 1.1.157 1.545-.068l.025-.013c.336-.177.577-.46.683-.803c.285-.922-.528-1.432-1.018-1.74"/></svg>',

		sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
			'stroke-linecap="round" aria-hidden="true">' +
			'<circle cx="12" cy="12" r="4"/>' +
			'<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41' +
			'M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',

		moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
			'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
			'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',

		auto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
			'aria-hidden="true">' +
			'<circle cx="12" cy="12" r="9"/>' +
			'<path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none"/></svg>',

		arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
			'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
			'<path d="M12 19V5"/>' +
			'<path d="m5 12 7-7 7 7"/></svg>'
	};

	/* ---------- 顶部栏 HTML ---------- */
	var html = [
		'<header class="topbar">',
		'<div class="wrap topbar-inner">',

		'<a class="logo" href="' + root + '">',
		'<img class="logo-img" src="https://zhaijifu67.github.io/favicon.ico"',
		' alt="宅爷的工具箱" width="30" height="30" loading="eager">',
		'<span>宅爷的工具箱</span>',
		'</a>',

		showSearch ?
		'<div class="search">' + ICONS.search +
		'<input id="q" type="search" placeholder="搜索工具…（如：跑团、图片、FF14）" ' +
		'aria-label="搜索工具" autocomplete="off"></div>' :
		'',

		'<div class="topbar-actions">',
		'<a class="icon-btn" href="https://github.com/zhaijifu67/" target="_blank" ' +
		'rel="noopener" aria-label="GitHub" title="GitHub">' + ICONS.github + '</a>',

		'<a class="icon-btn" ' +
		'href="tencent://AddContact/?fromId=45&amp;fromSubId=1&amp;subcmd=all&amp;uin=744561141" ' +
		'aria-label="QQ 联系" title="QQ 联系">' + ICONS.qq + '</a>',

		'<a class="sponsor" href="https://afdian.com/a/zhaiye" target="_blank" rel="noopener">',
		ICONS.afdian,
		'<span class="sponsor-text">爱发电</span>',
		'</a>',

		'<button class="icon-btn theme-toggle" id="themeToggle" type="button" ' +
		'aria-label="切换主题">' + ICONS.auto + '</button>',
		'</div>',

		'</div>',
		'</header>'
	].join('');

	var temp = document.createElement('div');
	temp.innerHTML = html;
	var header = temp.firstElementChild;

	if (script && script.parentNode) {
		script.parentNode.insertBefore(header, script);
	} else {
		body.insertBefore(header, body.firstChild);
	}

	/* ---------- 主题按钮 ---------- */
	var btn = header.querySelector('#themeToggle');

	function updateBtn() {
		if (!btn || !window.ZhaiyeTheme) return;
		var mode = ZhaiyeTheme.get();
		var labels = {
			light: '浅色',
			dark: '深色',
			auto: '跟随系统'
		};
		var icon = mode === 'light' ? ICONS.sun :
			mode === 'dark' ? ICONS.moon :
			ICONS.auto;
		btn.innerHTML = icon;
		btn.dataset.mode = mode;
		btn.title = '主题：' + labels[mode] + '（点击切换）';
		btn.setAttribute('aria-label', '切换主题，当前：' + labels[mode]);
	}

	if (btn) {
		updateBtn();
		btn.addEventListener('click', function() {
			if (window.ZhaiyeTheme) {
				ZhaiyeTheme.cycle();
				updateBtn();
			}
		});
		document.addEventListener('themechange', updateBtn);
	}

	/* ---------- 把顶栏实际高度同步给 CSS 变量 ---------- */
	function syncTopbarHeight() {
		var h = header.offsetHeight;
		document.documentElement.style.setProperty('--topbar-h', h + 'px');
	}
	syncTopbarHeight();

	if (window.ResizeObserver) {
		new ResizeObserver(syncTopbarHeight).observe(header);
	} else {
		window.addEventListener('resize', syncTopbarHeight);
	}

	/* ---------- 返回顶部按钮 ---------- */
	var THRESHOLD = 400;

	var backBtn = document.createElement('button');
	backBtn.type = 'button';
	backBtn.className = 'back-to-top';
	backBtn.setAttribute('aria-label', '返回顶部');
	backBtn.title = '返回顶部';
	backBtn.innerHTML = ICONS.arrowUp;
	backBtn.setAttribute('aria-hidden', 'true');
	backBtn.tabIndex = -1;

	body.appendChild(backBtn);

	var reduceMotion = window.matchMedia ?
		window.matchMedia('(prefers-reduced-motion: reduce)') :
		{
			matches: false
		};

	var ticking = false;

	function updateBackToTop() {
		var y = window.pageYOffset || document.documentElement.scrollTop;
		var visible = y > THRESHOLD;
		backBtn.classList.toggle('is-visible', visible);
		backBtn.setAttribute('aria-hidden', visible ? 'false' : 'true');
		backBtn.tabIndex = visible ? 0 : -1;
		ticking = false;
	}

	function onScroll() {
		if (!ticking) {
			ticking = true;
			window.requestAnimationFrame(updateBackToTop);
		}
	}

	window.addEventListener('scroll', onScroll, {
		passive: true
	});
	updateBackToTop();

	backBtn.addEventListener('click', function() {
		if (reduceMotion.matches) {
			window.scrollTo(0, 0);
		} else {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	});
})();