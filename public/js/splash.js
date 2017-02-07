'use strict';
jQuery(document).ready(function() {
    jQuery('.splashFading').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
       });
});
