const slidShowes = document.querySelectorAll(".slide-show");
for(let i=0; i<slidShowes.length; i++){
    const nextBtn = slidShowes[i].querySelector(".next-btn");
    const backBtn = slidShowes[i].querySelector(".back-btn");
    const slides = slidShowes[i].querySelector(".slides")

    nextBtn.addEventListener("click", ()=>{
        const activeSlide = slidShowes[i].querySelector(".active");
        activeSlide.classList.remove("active");
        if(activeSlide.nextElementSibling === null){
            slides.firstElementChild.classList.add("active");
        }else{
            activeSlide.nextElementSibling.classList.add("active");
        }
    })
    
    backBtn.addEventListener("click", ()=>{
        const activeSlide = slidShowes[i].querySelector(".active");
        activeSlide.classList.remove("active");
        if(activeSlide.previousElementSibling === null){
            slides.lastElementChild.classList.add("active");
        }else{
            activeSlide.previousElementSibling.classList.add("active");
        }
    })
}