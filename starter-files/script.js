// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

function fetchAnswer(){
    fetch(API_ENDPOINT)
    .then(api_answer => api_answer.json())
    .then((dato) =>
        recibir(dato)
    )
}
const input = document.getElementById('answer');
const button = document.getElementById('button');
function recibir(dato){
    input.textContent = dato.answer;
}

button.addEventListener('click',()=>{
    fetchAnswer();
})

