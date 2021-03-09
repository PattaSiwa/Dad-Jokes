const joke = document.querySelector('h3');
const button = document.querySelector('button')




const addJoke = async () => {
    const response = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
    const newJoke = response.data.joke

    joke.innerText = newJoke
}

button.addEventListener('click', addJoke)