var fullBlock=document.getElementsByClassName("blogText")[0];
var blogTitle =document.getElementsByClassName("blogTite")[0];
document.getElementById("editButton").addEventListener("click",function(){
   document.getElementById("editButton").style.display="none";
    document.getElementById("saveButton").style.display="block";
    fullBlock.style.border="2px solid";
    fullBlock.style.input="textarea";
    blogTitle.style.border="2px solid deeppink";
});
 var numberOfClicks=0;
    function postLiked(){
        document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
        numberOfClicks += 1;
        if(numberOfClicks!=0){
            if (numberOfClicks==1){
                document.getElementById('commentCount').innerHTML = numberOfClicks + " person likes this!";
            }
            else {
                document.getElementById('commentCount').innerHTML = numberOfClicks + " people have liked this!";
            }
            }
        }
function addComments(id){
        var addEventName = id.value +'<br>';
        var a = document.getElementById('userComments');
        document.getElementById('commentPost').innerHTML += '<p id="addedPost">'+addEventName+'</p>';          
        a.value=a.defaultValue;
    }
