(function() {
    $(document).ready(function() {
        $('ul.tabs').tabs('select_tab', 'my-feed');
        // $('ul.tabs').tabs({
        // 	swipeable: true,
        // 	responsiveThreshold: 500,
        // });


        $('input.autocomplete').autocomplete({
            data: {
                "Bharat Bhushan": null,
                "Shashank Merothiya": null,
                "Kapil Kataria": null,
                "Ritesh Gurung": null,
                "Kunal Soni": null,
                "Shruti Gupta": null,
                "Rahul Dewan": 'http://placehold.it/250x250'
            },
            limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
            onAutocomplete: function(val) {
                // Callback function when value is autcompleted.
            },
            minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
        });
    });

    $('.share-area textarea').on('focus', function() {
        $(this).parents('.share-area').addClass('focused');
    });

    $(document).click(function() {
        $(this).find('.share-area').removeClass('focused');
    });

    $('.share-area textarea').click(function(e) {
        e.stopPropagation();
    });

    $('.share-area .share-wrapper label').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).parents('.share-area').siblings('.fab-btn').removeClass("active");
        } else {
            $(this).parents('.share-area').siblings('.fab-btn').addClass("active");
        }
    });

    $(".fab-btn a").click(function() {
        var body = $("html, body");
        // $(this).parents('#my-feed').find("#share").focus();
        body.stop().animate({
            scrollTop: 0
        }, '500', 'swing', function() {}).find("#share").focus();
    });

    $('#onlyme input:checkbox').change(function() {
        if ($(this).is(":checked")) {
            $('#comments').children('.col').hide();
            $('#comments').children('.col.you').show();
        } else {
            $('#comments').children('.col').show();
        }
    });

    $(window).on('load', function() {
        setTimeout(function() {
            $('.welcome-screen').addClass('show');
        }, 1500)
    });

    $('.login a').click(function() {
        $(this).addClass('not-active');
        $('.login span').removeClass('not-active');
        window.setTimeout(function() {
            $('.google').removeClass('not-active');
            $('body').removeClass('temp');
        	$('.welcome-screen').addClass('not-active');
        }, 3000);
    });

    $('#my-feed .feeds .card-action a.edit-me').click(function() {
        $('.main-nav').addClass('not-active');
        $('.edit_nav').removeClass('not-active');
        $('.edit-section').addClass('active');
        $('.main-section').addClass('not-active');
    });

    $('#my-feed .feeds .card-action a.share-me').click(function() {
        $('.main-nav').addClass('not-active');
        $('.edit_nav').addClass('not-active');
        $('.share_nav').removeClass('not-active');
        $('.share-section').addClass('active');
        $('.main-section').addClass('not-active');
        $('.edit-section').addClass('not-active');
    });

    $('a.emp').click(function() {
        $('.main-nav').addClass('not-active');
        $('.emp_nav').removeClass('not-active');
        $('.emp-section').addClass('active');
        $('.main-section').addClass('not-active');
    });

    $('.back-edit').click(function() {
        $('.main-nav').removeClass('not-active');
        $('.edit_nav').addClass('not-active');
        $('.edit-section').removeClass('active');
        $('.main-section').removeClass('not-active');
    });

    $('.back-share').click(function() {
        $('.main-nav').removeClass('not-active');
        $('.share_nav').addClass('not-active');
        $('.share-section').removeClass('active');
        $('.main-section').removeClass('not-active');
        $('.edit-section').removeClass('not-active');
    });

    $('.back-emp').click(function() {
        $('.main-nav').removeClass('not-active');
        $('.emp_nav').addClass('not-active');
        $('.emp-section').removeClass('active');
        $('.main-section').removeClass('not-active');
    });


    // Chips Initialization

    $('.chips').material_chip();
    $('.chips-initial').material_chip({
        data: [{
            tag: 'shashank',
        }, {
            tag: 'rahul.dewan',
        }, {
            tag: 'kunal.soni',
        }],
    });
    $('.chips-placeholder').material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Name',
    });
    $('.chips-autocomplete').material_chip({
        autocompleteOptions: {
            data: {
                'shashank': null,
                'rahul.dewan': null,
                'kunal.soni': null
            },
            limit: Infinity,
            minLength: 1
        }
    });

    $('.modal').modal({
        endingTop: '40%'
    });

    $('.delete-me').click(function() {
        $('.deletable').hide();
    });

})(jQuery);
