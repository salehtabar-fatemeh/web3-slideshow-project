const slidShowes = document.querySelectorAll(".slide-show");
for(let i=0; i<slidShowes.length; i++){
    const nextSlid = slidShowes[i].querySelector(".next-btn");
    const backSlid = slidShowes[i].querySelector(".back-btn");
    const slides = slidShowes[i].querySelector(".slides");
    const colorfulBtn1 = slidShowes[i].querySelector(".colorful-btn1");
    const colorfulBtn2 = slidShowes[i].querySelector(".colorful-btn2");
    const colorfulBtn3 = slidShowes[i].querySelector(".colorful-btn3");

    function updateColorfulBtns() {
        const activeSlide = slidShowes[i].querySelector(".active");
        colorfulBtn1.style.transform = "scale(1)";
        colorfulBtn2.style.transform = "scale(1)";
        colorfulBtn3.style.transform = "scale(1)";

        if (activeSlide === slides.firstElementChild) {
            colorfulBtn1.style.transform = "scale(1.5)";  
        } else if (activeSlide === slides.children[1]) {
            colorfulBtn2.style.transform = "scale(1.5)";
        } else if (activeSlide === slides.lastElementChild) {
            colorfulBtn3.style.transform = "scale(1.5)"; 
        }
    }

    function nextBtn(){
        const activeSlide = slidShowes[i].querySelector(".active");
        activeSlide.classList.remove("active");
        if(activeSlide.nextElementSibling === null){
            slides.firstElementChild.classList.add("active");
        }else{
            activeSlide.nextElementSibling.classList.add("active");
        }
        updateColorfulBtns();
    } 

    function backBtn(){
        const activeSlide = slidShowes[i].querySelector(".active");
        activeSlide.classList.remove("active");
        if(activeSlide.previousElementSibling === null){
            slides.lastElementChild.classList.add("active");
        }else{
            activeSlide.previousElementSibling.classList.add("active");
        }
        updateColorfulBtns();
    }
    let timeId = setInterval(nextBtn, 5000);

    nextSlid.addEventListener("click", nextBtn);
    backSlid.addEventListener("click", backBtn);

    slidShowes[i].addEventListener("mouseenter",()=>{
        nextSlid.style.visibility = "visible";
        backSlid.style.visibility = "visible";
        clearInterval(timeId)
    })
    slidShowes[i].addEventListener("mouseleave",()=>{
        nextSlid.style.visibility = "hidden";
        backSlid.style.visibility = "hidden";
        timeId = setInterval(nextBtn, 3000);
    })
    updateColorfulBtns();
}

 