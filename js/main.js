require(
	{
		basePath: 'js',
		paths: {
			'jquery': 		'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
			'F2': 			'//cdnjs.cloudflare.com/ajax/libs/F2/1.2.1/f2.no-jquery-or-bootstrap.min',
			'bootstrap': 	'bootstrap.min'
		},
		shim: {
			'bootstrap': {
				deps: ['jquery'],
				exports: 'jquery'
			}
		}
	},
	[
		'jquery',
		'F2',
		'bootstrap'
	], 
	function($, F2) {

	}
);