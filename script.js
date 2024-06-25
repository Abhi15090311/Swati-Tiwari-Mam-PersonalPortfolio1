function scroll_left()
{
    var left=document.querySelector(".project");
    left.scrollBy(300,0)
}
function scroll_right()
{
    var right=document.querySelector(".project");
    right.scrollBy(-300,0)
}
function scroll_left()
{
    var left=document.querySelector(".certificate");
    left.scrollBy(300,0)
}
function scroll_right()
{
    var right=document.querySelector(".certificate");
    right.scrollBy(-300,0)
}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')
prev.addEventListener{'click',()=> {
    slider.scrollLeft -=300
}}
next.addEventListener{'click',()=> {
    slider.scrollLeft +=300
}}