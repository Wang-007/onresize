function $(id) { return document.getElementById(id); }

function show(obj) { obj.style.display = 'block'; }
function hide(obj) { obj.style.display = 'none'; }

function scroll() {
	if (window.pageXOffset != null) {
		return {
			left: window.pageXOffset,
			top: window.pageYOffset
		}
	} else if (document.compatMode == 'CSS1Compat') {
		return {
			left: document.documentElement.scrollLeft,
			top: document.documentElement.scrollTop
		}
	}
	return {
		left: document.body.scrollLeft,
		top: document.body.scrollTop
	}
}

function client() {
	if (window.innerWidth != null)
	{
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	}
	else if (document.compatMode === 'CSS1Compat')
	{
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	}
	return {
		width: document.body.clientWidth,
		height: document.body.clientHeight
	}
}