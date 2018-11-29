var myImages =["https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg", "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg?itok=ds7LqH1N&resize=1100x1100","https://r.hswstatic.com/w_907/gif/tesla-cat.jpg","https://www.catster.com/wp-content/uploads/2017/10/A-kitten-meowing-with-his-mouth-open.jpg","https://i1.wp.com/chartcons.com/wp-content/uploads/Funny-Cat-Jokes2.jpg?resize=1021%2C576&ssl=1"];


var captionImages =["Gray Sadness","Happy Cat","Tesla Cat","Meow","Curiosity"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 
function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
