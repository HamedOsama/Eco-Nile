const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const slider = document.getElementById("slider");

let left = 0,inc=0;
if(window.innerWidth <= '678')
inc = '350';
else inc = '600';
leftArrow.style.visibility = "hidden";
// rightArrow.addEventListener("scroll",()=>{
//     console.log(1);
// })
window.addEventListener("resize",()=>{
    left = 0;
    slider.style.left = 0;
    leftArrow.style.visibility = "hidden";
    rightArrow.style.visibility = "visible";
})
rightArrow.addEventListener("click", () => {
    if(window.innerWidth <= '678')
        inc = '350';
    else inc = '600';
    leftArrow.style.visibility = "visible";
    left -= inc;
    slider.style.left = `${left}px`;
    if(left == -inc*4)
        rightArrow.style.visibility = "hidden";
})
leftArrow.addEventListener("click", () => {
    if(window.innerWidth <= '678')
        inc = '350';
    else inc = '600';
    rightArrow.style.visibility = "visible";
    left += +inc;
    slider.style.left = `${left}px`;
    if(left == 0)
        leftArrow.style.visibility = "hidden";
})
// while(!window.closed){
//     console.log(1)
// }