
const label= document.querySelector('.onoffswitch-label')

label.addEventListener("click",function(){
    document.getElementById('phrase2')
    .classList.toggle('hide')

    document.getElementById('phrase1')
    .classList.toggle('hide1')
})