// Listen for scroll events
const animationList = animationParse();

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight;
    
    // Calculate scroll percentage
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    console.log("scrollPercentage:" + scrollPercentage);
    console.log(`Scrolled: ${Math.round(scrollPosition)}px`);
    document.getElementById('scroll-percent').textContent = `Scroll Percent: ${Math.round(scrollPercentage)}%`;
    // console.log(`Scroll percentage: ${Math.round(scrollPercentage)}%`);
    scrollRender(scrollPercentage,animationList);
});
//class="animX"
function animationParse(){
    var animationList = [];
    //return json object with list of elements and their animation conditions
    var els = document.getElementsByClassName("animX");
    Array.from(els).forEach((el) => {
        animationList.push({
            element: el,
            fadeIn: el.getAttribute("data-fadeIn"),
            fadeOut: el.getAttribute("data-fadeOut")})
    });
    

    console.log(animationList);
    return animationList;
}

function scrollRender(height,animationList){
    animationList.forEach(element => {
        if (element.fadeIn < height && element.fadeOut > height){

            element.element.style.opacity = 1;
        }else{
            element.element.style.opacity = 0;
    }
})}