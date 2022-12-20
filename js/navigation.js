$(document).ready(function() {

	// находим элементы управления
	var navToggleButton = $('#navigation__button');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navLink = $('.navigation__list a');
	
	// класс активного списка
	var navBlockOpen = 'navigation__list--open';

	// События по клику на иконку
	navToggleButton.on('click', function(e){
		e.preventDefault(); // отключаем стандартную обработку события
		navBlock.toggleClass(navBlockOpen);
		navToggleButton.toggleClass("active");
	})

	// События по клику на ссылки
	navLink.on('click', function(){
		if ( navBlock.hasClass(navBlockOpen) ) {
			navToggleButton.toggleClass("active");
		}
		navBlock.removeClass(navBlockOpen);
	})
}); 