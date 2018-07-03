
 $(document).ready(function() {
	changeImage();
});

/*Slide Show*/
const sliderImages = [
  "Pukaki3_Resized.jpg",
  "Bealey_Rezised_1370.jpg",
  "Tekapo_Campsite2_Resized.jpg",
  "Bealey4_Resized.jpg",
  "Canyon_Resized.jpg",
  "Tekapo_Church2_Resized2.jpg",
  "Mount_Cook_Resized.jpg",
  "Bealey_Resized.jpg",
  "Waterfall_Resized.jpg",
  "Wanaka_Resized.jpg",
  "River2_Resized.jpg",
  "Franz_Josef_Glacier2_Resized.jpg"
];
let i = 0;
let time = 20000;

function changeImage(){
  //Get slide image and set source
  const slide = document.getElementById('slide');
  slide.src = 'img/slider/'+ sliderImages[i];

   i < sliderImages.length -1? i++ : i =0; 

   //recursive call (loop)
   setTimeout("changeImage()", time);
}

