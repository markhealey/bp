require(
	{
		basePath: 'js',
		paths: {
			'jquery': 				'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
			'jquery-pjax': 			'thirdparty/jquery/plugins/jquery.pjax',
			'jquery-base64': 		'thirdparty/jquery/plugins/jquery.base64',
			'jquery-cookie': 		'thirdparty/jquery/plugins/jquery.cookie',
			'jquery-liveupdate': 	'thirdparty/jquery/plugins/jquery.liveupdate',
			'jquery-serializeObject':'thirdparty/jquery/plugins/jquery.serializeObject',
			'jquery-fancybox': 		'thirdparty/fancybox/jquery.fancybox.pack',
			'underscore': 			'thirdparty/underscore',
			'F2': 					'//cdnjs.cloudflare.com/ajax/libs/F2/1.3.0/f2.no-jquery-or-bootstrap.min',
			'bootstrap':			'thirdparty/bootstrap/bootstrap.min',
			'supplant': 			'thirdparty/string.supplant',
			'mousetrap': 			'thirdparty/mousetrap',
			'quicksilver': 			'thirdparty/quicksilver',
			'moment': 				'thirdparty/moment'
		},
		shim: {
			'bootstrap': {
				deps: ['jquery'],
				exports: 'jquery'
			},
			'jquery-pjax': ['jquery'],
			'jquery-base64': ['jquery'],
			'jquery-liveupdate': ['jquery'],
			'jquery-serializeObject': ['jquery'],
			'jquery-fancybox': ['jquery']
		}
	},
	[
		'jquery',
		'F2',
		'app',
		'underscore',
		'bootstrap',
		'moment'
	], 
	function($, F2, app) {

		//bring in any page-specific JS
		var pageModule = $('script[data-main][data-page-module]').data('pageModule');

		//start app
		app.initialize(pageModule);

		//require page-specific JS
		if (pageModule) {
			$(function() {
				require([pageModule], function(page){
					if (typeof page.initialize === 'function'){
						page.initialize();
					}
				});
			});	
		}

	}
);