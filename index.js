const inputEl = document.getElementById("input-el");

async function apiFetch(word){

    try {
        const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(dictionaryUrl).then((res) => res.json());
        console.log(result);
    } catch (error) {
        
    }

  
    
}

inputEl.addEventListener("keyup", (event)=>{
    if(event.target.value && event.key === "Enter"){
        apiFetch(event.target.value)
    }
})