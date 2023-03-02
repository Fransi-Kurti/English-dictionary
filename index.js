const inputEl = document.getElementById("input-el");

function apiFetch(word){
    console.log(word);
}

inputEl.addEventListener("keyup", (event)=>{
    if(event.target.value && event.key === "Enter"){
        apiFetch(event.target.value)
    }
})