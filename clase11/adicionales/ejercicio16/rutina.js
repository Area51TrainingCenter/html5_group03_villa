jQuery(
	function($) {
		$("a#single_image").fancybox();
		$(".various").fancybox();

		$("a#inline").fancybox({
			'hideOnContentClick': true
		});

		$("a.iframe").fancybox(
			{
				'width'				: '75%',
				'height'			: '75%',
		        'autoScale'     	: false,
		        'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'type'				: 'iframe'
			}
		);

		$("a.galeria").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
		    return '<span id="fancybox-title-over">Image ' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
		}
	}
	);		


	}
)