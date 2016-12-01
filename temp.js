import './temp.scss'
import './Pages/MainPage.scss'
// test

var pageBg = document.querySelector('.f-bg-gradient');
var className = ['f-bg-ultra-green', 'f-bg-ultra-yellow', 'f-bg-ultra-coral', 'f-bg-ultra-lilac', 'f-bg-ultra-blue'];
var prevScreen = 0;
var originalClass = pageBg.className;
pageBg.classList.add('f-bg-ultra-blue');


window.onscroll = function () {
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var screen = Math.round(window.pageYOffset / height);

	if (!(screen == prevScreen)) {

		var firstClass = className.shift();
		className.push(firstClass);

		pageBg.className = originalClass + ' ' + firstClass;
		prevScreen = screen;
	}
	
}
