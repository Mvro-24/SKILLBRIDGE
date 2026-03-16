let btn = document.getElementById("btn-light-dark")
let btn3 = document.getElementById("btn-light-dark2")


btn.onclick = function(){

    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")){
        btn.innerHTML=' <i class="fa-regular fa-sun"></i>'}

    else(btn.innerHTML ='<i class="fa-solid fa-moon"></i>')
}
btn3.onclick = function(){

    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")){
        btn3.innerHTML=' <i class="fa-regular fa-sun"></i>'}

    else(btn3.innerHTML ='<i class="fa-solid fa-moon"></i>')
}


let alertbt =  document.getElementById('alert-btn')
let btn2 = document.getElementById('ok')
let blurs = document.querySelector(".overlay")

alertbt.onclick = () => {
    blurs.classList.remove('hide')
    document.body.classList.add('no-scroll')}

btn2.onclick = ()=> {blurs.classList.add('hide');document.body.classList.remove('no-scroll')}



let bar = document.getElementById("bars")
let ph = document.querySelector('.nav-ph')
let nav_com = document.getElementById('nav-com')
let close = document.getElementById('close')
bar.onclick=function(){
    ph.classList.remove('hide')
    document.body.classList.add('no-scroll')
    nav_com.classList.add('hide')
    btn.classList.remove('hide')
}

close.onclick=function(){
    ph.classList.add('hide')
    document.body.classList.remove('no-scroll')
    nav_com.classList.remove('hide')
    
}