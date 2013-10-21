function url_spy($) {
	// route has the current url path
    route = document.location.href; 
    route = route.slice(route.lastIndexOf('/') + 1, route.length);
    if (route == "") {
        route = "#dashboard";
    }
    // Remove active class from previous active tab andd closes the open submenu
    $('.nav-list').find('.active').removeClass('active').find('.dropdown-toggle').trigger('click'); 
    // Selects all the anchors under (immediate child)li elements(descendent of .nav-list class)
    $('.nav-list li > a').each(function() { 
    	// a has the current anchor
        var a = this.href; 
        if (a.search(route) > 0) {
        	// Adds active class to the anchor's tab
            $(this).parents('li').addClass('active'); 
        }
    });
};
