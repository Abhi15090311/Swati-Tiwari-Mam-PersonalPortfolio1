function search() {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
   const storeitems = document.getElementById("movie-list")
   const movie= document.querySelectorAll(".movie")
   const mname = storeitems.getElementsByTagName("h1")
//    let arr = [mname]

   for(var i=0; i < mname.length;i++){
       let match = movie[i].getElementsByTagName('h1')[0];

       if(match){
          let textvalue = match.textContent || match.innerHTML

           if (textvalue.toUpperCase().indexOf(searchbox) > -1){
            movie[i].style.display = "";
           } else{
            movie[i].style.display = "none";
           }
        }
    }
}