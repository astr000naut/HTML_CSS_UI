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

    $('.pag__arrowdown').click(function() {
        $(this).parent().find('.record__amount__select').toggleClass('display--none');
    })
    
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

    $(".wrapper .btn--close").click(function(e) {
        $(".wrapper").addClass("wrapper--off");
    })
     
    $(".pcontent__heading button").click(function(e) {
        $(".wrapper").removeClass("wrapper--off");
    })

    $('.checkbox').click(function() { 
        $(this).toggleClass('mi-checkbox-checked');
    });
    
    $('.dpicker__icon').click(function() { 
        $(this).parent().parent().parent().find('.dpicker__box').toggleClass('display--none');
    });

    $('.dp__header__left').click(function() {
        $(this).parent().parent().find('.dpicker__yearlist').toggleClass('display--none');
        $(this).parent().parent().find('.dpicker__daylist').toggleClass('display--none');
    })

    // Combobox 
    $('.select__button').click(function() {
        $(this).parents().eq(2).find('.select__optionbox').toggleClass('display--none');
    })
})

