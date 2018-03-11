function myGallery() {


  document.getElementById("main").innerHTML = `

<style>
.carousel
.carousel-item {
  width: 444px;
}
</style>
<br>

<div class="carousel">
    <a class="carousel-item" href="#one!"><img src="images/falcon29.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="images/falcon30.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="images/falcon31.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="images/falcon32.jpg"></a>
    <a class="carousel-item" href="#five!"><img src="images/falcon33.jpg"></a>
    <a class="carousel-item" href="#six!"><img src="images/falcon34.jpg"></a>
    <a class="carousel-item" href="#seven!"><img src="images/falcon35.jpg"></a>
    <a class="carousel-item" href="#eight!"><img src="images/falcon36.jpg"></a>
    <a class="carousel-item" href="#nine!"><img src="images/falcon37.jpg"></a>
    <a class="carousel-item" href="#ten!"><img src="images/falcon38.jpg"></a>
  </div>
<br>
<br>
<br>
<br>

`
  $('.carousel').carousel();
}
