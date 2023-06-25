



function searchName(){
    let myTable = document.getElementById("myTable");
    let filter  = document.getElementById("inputBox").value.toUpperCase();
    let tr = myTable.getElementsByTagName("tr")

    for(let i = 0; i<tr.length; i++){
     
        let td = tr[i].getElementsByTagName("td")[0];

        if(td){
            let textvalue = td.textContent || td.innerHTML;
            
            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none"
            }
        }
    }

}