$( ".change" ).on("click", function() {
    if( $("body").hasClass("dark") ) {
        $("body").removeClass("dark");
        $(".change").text("ON");
    } else {
        $("body").addClass("dark");
        $(".change").text("OFF");
    }
});