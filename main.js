let btn = document.querySelector('button');
let link = document.querySelector('input');
let QR_img = document.querySelector('img');
btn.addEventListener('click', ()=>{
 let url = link.value;
 btn.innerText = "Generating QR"
 QR_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
})