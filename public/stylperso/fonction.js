$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

});
// ------------------------------------------------------------------------------ //
// Toggle Search
// ------------------------------------------------------------------------------ //
$("nav.navbar.bootsnav #attr-nav").each(function(){
    $("li.search > a", this).on("click", function(e){
        e.preventDefault();
        $(".top-search").slideToggle();
    });
});
$(".input-group-addon.close-search").on("click", function(){
    $(".top-search").slideUp();
});