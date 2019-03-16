 function showDeleteModal() {
     //    var modal1 = document.getElementById(id)
     var modal2 = document.getElementById('deleteModal');

     /*trashicon.onclick = function () {*/
     modal2.style.display = "block";

     window.onclick = function (event) {
         if (event.target == modal2) {
             modal2.style.display = "none";
         }
     }
 }
document.getElementById("nobutton").addEventListener("click",function(){
    var modal = document.getElementById('deleteModal');
    modal.style.display="";
});
