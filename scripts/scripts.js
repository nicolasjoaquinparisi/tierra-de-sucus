$(document).ready(function(){

    let leftImages   = ['#img0', '#img3'];
    let middleImages = ['#img1', '#img4'];
    let rightImages  = ['#img2', '#img5'];

    $('#container-images').waypoint(function() {

        leftImages.forEach(img => {
            $(img).addClass('animation-fadeInLeft');
            $(img).css('opacity', 1);
        });

        middleImages.forEach(img => {
            $(img).addClass('animation-fadein');
            $(img).css('opacity', 1);
        });

        rightImages.forEach(img => {
            $(img).addClass('animation-fadeInRight');
            $(img).css('opacity', 1);
        })

    }, { offset: '50%' });

});