//Identify the Buttons, and the nodeList of images:

const carouselBtnL = document.querySelector(".btn-left");
const carouselBtnR = document.querySelector(".btn-right");
const carouselAll = document.querySelector(".images");
const imgArr = document.querySelectorAll(".image");

/**The pressCheck() function sets buttonPress=false,
 * then sets a timeout for buttonPress=true
 * Inside the event listeners, this is a cushion so the user
 * cannot spam-click the button and create animation glitches.
 */
let buttonPress;
function pressCheck() {
    buttonPress = false;
    setTimeout(() => buttonPress = true, 1200);
    console.log('booye');
}
pressCheck()

carouselBtnL.addEventListener("click", event => {

    //AS LONG AS buttonPress==true
    if(buttonPress) {
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
        slideLeftIn(newImg);

        pressCheck()
    }
})

carouselBtnR.addEventListener("click", event => {

    //AS LONG AS buttonPress==true
    if(buttonPress) {

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
        slideRightIn(newImg);

        pressCheck();
    }
})


//============================ANIMATIONS============================//

/**This distance variable tells each animation how far to move each image.
 * Screens can all have different sizes, right? 
 * When each image slides away on the carousel,
 * we need it to fully move off camera before we make it disappear.
 * by using .offsetWidth, we can find the width of our div at any time.
 * distance is the variable that holds this number for each function.
 * And of course,
 * If we need a negative number, then
 * distance = distance - (distance * 2)
 */
let distance;

/**When each image leaves, it slides away with no easing (Power0.easeNone)
 * We also setTimeout, so after 0.5 seconds, or 500 milliseconds, 
 * The image will disappear.
 */
function slideLeftOut(img) {
    distance = carouselAll.offsetWidth;
    distance = distance - (distance * 2);
    TweenMax.to(img, 0.5, {x: distance, ease: Power0.easeNone})
    setTimeout(() => {
        img.classList.remove("image--show");
        TweenMax.set(img, {x:0});
    }, 500);
}
function slideRightOut(img) {
    distance = carouselAll.offsetWidth;
    TweenMax.to(img, 0.5, {x: distance, ease: Power0.easeNone})
    setTimeout(() => {
        img.classList.remove("image--show");
        TweenMax.set(img, {x:0});
    }, 500);
}


/**Here, there's a delay on both the animation and the image appearance.
 * This gives the leaving image enough time to fully disappear so that 
 * our new image doesn't glitch as it slides in.
 */
function slideLeftIn(img) {
    distance = carouselAll.offsetWidth;
    TweenMax.from(img, 1, {x: distance, delay: 0.5})
    setTimeout(() => img.classList.add("image--show"), 500);
}
function slideRightIn(img) {
    distance = carouselAll.offsetWidth;
    distance = distance - (distance * 2);
    TweenMax.from(img, 1, {x: distance, delay: 0.5})
    setTimeout(() => img.classList.add("image--show"), 500);
}