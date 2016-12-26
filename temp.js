import './temp.scss'
import './Pages/MainPage.scss'
// test

window.addEventListener('load', function() {
	let prevScrollTop = 0;
	let isSidebarVisible = false;

	document.getElementById('f-overlay-chkbx').addEventListener('change', (event) => {
		
		prevScrollTop = window.pageYOffset || document.documentElement.scrollTop;
		isSidebarVisible = event.target.checked;

		window.addEventListener('scroll', (event) => {
			if (isSidebarVisible) {
				window.scrollTo(0, prevScrollTop);
			}
		});
	})

});