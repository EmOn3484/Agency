jQuery(document).ready(function($) {
	$('.block-bg').each(function(index, el) {
		if($(this).attr('data-bg-image')){
			$bg_img = $(this).attr('data-bg-image');
			$(this).css('background-image', 'url('+$bg_img+')');
			if($(this).attr('data-bg-position')) {
				$bg_position = $(this).attr('data-bg-position');
				$(this).css('background-position', $bg_position);
			}
			if($(this).attr('data-bg-size')) {
				$bg_size = $(this).attr('data-bg-size');
				$(this).css('background-size', $bg_size);
			}
			if($(this).attr('data-bg-overlay')) {
				$bg_overlay = $(this).attr('data-bg-overlay');
				$(this).prepend('<div class="block-bg-overlay"></div>');
				$(this).css('position', 'relative');
				$(this).find('.block-bg-overlay').css('background-color', $bg_overlay);
			}
			removeDataAttributes($(this));
		} else if ($(this).attr('data-bg-color')) {
			$bg_color = $(this).attr('data-bg-color');
			$(this).css('background-color', $bg_color);
		}
	});
});

function removeDataAttributes(target) {

    var i,
        $target = jQuery(target),
        attrName,
        dataAttrsToDelete = [],
        dataAttrs = $target.get(0).attributes,
        dataAttrsLen = dataAttrs.length;

    // loop through attributes and make a list of those
    // that begin with 'data-'
    for (i=0; i<dataAttrsLen; i++) {
        if ( 'data-' === dataAttrs[i].name.substring(0,5) ) {
            // Why don't you just delete the attributes here?
            // Deleting an attribute changes the indices of the
            // others wreaking havoc on the loop we are inside
            // b/c dataAttrs is a NamedNodeMap (not an array or obj)
            dataAttrsToDelete.push(dataAttrs[i].name);
        }
    }
    // delete each of the attributes we found above
    // i.e. those that start with "data-"
    jQuery.each( dataAttrsToDelete, function( index, attrName ) {
        $target.removeAttr( attrName );
    })
};