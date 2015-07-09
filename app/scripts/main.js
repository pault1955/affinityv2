$(document).ready(function () {

    $( 'ul.root_menu > li:first-child' ).addClass( 'first' );
    $( 'ul.root_menu > li:last-child' ).addClass( 'last' );

    $('ul.root_menu li:first-child').addClass('first_item');
    $('ul.root_menu li:last-child').addClass('last_item');


    $('.root_menu').slicknav({
        prependTo: '#mobile_nav',
        allowParentLinks: true,
        label: 'Menu',
        'init': function(){
            if ($('body').hasClass('guest_user')) {
                $('<li class="sign_in_nav"><a href="/user/login.aspx"class="login_item" title="Login to access more features">Login</a></li><li><a href="/User/Registration.aspx" class="login_item" title="Apply for web site username and password" class="register_link">Register</a></li>').insertAfter('.slicknav_nav > .last_item').fadeIn('slow');
            }else{
                $('<li class="log_out_nav"><a href="/User/Logout.aspx"class="login_item" title="Sign out of the web site" class="logout_link">Logout</a></li><li><a href="/Admin/Default.aspx" class="login_item" title="Access site administration pages" class="weboffice_link">Web Office</a></li>').insertAfter('.slicknav_nav > .last_item').fadeIn('slow');
            }
        }
    });

    $('.bannerSlides .gallery_ul').show().bxSlider({
        mode: 'fade',
        auto: true,
        pause: 8000,
        speed: 500,
        pager: true,
        controls: true,
        preloadImages: 'all'
    });


    $( '.bannerSlides ul li.gallery_li a img' ).each(function( ) {
        var slideLink = $(this).parent().attr('href');
        var alt = $(this).attr('alt');
        var data = $.parseHTML( alt );
        var title = '<div class="slideTitle">' + ($(data).text().split('*')[ 0 ] || '') + '</div>';
        var subtitle = '<div class="slideText">' + ($(data).text().split('*')[ 1 ] || '') + '</div>';
        var caption = '<div class="caption">' + title + '<div class="divider"></div>' + subtitle + '<a href="' + slideLink + '" class="slideButton">MORE DETAILS</a></div>';
        $(caption).insertAfter( this );
    });


    // not used in production

    $('.slice_affinity_4_al .info_cards .articleListSummary').each(function () {
        var articleListLink = $(this).parent().find('.articleListImage a').attr('href');
        var summaryText = $(this).find('span').text().split('*');
        $(this).text(summaryText[0]);
        var buttonText = summaryText[1];
        var button = '<div class="info_cards_button_wrapper"> <a class="info_cards_button" href="' + articleListLink + '">' + buttonText + '</a></div>';
        $(button).insertAfter(this);
    });


    $('.slice_affinity_4_al .info_cards > div').addClass('col-md-3   col-xs-8');


    // slice_affinity_latest_news

    $('.slice_affinity_latest_news .news_cards > div').addClass('col-xs-10 col-sm-4 center-block');


    $('.slice_affinity_latest_news .articleListTitle a').each(function (index) {
        var titleLink = $(this).attr("href");
        $(this).parent().parent().find('.articleListLink').wrapInner('<a  href="' + titleLink + '">');
    });

    $('.slice_affinity_latest_news .articleListImage img').each(function (index) {
        var imagePath = $(this).attr('src');
        $(this).attr('src', imagePath.replace("/Publisher/GetResizedImage.aspx?w=380&h=156&url=/", "/"));
    });


    // mini-slideshow slice

    $('.miniSlides .gallery_ul').show().bxSlider({
        mode: 'fade',
        auto: true,
        pause: 8000,
        speed: 500,
        pager: true,
        controls: true,
        preloadImages: 'all'
    });


    // slice_affinity_recent_media

    $('.slice_affinity_recent_media .media_cards > span > div').addClass('col-xs-10 col-sm-4 center-block');

    $('.slice_affinity_recent_media .mediaListTitle a').each(function (index) {
        var titleLink = $(this).attr("href");
        $(this).parent().parent().find('.mediaListLink').wrapInner('<a  href="' + titleLink + '">');
    });

    $('.slice_affinity_recent_media .mediaListImage img').each(function (index) {
        var imagePath = $(this).attr('src');
        $(this).attr('src', imagePath.replace("/Publisher/GetResizedImage.aspx?w=380&h=156&url=/", "/"));
    });


    /* Card Grid - Community */

    $('.slice_affinity_community .card_grid .gallery_li').addClass('col-xs-8 col-sm-6 col-md-4 center-block');

    $('.slice_affinity_community .card_grid .gallery_li a').each(function () {
        var cardGridLink = $(this).attr('href');
        var cardGridTitle = $(this).find('img').attr('title');
        var imgLink = '<div class="card_grid_title_wrapper"> <a class="card_grid_title" href="' + cardGridLink + '">' + cardGridTitle + '</a></div>';
        $(imgLink).insertAfter(this);
    });

    /* remove sub menus from Home   */

    $('ul.root_menu > li.has_sub_menu:first-child > ul.sub_menu').remove();

    /* remove 1st item in dropdown menu re-instate my area>my details.
     set background color on ul where no groups below top-level item   */

    $('.menu_item_level_2.first').each(function() {
        if($(this).find('a[href=\'/MyArea/MyDetails.aspx\']').length === 0) {
            if($(this).siblings().length === 0) {
                $(this).parent().remove();
            } else {
                $(this).remove();
            }
        }
    });

    /* allow drop down menus to work on android */

    if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
        $('ul.sub_menu.sub_menu_level_1 > li.menu_item.menu_item_level_2.first_item').css('display','list-item');
        $('ul.root_menu > li.has_sub_menu > a').css('pointer-events','none');
        $('ul.root_menu > li.has_sub_menu:first-child > a').css('pointer-events','auto');
        $('ul.root_menu ul.sub_menu_level_1 > li.menu_item_level_2.first_item.last_item').css('pointer-events', 'auto');
    }


    /* tidy up forums */
    if (location.pathname.toLowerCase().indexOf('/forums/threads.aspx') != -1 || location.pathname.toLowerCase().indexOf('/forums/messages.aspx') != -1)
        $('.systemPageLeft').css({'display': 'none'});

// style media system page
    $('#btnSearchTemplate').parent().removeClass('media_option_right').addClass('media_option_left').css({'width': '100%'}).next().removeClass('media_option_right').addClass('media_option_left').css({'width': '100%'})

// my area profile password input styling

    $('.gridheader #_ctl0__ctl0_cphBody_cphContents_txt_old_password').parent().css({'width': '20%'}).parent().find('#_ctl0__ctl0_cphBody_cphContents_Button1').css({
        'height': '23px',
        'padding-top': '0',
        'border-top-width': '0'
    });

//style change password

    $('.systemPageContent #_ctl0__ctl0_cphBody_cphContents_LoginDetailsBox_P').closest('table').parent().closest('table').find('input').css({'margin-bottom': '10px'});

//remove XML image from Forums

    $(".systemPageContent img[src$='/images/xml.gif']").parent().text('XML').css({'margin-left': '10px'})

// style login box

    if ($('div [id$="LoginNameValidator"]').length) {
        $('.systemPageContent .shadedbox').attr({"style": "max-width:300px !important;"})
    }

});