$(document).ready(() => {
    $('.m-table tbody tr').click(function() { 
        if ($(this).hasClass("tr--selected")) {
            $(this).removeClass("tr--selected");
            $(this).find('.t__checkbox').removeClass("t__checkbox--checked");
        } else {
            $('.m-table tbody tr').removeClass("tr--selected"); 
            $('.m-table tbody .t__checkbox').removeClass("t__checkbox--checked"); 
            $(this).addClass("tr--selected");    
            $(this).find('.t__checkbox').addClass("t__checkbox--checked");
        }
    });



    
    $(".btn__expand").click(function(e) {
        $(".actions-list").removeClass('activee');
        $(this).next().toggleClass("activee");

        $(".t__optionbox").parent().removeClass('above');
        $(this).parent().parent().toggleClass('above');
    })
    $('.actions-list').on("mouseleave", function(e) {
        $(this).removeClass("activee");
        $(this).parent().parent().removeClass('above');
    })
     
    
})

