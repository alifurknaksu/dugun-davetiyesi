function openInvitation(){
    const envelope = document.querySelector(".envelope");
    const main = document.querySelector(".main");
    const music = document.getElementById("bgMusic");
    const seal = document.querySelector(".seal");

    // 💥 mühür kırılma
    seal.classList.add("break");

    // 📩 zarf açılma
    envelope.classList.add("open");

    // 🎉 confetti
    createConfetti();

    setTimeout(()=>{
        document.getElementById("envelopeScreen").style.display="none";
        main.classList.add("show");
    },900);

    // 🎵 müzik
    if(music){
        music.volume = 0.6;
        music.play().catch(()=>{});
    }
}

/* ================= CONFETTI ================= */

function createConfetti(){
    const container = document.getElementById("confetti");

    for(let i=0;i<60;i++){
        const piece = document.createElement("div");
        piece.classList.add("piece");

        piece.style.left = Math.random()*100 + "vw";
        piece.style.background = randomColor();
        piece.style.animationDuration = (2 + Math.random()*2) + "s";
        piece.style.transform = `rotate(${Math.random()*360}deg)`;

        container.appendChild(piece);

        setTimeout(()=>piece.remove(),4000);
    }
}

function randomColor(){
    const colors = ["#f5d98b","#ffffff","#b8860b","#ffdf7e","#ffd700"];
    return colors[Math.floor(Math.random()*colors.length)];
}

/* ================= COUNTDOWN ================= */

const weddingDate = new Date("2026-07-03T20:00:00").getTime();

function setVal(id,val){
    const el = document.getElementById(id);
    if(el){
        el.innerText = String(val).padStart(2,"0");
    }
}

function updateCountdown(){
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if(diff <= 0) return;

    const d = Math.floor(diff/(1000*60*60*24));
    const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((diff%(1000*60*60))/(1000*60));
    const s = Math.floor((diff%(1000*60))/1000);

    setVal("days", d);
    setVal("hours", h);
    setVal("minutes", m);
    setVal("seconds", s);
}
function setVal(id,val){
    const el = document.getElementById(id);
    if(el){
        el.innerText = String(val).padStart(2,"0");
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = "flip .6s ease";
    }
}

setInterval(updateCountdown,1000);
updateCountdown();

/* ================= LCV ================= */

document.getElementById("lcvForm").addEventListener("submit",function(e){
    e.preventDefault();

    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const attendance = document.getElementById("attendance").value;
    const note = document.getElementById("note").value;

    const msg =
`💍 DÜĞÜN LCV

👤 ${first} ${last}
📌 ${attendance}
💌 ${note || "-"}`;

    const phone = "905382721327";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
});