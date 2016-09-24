(function (factory) {
	 if(typeof define=='function'&&define.amd){
	 	define(['jquery'],factory);
	 }
	 else if(typeof exports=='object'){
	 	module.exports=factory;
	 }
	 else{
	 	factory(jQuery);
	 }
}(function ($) {
		 $.fn.addModal=function (options) {
		 	var screenW=$(window).innerWidth(),
			 	screenH=$(window).innerHeight(),
			 	cvs=$("#am-modal-cvs")[0],
			 	img={};
			 	context=cvs.getContext('2d');
			 	// two defaults property,src is image's path and scale is 
			 	// how many times the images's width and height comparing to screen's. 
		 	var defaults={
			 	src:"",
			 	scale:0.85,
			 	text:"this is image's text"
		 	};
		 	
		 	// use user's option to cover the defaults
		 	options=$.extend(defaults,options);
		 	
		 	$(".am-modal").width(screenW).height(screenH);


		 	// load the image
			function loadPic (src) {
			 	img=new Image();
			 	img.src=src;

			 	img.onload=function () {
			 	 	img=scalePic(img); 	 
			 	 	$(".am-modal-bd").css({
			 	 	 	width:img.width,
			 	 	 	marginLeft:-img.width/2
			 	 	}) 
			 	 	cvs.width=img.width;
			 	 	cvs.height=img.height;
			 	 	context.drawImage(this,0,0,cvs.width,cvs.height);
			 	 };
			 }
		 
		 	// control picture's size
			function scalePic (img) {
			 	while(img.width>screenW*options.scale||img.height>screenH*options.scale){
			 	 	img.width*=0.9;
			 	 	img.height*=0.9;
			 	}
			 	 return img
			}

		 	$(this).click(function () {
		 		$(".am-modal-text").text(options.text);
				$(".am-modal").fadeIn();
				$(".am-modal-mask").fadeIn();
				loadPic(options.src);
		 	})

		 	$(".am-modal-mask,.am-modal-close").click(function () {
		 		 
		 		$(".am-modal-bd").addClass("am-modal-fade");
		 		$(".am-modal-fade").css({
		 		 	"animation":"modalFade 0.3s ease"
		 		});
		 		$(".am-modal-mask").fadeOut();
		 		// hide the whole modal when the am-modal-fade's aniamtion finished
		 		// reset am-modal-bd's animation and remove am-modal-fade class
		 		setTimeout(function () {
		 		 	$(".am-modal-bd").css({
		 		 		"animation":"modalShow 0.2s ease-out"
		 		 	}).removeClass("am-modal-fade");
		 		 	$(".am-modal")[0].style.display = 'none';
		 		},290);
		 	})
		} 	 
}));