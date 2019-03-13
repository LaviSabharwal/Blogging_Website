 function showDeleteModal(id) {
     //    var modal1 = document.getElementById(id)
     var modal = document.getElementById('deleteModal');

     /*trashicon.onclick = function () {*/
     modal.style.display = "block";

     window.onclick = function (event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }
 }
document.getElementById("nobutton").addEventListener("click",function(){
    var modal = document.getElementById('deleteModal');
    modal.style.display="";
});
