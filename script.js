
// dom manipulation
let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let photo = document.querySelector('.image')
// when pick and start draging
boxes.forEach((box)=>{
    box.addEventListener('dragover',(e)=>{
        e.preventDefault();
        box.classList.add('hovered')
});
// when leave the drag
 box.addEventListener('dragleave',()=>{
    box.classList.remove('hovered')
 });
//  after droping the image
box.addEventListener('drop',()=>{
    box.classList.remove('hovered')
    box.appendChild(photo)
});
});