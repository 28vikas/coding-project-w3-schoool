
let dropdown = document.getElementById("myDropdown");


// first method by if and else
function myFunction(){
    if(dropdown.style.display === "none"){
        dropdown.style.display = "block"
    }else {
        dropdown.style.display = "none"
    }
}


// second method by toggle

// function myFunction(){
//     dropdown.classList.toggle("active");
// }