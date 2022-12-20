$(document).ready(function() {


	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$(".header a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({   
	    highlightSelector:"nav a"
	});

	// Сортировка портфолио
	$('#portfolio-projects').mixItUp();

	$(".fancybox").fancybox({
		// Default - with fix from scroll to top
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	$(function(){
		$('.filter__button').click(function(){
				$('.filter__button').removeClass('filter__button--active');
				$(this).addClass('filter__button--active');
		});
	});

	$("#main-form").validate({
		rules: {
			name: { 
				required: true
			 },
			email: { 
				required: true,
				 email: true 
			},
			textarea: { 
				required: true 
			}
		},
		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Формат неверен, пример name@domain.ru"
			},
			textarea: "Пожалуйста, введите текст сообщения"
		},
		submitHandler: function(form) {
			ajaxFormSubmit();
		  }
		
	  });

	  function ajaxFormSubmit(){
		var string = $("#main-form").serialize(); // Сохраняем данные введенные в форму в строку. 

		$.ajax({
			type: "POST",
			url: "../php/mail.php",
			data: string,
			success: function(html){
				$("#main-form").slideUp(500);
				$('#answer').html(html);
			}
		});

		return false; 
	}
}); 