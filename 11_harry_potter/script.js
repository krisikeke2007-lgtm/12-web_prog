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
    if (!chars) {
        return alert('A tömböt elfelejtetted elküldeni')
    }
    chars.forEach(char => {
        const card = document.createElement('div')
        card.className = 'card'
        

        const img = document.createElement('img')
        img.src = fixImageUrl(char.image)
        img.alt = char.name

        const name = document.createElement('div')
        name.className = 'name'
        name.textContent = char.name || 'Ismeretlen'

        const house = document.createElement('div')
        house.textContent = `Ház: ${char.house || 'Ismeretlen'}`

        const year = document.createElement('div')
        year.textContent = `Születési év: ${char.yearOfBirth || 'Ismeretlen'}`

        const actor = document.createElement('div')
        actor.textContent = `Szinész: ${char.actor || 'Ismeretlen'}`

        card.append(img, name, house, year, actor)

        card.append(img)


        characters.append(card)
    })
}

function fixImageUrl(url) {
    if (!url) {
        return ''
    }

    return url
        .replace('http://hp-api.herokuapp.com', 'https://hp-api.onrender.com')
        
}

