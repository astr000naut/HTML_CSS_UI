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

    $('.m-table thead tr .t__checkbox').click(function() { 
        $(this).toggleClass('t__checkbox--checked');
    });
    
    $("button").click(function(e) {
        el = $("ul." + this.className).toggle();
        
        // add these lines
        $('button').parent().removeClass('above');
        $(this).parent().addClass('above');
      })
    
})

