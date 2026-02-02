const characters = document.querySelector('#characters')

const HP_URL = 'https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json'

window.addEventListener('DOMContentLoaded', fetchCharacters)

async function fetchCharacters() {
    try {
        const res = await fetch(HP_URL)
        console.log(res);

        const chars = await res.json()
        console.log(chars);

        displayCharacters(chars)
    } catch (error) {
        alert (error)
    }
}

function displayCharacters(chars) {
    chars.foreach(char => {
        
    })
}

