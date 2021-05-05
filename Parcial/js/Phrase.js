import createElement from '../utils/createElement.js';

export default function CreatePhrase(phrase){
    const elmnt = createElement('h2', {}, [phrase]);
    return elmnt;
}