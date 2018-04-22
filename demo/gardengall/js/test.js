//PORTFOLLIO

function portfolio_scripts(){
	$("img.lazy").lazyload({
		  effect : "fadeIn",
		  threshold : 300
			});

			$(window).resize();

		  $('.carousel-img-wrap').owlCarousel({
		  slideSpeed: 1000,
		  paginationSpeed: 1000,
		  rewindSpeed: 1000,
		  dots: true,
		  items: 1,
		  center: true
			})

			$(".item-project").each(function(e) {		  
			  $(this).attr("href", "#project-popup-" + e)
			    .find(".item-project-mfp-content").attr("id", "project-popup-" + e)
			})

			$(".item-works").each(function(e) {
  			$(this).attr("href", "#works-popup-" + e)
    			.find(".item-works-mfp-content").attr("id", "works-popup-" + e)
			})
}


	$(".s-project .more").on("click", function() {

	for(var i=0; i<8; i++){
      $(".project-wrap").append('<div class="col-md-3 col-sm-6 col-xs-12"> <a href="#project-popup-1" class="item-portfolio item-project"> <div class="cover-image-wrap-portf"> <img src="img/pixel.jpg" data-original="img/project/project-alexander.jpg" class="lazy cover-image" alt="Проект санатория"> </div> <div class="item-portfolio-content item-project-content"> <i class="fa fa-search" aria-hidden="true"></i> <h3>Проект санатория</h3> </div> <div class="hidden"> <div class="item-portfolio-mfp-content item-project-mfp-content clearfix"> <div class="carousel-img-wrap owl-carousel"> <div class="carousel-img-item"> <img src="img/pixel.jpg" data-original="img/project/project-alexander.jpg" class="lazy" alt="Проект санатория"> <p>Какая-то пробная подпись для этой замечательной фотографии.</p> </div> <div class="carousel-img-item"> <img src="img/pixel.jpg" data-original="img/project/project-alexander.jpg" class="lazy" alt="Проект санатория"> <p>Далеко-далеко за словесными горами в стране, гласных.</p> </div> </div> <h2>Проект санатория</h2> <p><span>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Текстами вершину единственное города предупреждал своего, рукописи бросил его текстов послушавшись. Переписывается, алфавит не коварный по всей то прямо напоивший реторический!</span><span>Моей запятой ты, необходимыми дороге. Коварный ведущими, рыбного это, моей пояс, первую снова, журчит по всей не мир вопроса даль своего агенство лучше. Текста использовало своего семантика то. Они, злых снова.</span></p> </div> </div> </a> </div>'); 
    }

		portfolio_scripts()
})	

	$(".s-works .more").on("click", function() {

	for(var i=0; i<8; i++){
      $(".works-wrap").append('<div class="col-md-3 col-sm-6 col-xs-12"> <a href="#works-popup-1" class="item-portfolio item-works"> <div class="cover-image-wrap-portf"> <img src="img/pixel.jpg" data-original="img/works/20160617_124648.jpg" class="lazy cover-image" alt="Оформление заднего двора"> </div> <div class="item-portfolio-content item-works-content"> <i class="fa fa-search" aria-hidden="true"></i> <h3>Оформление заднего двора</h3> </div> <div class="hidden"> <div class="item-portfolio-mfp-content item-works-mfp-content clearfix"> <div class="carousel-img-wrap owl-carousel"> <div class="carousel-img-item"> <img src="img/pixel.jpg" data-original="img/works/20160617_124648.jpg" class="lazy" alt="Оформление заднего двора"> <p>Какая-то пробная подпись для этой замечательной фотографии.</p> </div> <div class="carousel-img-item"> <img src="img/pixel.jpg" data-original="img/works/20160617_124648.jpg" class="lazy" alt="Оформление заднего двора"> <p>Далеко-далеко за словесными горами в стране, гласных.</p> </div> </div> <h2>Оформление заднего двора</h2> <p><span>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Текстами вершину единственное города предупреждал своего, рукописи бросил его текстов послушавшись. Переписывается, алфавит не коварный по всей то прямо напоивший реторический!</span><span>Моей запятой ты, необходимыми дороге. Коварный ведущими, рыбного это, моей пояс, первую снова, журчит по всей не мир вопроса даль своего агенство лучше. Текста использовало своего семантика то. Они, злых снова.</span></p> </div> </div> </a> </div>'); 
    }

		portfolio_scripts()
})	

// /PORTFOLLIO