const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".main-nav");
if(toggle&&nav){
  toggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded",String(open));
  });
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}
document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit",function(e){
  e.preventDefault();
  const data=new FormData(this);
  const text=`Guten Tag KNM Bau,%0A%0Amein Name ist ${encodeURIComponent(data.get("name"))}.%0AKontakt: ${encodeURIComponent(data.get("contact"))}%0AThema: ${encodeURIComponent(data.get("topic"))}%0A%0A${encodeURIComponent(data.get("message"))}`;
  window.open(`https://wa.me/436769111635?text=${text}`,"_blank");
});
