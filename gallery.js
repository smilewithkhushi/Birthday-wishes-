/*Name this external file gallery.js*/

function upDate(previewPic){
    /* 
    In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    */
    var image = document.getElementById("image");
    image.style.background = "url(" + previewPic.src + ") #d9e7ff";
    image.style.backgroundSize = "cover";
    image.style.transitionDuration="2s";

    /*
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    image.innerHTML = previewPic.alt;
}

function unDo(){
    /* 
    In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was 
    */
    var image = document.getElementById("image");
    image.style.background = "rgb(113, 210, 252)";

    /*
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    image.innerHTML = "Hover over these memories";
   
    
}