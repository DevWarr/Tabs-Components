const carouselBtnL = document.querySelector(".btn-left");
const carouselBtnR = document.querySelector(".btn-right");

const imgArr = document.querySelectorAll(".image");

carouselBtnL.addEventListener("click", event => {

    //Setting some init values
    const currentImg = document.querySelector(".image--show");
    let data = currentImg.dataset.image;
    console.log(data + " before calc");

    // Finding out what our new data number is
    data--;
    if (data == 0) {
        data = imgArr.length;
    }
    console.log(data + " after calc");

    //Grabbing the image of our new data number, and displaying that img only
    const newImg = document.querySelector(`.image[data-image='${data}']`);
    slideLeftOut(currentImg);
    currentImg.classList.remove("image--show");
    newImg.classList.add("image--show");
    slideLeftIn(newImg);
})

carouselBtnR.addEventListener("click", event => {

    //Setting some init values
    const currentImg = document.querySelector(".image--show");
    let data = currentImg.dataset.image;
    console.log(data + " before calc");

    // Finding out what our new data number is
    data++;
    if (data > imgArr.length) {
        data = 1;
    }
    console.log(data + " after calc");

    //Grabbing the image of our new data number, and displaying that img only
    const newImg = document.querySelector(`.image[data-image='${data}']`);
    slideRightOut(currentImg);
    currentImg.classList.remove("image--show");
    newImg.classList.add("image--show");
    slideRightIn(newImg);
})



function slideLeftOut(img) {
    // TweenMax.to(img, 1, {x: -500})
}


function slideLeftIn(img) {
    // TweenMax.from(img, 1, {x: 500})
}


function slideRightIn(img) {
    // TweenMax.from(img, 1, {x: -500})
}


function slideRightOut(img) {
    // TweenMax.to(img, 1, {x: 500})
}