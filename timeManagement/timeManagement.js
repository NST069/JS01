const timeNodes = [...document.querySelectorAll('[data-time]')];

const seconds = timeNodes.map(node=>node.dataset.time)
    .map(timeCode=>{
        const [mm, ss] = timeCode.split(':').map(parseFloat);
        return (mm*60)+ss;
    }).reduce((total,secs)=>total+secs);

let secondsLeft=seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`Total: ${hours}:${minutes}:${secondsLeft}`);