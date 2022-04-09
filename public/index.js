const quote = document.querySelector('#quoteP');
const author = document.querySelector('#authorV');

fetch('/quote', {
    method: 'GET'
}).then(result => result.json()).then(data => {
    console.log(data[0])
        quote.innerHTML = `${data[0].quote}`
        author.innerHTML  = `Author - ${data[0].author}`
    }
)

generate.addEventListener('click', leaveFunction)

function leaveFunction (){
    fetch('/quote', {
        method: 'GET'
    }).then(result => result.json()).then(data => {
        quote.innerHTML = `${data[0].quote}`
        author.innerHTML  = `Author - ${data[0].author}`
        }
    )
    }