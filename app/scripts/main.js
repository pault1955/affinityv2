$(document).ready(function () {

    $( "ul.root_menu > li:first-child" ).addClass( "first" );
    $( "ul.root_menu > li:last-child" ).addClass( "last" );

    $("ul.root_menu li:first-child").addClass("first_item");
    $("ul.root_menu li:last-child").addClass("last_item");


    $('.gallery_ul').show().bxSlider({
        mode: 'fade',
        auto: true,
        pause: 8000,
        speed: 500,
        pager: true,
        controls: false,
        preloadImages: 'all'
    });


    $( ".bannerSlides ul li.gallery_li a img" ).each(function( index ) {
        var articleListLink = $(this).parent().attr("href");
        var alt = $(this).attr('alt');
        var data = $.parseHTML( alt );
        var title = '<div class="slideTitle">' + ($(data).text().split('*')[ 0 ] || '') + '</div>';
        var subtitle = '<div class="slideText">' + ($(data).text().split('*')[ 1 ] || '') + '</div>';
        var caption = '<div class="caption">' + title + subtitle + '<a href="'+ articleListLink +'" class="slideButton">Read more »</a></div>'
        $(caption).insertAfter( this );
    });

    $('.root_menu').slicknav({
        prependTo: '#mobile_nav',
        allowParentLinks: true,
        label: "Menu",
        'init': function(){
            if ($('body').hasClass('guest_user')) {
                $('<li class="sign_in_nav"><a href="/user/login.aspx"class="login_item" title="Login to access more features">Login</a></li><li><a href="/User/Registration.aspx" class="login_item" title="Apply for web site username and password" class="register_link">Register</a></li>').insertAfter('.slicknav_nav > .last_item').fadeIn("slow");
            }else{
                $('<li class="log_out_nav"><a href="/User/Logout.aspx"class="login_item" title="Sign out of the web site" class="logout_link">Logout</a></li><li><a href="/Admin/Default.aspx" class="login_item" title="Access site administration pages" class="weboffice_link">Web Office</a></li>').insertAfter('.slicknav_nav > .last_item').fadeIn("slow");
            }
        }
    });


    /* remove sub menus from Home   */

    $("ul.root_menu > li.has_sub_menu:first-child > ul.sub_menu").remove();

    /* remove 1st item in dropdown menu re-instate my area>my details.
     set background color on ul where no groups below top-level item   */

    $('.menu_item_level_2.first').each(function() {
        if($(this).find('a[href=\'/MyArea/MyDetails.aspx\']').length == 0) {
            if($(this).siblings().length == 0) {
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
        $('#nav ul.root_menu ul.sub_menu_level_1 > li.menu_item_level_2.first_item.last_item').css('pointer-events','auto');
    }

});