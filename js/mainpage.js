$(document).ready(() => {
    $('.m-table tbody tr').click(function() { 
        if ($(this).hasClass("tr--selected")) {
            $(this).removeClass("tr--selected");
            $(this).find('.t__checkbox').removeClass("bg-green");
        } else {
            $('.m-table tbody tr').removeClass("tr--selected"); 
            $('.t__checkbox').removeClass("bg-green"); 
            $(this).addClass("tr--selected");    
            $(this).find('.t__checkbox').addClass("bg-green");
        }
      });
    
    
})

