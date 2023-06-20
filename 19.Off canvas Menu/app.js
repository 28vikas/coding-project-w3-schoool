
let sidenav = document.getElementById("sidenavbar");
let main = document.getElementById("main");



function openNav(){
    sidenav.style.transform = " translateX(0px)"
    main.style.transform = "translateX(200px)"
    
}


function closeNav(){
    sidenav.style.transform = " translateX(-200px)"
    main.style.transform = "translateX(0px)"


}