$(function () {
    /**
     *
     */
    var text = $('.type-erase-animation').data('text');
    var i = 0;
    var typeEarse = true;
    setInterval(function(){
        // $('.type-erase-animation').append(text.charAt(i++));
        var t = $(".type-erase-animation").text();
        if(typeEarse){
            $('.type-erase-animation').text(t + text.charAt(i++));
            if(i >= text.length)
                typeEarse = false;
        }else{
            $('.type-erase-animation').text(t.slice(0, i--));
            if(i < 0)
                typeEarse = true;
        }
        // alert(i);
    }, 150);
});