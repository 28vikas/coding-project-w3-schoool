function searchMenu() {
  output = document.getElementById("find").value.toUpperCase();

  ul = document.getElementById("navbarul");
  li = ul.getElementsByTagName("li");
//   console.log(li);

for(let i = 0; i<li.length; i++){
    a = li[i].getElementsByTagName("a")[0];
    
    textvalue = a.innerText || a.innerHTML;
    
    if(textvalue.toUpperCase().indexOf(output) > -1){
        li[i].style.display = ""

    }else{
        li[i].style.display = "none"
    }
 
}
}


// searchMenu()