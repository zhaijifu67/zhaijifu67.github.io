document.addEventListener('DOMContentLoaded', function() {
	var nav = document.createElement("div");
	nav.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
			<div class="container-xxl">
				<a class="navbar-brand" href="/">
					<img src="/favicon.ico" alt="logo" height="25" class="d-inline-block align-text-top" />
					<div class="d-inline">宅爷的工具箱</div>
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#zhaiNavbarMain" aria-controls="zhaiNavbarMain"
					aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<!-- <div class="collapse navbar-collapse" id="zhaiNavbarMain">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
								aria-expanded="false">
								Dropdown
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" aria-disabled="true">Disabled</a>
						</li>
					</ul>
					<form class="d-flex" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button class="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div> -->
			</div>
		</nav>`
	document.body.insertBefore(nav.children[0], document.body.firstChild);
});

function loadBootstrap() {
  // 避免重复加载
  if (document.querySelector('link[href*="bootstrap.min.css"]')) return;
  if (document.querySelector('script[src*="bootstrap.bundle.min.js"]')) return;

  // 加载 Bootstrap CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css';
  document.head.appendChild(cssLink);

  // 加载 Bootstrap JS（包含 Popper）
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js';
  document.head.appendChild(script);
}

// 调用即可
loadBootstrap();