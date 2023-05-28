

var scroll1 = window.pageYOffset;

window.onscroll = function(){
    var scroll2 = window.pageYOffset;
    if(scroll1>scroll2){
        document.querySelector("navbar").style.top = "0";

    }else{
        document.querySelector("navbar").style.top = "-100px";

    }
    scroll1 = scroll2;

}
