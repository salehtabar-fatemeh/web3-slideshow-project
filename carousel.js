const slidShowes = document.querySelectorAll(".slide-show");
for(let i=0; i<slidShowes.length; i++){
    const nextSlid = slidShowes[i].querySelector(".next-btn");
    const backSlid = slidShowes[i].querySelector(".back-btn");
    const slides = slidShowes[i].querySelector(".slides");
    const colorfulBtn1 = slidShowes[i].querySelector(".colorful-btn1");
    const colorfulBtn2 = slidShowes[i].querySelector(".colorful-btn2");

    function nextBtn(){
        const activeSlide = slidShowes[i].querySelector(".active");
        activeSlide.classList.remove("active");
        if(activeSlide.nextElementSibling === null){
            slides.firstElementChild.classList.add("active");
        }else{
            activeSlide.nextElementSibling.classList.add("active");
        }
    } 

    function backBtn(){
        const activeSlide = slidShowes[i].querySelector(".active");
        activeSlide.classList.remove("active");
        if(activeSlide.previousElementSibling === null){
            slides.lastElementChild.classList.add("active");
        }else{
            activeSlide.previousElementSibling.classList.add("active");
        }
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
        timeId = setInterval(nextBtn, 5000);
    })

    colorfulBtn1.addEventListener("click", backBtn);
    colorfulBtn2.addEventListener("click", nextBtn);
       
}

 