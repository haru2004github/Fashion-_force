let showBtn = document.querySelector('.showBtn')
let aside = document.querySelector('.aside')
let icon = document.querySelector('.showBtn i')
let body = document.querySelector("body")


showBtn.onclick = ()=>{
    aside.classList.toggle('-left-full')
    aside.classList.toggle('left-0')
    showBtn.classList.toggle('bg-red-500/80')
    icon.classList.toggle('fa-xmark')
    body.classList.toggle("h-screen")
    body.classList.toggle("overflow-hidden")


}
