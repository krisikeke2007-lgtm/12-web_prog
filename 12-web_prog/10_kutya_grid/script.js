/*<div class="card">
                <img src="./img/dog-1.jpg" alt="dog-1">
                <div class="content">
                    <h3>Kártya #1</h3>
                    <p>dog-1.jpg</p>
                </div>
            </div>*/
const cards = document.querySelector('#cards')
//console.log(cards);

const LIST_URL = 'src/kepek.txt'
const IMG_MAPPA = 'img/'

window.addEventListener('DOMContentLoaded', LoadCards)

async function LoadCards() {
    try {
        const res = await fetch(LIST_URL)
        if (!res.ok) {
            return alert('Nem sikerült betölteni a fáljt!')
        }
        const text = await res.text()

        const files = text.split('\n').map(sor => sor .trim()).filter(sor => sor.length > 0)
        //console.log(files)

        if(files.length ===0) {
            return alert('A lista üres!')
        }

        cards.innerHTML = ''

        files.forEach((fileName, index) => {
            cards.appendChild(createCard(fileName, index))
        })
            


    } catch (error) {
        alert(`Hiba: ${error}`)
    }
}

function createCard(fileName, index){
    const card = document.createElement('div')
    card.className = 'card'

    const img = document.createElement('img')
    img.src= `${IMG_MAPPA}${fileName}`
    img.alt = `Kutya kép ${index+1}`


    const content = document.createElement('div')
    content.className = 'content'

    const title = document.createElement('h3')
    title.textContent = `Kártya #${index+1}`

    const p = document.createElement('p')
    p.textContent = fileName


    content.append(title, p)
    card.append(img, content)

    return card
}


