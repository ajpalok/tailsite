---
layout: compress
---
$(document).ready(function(){

	/* Json management data variables*/
	var all_signatories = [];
	var signatories_mold = [];
	var signatories_in_array_count = 0;
	var signatories_molds_in_html_count = 0;
	var signatories_in_json = 0;
	var signatories_processed = 0;

	/* Infinite scroll throttle and functions variables*/
	var scrollTolerance = 900; /* Define range of pixels between scroll position and bottom page as a tolerance to trigger the function */
	var elementsToAppendPerScroll = 5; /* Define the elements to index when user reach bottom of the site */

	$.getJSON( "{{site.baseurl}}/assets/json/all_posts.json", function(data) {
	/*	console.log("json data: " + data.signatories.length); */
		signatories_in_json = data.signatories.length;

		$.each(data.signatories, function(key, val) {
			signatories_processed += 1;

			var signatory_name = val.name;
			var signatory_url = val.url;
			var signatory_image = val.image_url;
			var signatory_category = val.category;
			var signatory_category_url = val.category_url;
			var signatory_body = val.body;

			var signatory_card = '
			  <div class="p-4 md:w-1/3">
			    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
			      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="' + signatory_image + '" alt="' + signatory_name + '">
			    <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><a href="' + signatory_category_url + '">' + signatory_category + '</a></h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">' + signatory_name + '</h1>
            <p class="leading-relaxed mb-3">' + signatory_body + '</p>
            <div class="flex items-center flex-wrap ">
              <a href="' + signatory_url + '" class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0" title="' + signatory_name + '">Read More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>';
    
			signatories_mold.push(signatory_card);
			signatories_in_array_count += 1;


			if((signatories_in_array_count % elementsToAppendPerScroll) == 0 || signatories_processed == signatories_in_json){
				var signs_left = signatories_processed % elementsToAppendPerScroll;
				var signs_to_index = (signs_left == 0) ? elementsToAppendPerScroll : signs_left;
				
				var last_signs_to_index = signatories_mold.slice(-1 * signs_to_index);
				all_signatories.push(last_signs_to_index);
			}
		});

		/* console.log(all_signatories.length + " posts found"); */
		infiniteScrollAppend();
	});


	

	function infiniteScrollAppend(){
		/* console.log("Executing: infiniteScrollAppend"); */
		var scrollPosition = $(window).scrollTop();
		var scrollTrigger = $(document).height() - $(window).height() - scrollTolerance;

		/* Detect if user is at the bottom of the site */
		if (scrollPosition > scrollTrigger) {
	        if (signatories_molds_in_html_count < all_signatories.length) {
	        	$(".post-div").append(all_signatories[signatories_molds_in_html_count]);
	        	signatories_molds_in_html_count += 1;

	        	if (signatories_molds_in_html_count == all_signatories.length){
	        		$('.post-div').removeClass("loading-posts");
	        	}
	        };
	    }
	}

	var throttle = function throttle(func, limit) {
		var lastFunc = void 0;
		var lastRan = void 0;
		return function () {
			var context = this;
			var args = arguments;
			if (!lastRan) {
				func.apply(context, args);
				lastRan = Date.now();
			} else {
				clearTimeout(lastFunc);
				lastFunc = setTimeout(function () {
					if (Date.now() - lastRan >= limit) {
						func.apply(context, args);
						lastRan = Date.now();
					}
				}, limit - (Date.now() - lastRan));
			}
		};
	};
	$(window).on('scroll', throttle(function (event) {
		infiniteScrollAppend();
	}, 300));
});
