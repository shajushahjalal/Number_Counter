jQuery(function ($) {
	'use strict';

	$("#number_counter").mouseover(function(){
		countNumber();
	});

	function countNumber(){
		const counters = $('.number_counter');
		if(counters.length > 0){
	
			const speed = 300;
			counters.each( function(index){
				const numberCounter = () => {
					console.log($(this).attr("count"));
					const count = + $(this).attr("count");
					const data = + $(this).text();
					const time = count / speed;
	
					if(data < count) {
						$(this).text(Math.ceil(data + time));
						setTimeout(numberCounter, 1);
					}else{
						$(this).text(data);
					}
				}
				numberCounter();				
			} );		
		}
	}

});
