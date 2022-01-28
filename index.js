var headingColor = prompt( "which color do you want for headings");
var allHeadings = document.querySelectorAll("h1");
var btn = document.querySelector("button");
btn.addEventListener("click", colorFunction);
function colorFunction(){
    console.log("headingColor : ", headingColor);
    for (let index = 0; index < allHeadings.length; index++) {
    allHeadings[index].style.color = headingColor;   
    }

}
console.log(headingColor,allHeadings,btn);