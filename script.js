let counter = document.getElementById("counter");
document.getElementById("increse").addEventListener("click",()=>{
    counter.textContent=Number(counter.textContent)+1;
})
document.getElementById("decrese").addEventListener("click",()=>{
    counter.textContent=Number(counter.textContent)-1;
})
document.getElementById("reset").addEventListener("click",()=>{
    counter.textContent="0";
})