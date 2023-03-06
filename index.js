function submit() {
   let mainrCon = document.querySelector('mainr')
   let mainCon = document.querySelector('main')
   mainrCon.classList.remove('hidden');
   mainCon.style.display='none'

}

function color(button){
let text = button.getAttribute('data');
let con = document.querySelector('span');
con.innerHTML = text
console.log(con);
button.style.backgroung-color
}