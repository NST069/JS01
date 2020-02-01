const HHhand = document.querySelector(".hh");
const MMhand = document.querySelector(".mm");
const SShand = document.querySelector(".ss");
const digitalTime = document.querySelector(".clock-digits");

function setDate() {
    let current = new Date();
    let hrs = current.getHours();
    let mins = current.getMinutes();
    let secs = current.getSeconds();

    digitalTime.textContent = `${((hrs<10)?'0':'')+hrs}:${((mins<10)?'0':'')+mins}:${((secs<10)?'0':'')+secs}`;

    let rotH=((hrs/12)*360)+90;
    let rotM=((mins/60)*360)+90;
    let rotS=((secs/60)*360)+90;

    HHhand.style.transform = `rotate(${rotH}deg)`;
    MMhand.style.transform = `rotate(${rotM}deg)`;
    SShand.style.transform = `rotate(${rotS}deg)`;

    console.log(rotS);
}

setInterval(setDate, 1000);

setDate();