const btn = document.querySelector('button');


function addQuote(e) {
	const box = document.querySelector('.quote_container')
	const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
	e.preventDefault();
	fetch('https://geek-quote-api.herokuapp.com/v1/quote')
    .then(response => response.json())
    .then(data => {
    	console.log(data)
        quote.innerText = `${data.quote}`
        author.innerText = `${data.author}`

  });

}

btn.addEventListener('click', addQuote);