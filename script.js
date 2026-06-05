function openInvitation(){
  const seal=document.querySelector(".seal");
  const envelope=document.querySelector(".envelope");
  const main=document.querySelector(".main");
  const music=document.getElementById("bgMusic");

  seal.classList.add("break");
  envelope.classList.add("open");

  createConfetti();

  setTimeout(()=>{
    document.getElementById("envelopeScreen").style.display="none";
    main.classList.add("show");
  },900);

  if(music){music.volume=0.6;music.play().catch(()=>{});}
}

/* CONFETTI */
function createConfetti(){
  const container=document.getElementById("confetti");
  for(let i=0;i<60;i++){
    const piece=document.createElement("div");
    piece.className="piece";
    piece.style.left=Math.random()*100+"vw";
    piece.style.background=["#fff","#f5d98b","#ffd700"][Math.floor(Math.random()*3)];
    piece.style.animationDuration=(2+Math.random()*2)+"s";
    container.appendChild(piece);
    setTimeout(()=>piece.remove(),4000);
  }
}

/* COUNTDOWN */
const targetDate=new Date("2026-07-03T20:00:00").getTime();
function updateCountdown(){
  const now=Date.now();
  const diff=targetDate-now;
  if(diff<0)return;
  const d=Math.floor(diff/86400000);
  const h=Math.floor(diff%86400000/3600000);
  const m=Math.floor(diff%3600000/60000);
  const s=Math.floor(diff%60000/1000);
  document.getElementById("days").innerText=d.toString().padStart(2,"0");
  document.getElementById("hours").innerText=h.toString().padStart(2,"0");
  document.getElementById("minutes").innerText=m.toString().padStart(2,"0");
  document.getElementById("seconds").innerText=s.toString().padStart(2,"0");
}
setInterval(updateCountdown,1000);updateCountdown();

/* LCV */
document.getElementById("lcvForm").addEventListener("submit",e=>{
  e.preventDefault();
  const msg=`LCV\n${document.getElementById("firstName").value} ${document.getElementById("lastName").value}\n${document.getElementById("attendance").value}\n${document.getElementById("note").value || "-"}`;
  window.open(`https://wa.me/905382721327?text=${encodeURIComponent(msg)}`);
});