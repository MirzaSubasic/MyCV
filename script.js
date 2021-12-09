function changeBackgroundColor(color) {
    switch(color) {
		case "light":
			document.getElementById("BODY").style.backgroundColor = "lightblue";
            document.getElementById("Body").style.backgroundColor = "whitesmoke";
			break;
		case "dark":
			document.getElementById("BODY").style.backgroundColor = "rgb(6, 6, 44)";
            document.getElementById("Body").style.backgroundColor = "rgba(218, 218, 218, 0.950)";
			break;
    }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) 
        slideIndex = 1
    if (n < 1) 
        slideIndex = slides.length
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function addContentTable() {
    var paragraph = "<table><tr><th><b>CONTENT</b></th></tr>";
    paragraph += "<tr><td><a href=#BIO>Bio</a><br><a href=#EDUCATION>Education</a><br>";
    paragraph += "<a href=#SKILS>Skils</a><br><a href=#WORKINGEXPERIENCE>Working experience</a><br><a href=#ADDRESS>Address</a><br>";
    paragraph += "<a href=#CONTACT ME>Contact me</a><br><a href=#JavaScript>JavaScript example</a><br></td></tr></table><br>";
    
    document.getElementById("text").innerHTML = paragraph;
}