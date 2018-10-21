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
function setActive() {
    aObj = document.getElementById('navbar-menu').getElementsByTagName('a');
    for(i=0;i<aObj.length;i++) {
        if(document.location.href.indexOf(aObj[i].href)>=0) {
            aObj[i].className='active';
        }
    }
}
window.onload = setActive;

$(document).ready(function()
    {
        var hash = window.location.hash.substr(1);
        console.log(hash);

        if(hash == 'starter')
        {
            $('#devis_caseStarterPack').prop('checked', true);
        }

        if(hash == 'challenger')
        {
            $('#devis_caseChallengerPack').prop('checked', true);
        }

        if(hash == 'expert')
        {
            $('#devis_caseExpertPack').prop('checked', true);
        }

        if(hash == 'inboundmarketing')
        {
            $('#devis_caseInboundMarketing').prop('checked', true);
        }

        if(hash == 'design')
        {
            $('#devis_caseDesign').prop('checked', true);
        }

        if(hash == 'consulting')
        {
            $('#devis_caseConsulting').prop('checked', true);
        }

        $("h1:contains('Oops! An Error Occurred')").remove();
        $("h2:contains('The server returned a \"500 Internal Server Error\".')").remove();


    }
);
