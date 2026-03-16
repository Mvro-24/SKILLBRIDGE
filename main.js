let btn = document.getElementById("btn-light-dark")



btn.onclick = function(){

    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")){
        btn.innerHTML=' <i class="fa-regular fa-sun"></i>'}

    else(btn.innerHTML ='<i class="fa-solid fa-moon"></i>')
}

let alertbt =  document.getElementById('alert-btn')
let btn2 = document.getElementById('ok')
let blurs = document.querySelector(".overlay")

alertbt.onclick = () => {
    blurs.classList.remove('hide')
    document.body.classList.add('no-scroll')}

btn2.onclick = ()=> {blurs.classList.add('hide');document.body.classList.remove('no-scroll')}



