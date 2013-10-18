/** 
 * Script based on http://ejohn.org/blog/jquery-livesearch/
 *
 * 
 */
jQuery.fn.liveUpdate = function($list){

  //console.log($list)
  
  $rows = $list;

  if ( $list.length ) {
    var $rows,
        cache;

    cache = $rows.map(function(){

      var b64Decoded = function(el){
        var encoded = $(el).attr('data-item') || '',
          decoded = $.base64.decode( encoded );
        if (decoded){
          return JSON.parse(decoded);
        } else {
          return $.extend(decoded,{displayName:''});
        }
      }

      //console.log(b64Decoded(this))

      //filter by name only (for now)
      return b64Decoded(this).displayName.toLowerCase();
    });
     
    this.keyup(filter);
  }
   
  return this;
   
  function filter(){
    var term = jQuery.trim( jQuery(this).val().toLowerCase() ), 
      scores = [];
   
    if ( !term ) {
      $rows.show(); //.fixGridClasses();
    } else {
      $rows.hide();

      cache.each(function(i){
        var score = this.score(term);
        if (score > 0) { scores.push([score, i]); }
      });
 
      jQuery.each(scores.sort(function(a, b){return b[0] - a[0];}), function(){
        jQuery($rows[ this[1] ]).show();
      });

      //$rows.fixGridClasses();
      
    }
  }
};