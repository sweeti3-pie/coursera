/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log("Hover detected!");
    console.log("ALT:", previewPic.alt);
    console.log("SRC:", previewPic.src);
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    */
    document.getElementById("image").style.backgroundImage="url('"+previewPic.src+"')";
    
 /* 2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    document.getElementById("image").innerHTML=previewPic.alt;
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    */
    document.getElementById("image").style.backgroundImage="url('')";
    
 /* 2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    document.getElementById("image").innerHTML="Hover over an image below to display here.";
	}

    function setImage(){
        const options=[
            {
            src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg",
            alt:"Styling with a Bandana"
            }, 
            {
            src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG",
            alt:"With My Boy"
            },
            {
            src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg",
            alt:"Young Puppy"
            },
            {
            src:"https://ih1.redbubble.net/image.556301470.8538/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
            alt:"Nub Cat"
            },
            {
            src:"https://i.pinimg.com/736x/e7/68/6b/e7686bb11e34d06514d88048f70d795b.jpg",
            alt:"Side Eye"
            },
            {
            src:"https://i.pinimg.com/236x/dc/63/b0/dc63b0ccd5bf4cdeecd9e9233d30b111.jpg?nii=t",
            alt:"Cool"
            },
        ]
        currentImages=document.querySelectorAll(".preview")
        for (var i=0; i<currentImages.length; i++){
            console.log("Image "+i);

            const choice=options[Math.floor(Math.random()*options.length)];

            currentImages[i].src=choice.src
            currentImages[i].alt=choice.alt

            currentImages[i].setAttribute("tabindex","0")
        }
    }