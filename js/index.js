/** when click on plus to appear image and aothe images with arrow */
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thum');
    const sliderun = document.getElementById('slider');
    const sliderImg = document.querySelector('.slider-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const uni=document.querySelectorAll('.unique');
    let currentIndex = 0;
    const images = Array.from(thumbnails).map(thum => thum.src);
    function updateslider(){
    sliderImg.src=images[currentIndex];
    prevBtn.classList.toggle("disabled",currentIndex==0);
    nextBtn.classList.toggle("disabled",currentIndex===8);
    }
    uni.forEach((button, index) => {
        button.addEventListener('click', () => {
            sliderun.style.display = 'grid';
            currentIndex = index;
            updateslider();
        });
    });
    closeBtn.addEventListener('click', () => {
        sliderun.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0){
            currentIndex--;
            updateslider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length -1){
            currentIndex++;
            updateslider();
        }
    });
});
