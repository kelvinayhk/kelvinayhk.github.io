$(document).ready(function () {
    $('.sidebar ul li:first').addClass('active');
    $('.showcase:not(:first)').hide();
    $('.container').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('image/HomeBg.JPG')");
    $('.sidebar ul li a').click(function (event) {
        event.preventDefault();
        var content = $(this).attr('href');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(content).fadeIn("slow").show();
        $(content).siblings('.showcase').fadeOut("slow").hide();
        //$('.showcase').removeAttr('background-image');
        switch (content){
            case "#about": 
                $('.container').css("background-image", "");
                break;
                case "#skill": 
                $('.container').css("background-image", "");
                break;
                case "#contact": 
                $('.container').css("background-image", "");
                break;
            case "#home":
                $('.container').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('image/HomeBg.JPG')");
                break;
                default:
                $('.container').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('image/HomeBg.JPG')");
                break;

        }
        
    });
});
