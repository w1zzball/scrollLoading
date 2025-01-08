// Listen for scroll events
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight;
    
    // Calculate scroll percentage
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    
    console.log(`Scrolled: ${Math.round(scrollPosition)}px`);
    // console.log(`Scroll percentage: ${Math.round(scrollPercentage)}%`);
    
});
//class="animX"
function animationParse(){
    //return json object with list of elements and their animation conditions
}

function scrollRender(height){

}