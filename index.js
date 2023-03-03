const inputEl = document.getElementById("input-el");

const infoTxt = document.getElementById("info-txt");

const wordTitle = document.getElementById("word-title");

const wordMeaning = document.getElementById("meaning");

const wordAudio = document.getElementById("word-audio");

const wordDefinitionContainer = document.getElementById("word-definition-container");

async function apiFetch(word){

    try {
        wordDefinitionContainer.style.display = "none";
        infoTxt.style.display = "block";
        infoTxt.innerText = `Searching the meaning of "${word}"`;
        const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(dictionaryUrl).then((res) => res.json());
        infoTxt.style.display = "none";
        wordDefinitionContainer.style.display = "block";
        wordTitle.innerText = result[0].word;
        wordMeaning.innerText = result[0].meanings[0].definitions[0].definition;
        console.log(result);
        wordAudio.src = result[0].phonetics[0].audio;
    } catch (error) {
        
    }

  
    
}

inputEl.addEventListener("keyup", (event)=>{
    if(event.target.value && event.key === "Enter"){
        apiFetch(event.target.value)
    }
})