'use strict'
import FetchPhrases from './js/fetch_phrases.js';
import CreatePhrase from './js/Phrase.js'
const form = document.getElementById('forms');
const main = document.getElementById('main');
const searchinput = document.getElementById('search_whitebar');
const url = 'https://idwapi-juvasquez88.vercel.app/js';

let datos = {};
datos = await FetchPhrases(url);
console.log(datos);

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    main.innerHTML = ''
    datos.phrases.forEach(element => {
        const lowercasephrase = element.phrase.toLowerCase();
        if(lowercasephrase.includes(searchinput.value.toLowerCase())){
            const frase = CreatePhrase(element.phrase);
            main.appendChild(frase);
        }
    });
});
