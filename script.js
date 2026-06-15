
document.getElementById('menu-toggle').onclick=()=>document.getElementById('menu').classList.toggle('open');

document.querySelectorAll('.faq-item button').forEach(b=>{
b.onclick=()=>b.nextElementSibling.classList.toggle('show');
});

const topBtn=document.getElementById('topBtn');
window.onscroll=()=>{
topBtn.style.display=window.scrollY>300?'block':'none';
};
topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.onclick=e=>{
e.preventDefault();
document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
};
});
