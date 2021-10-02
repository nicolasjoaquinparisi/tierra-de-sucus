$(document).ready(function(){

    $('#container-images0').waypoint(function() {

        $('#img0').addClass('animation-fadeInLeft');
        $('#img0').css('opacity', 1);

        $('#img1').addClass('animation-fadein');
        $('#img1').css('opacity', 1);

        $('#img2').addClass('animation-fadeInRight');
        $('#img2').css('opacity', 1);

    }, { offset: '50%' });

    $('#container-images1').waypoint(function() {

        $('#img3').addClass('animation-fadeInLeft');
        $('#img3').css('opacity', 1);

        $('#img4').addClass('animation-fadein');
        $('#img4').css('opacity', 1);

        $('#img5').addClass('animation-fadeInRight');
        $('#img5').css('opacity', 1);

    }, { offset: '50%' });

});