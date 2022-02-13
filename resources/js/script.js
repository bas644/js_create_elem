const container = document.getElementById('container');
const cardData = [
    {
        title: 'Title 1',
        text: 'Some quick example text to build on the card title \
        and make up the bulk of the card\'s content.'
    },
    {
        title: 'Title 2',
        text: 'Some quick example text to build on the card title \
        and make up the bulk of the card\'s content.'
    },
    {
        title: 'Title 3',
        text: 'Some quick example text to build on the card title \
        and make up the bulk of the card\'s content.'
    },
    {
        title: 'Title 4',
        text: 'Some quick example text to build on the card title \
        and make up the bulk of the card\'s content.'
    },
]

const addCard = (txtTitle, txtDescription) => {
    let card = document.createElement('div')
    let spacer = document.createElement('br')
    card.className = 'card'
    card.style.width = '18rem'
    card.innerHTML = '<div class="card-body"> \
        <h5 class="card-title">' + txtTitle + '</h5> \
        <p class="card-text">' + txtDescription + '</p> \
        <a href="#" class="btn btn-primary">Go somewhere</a> \
        </div > \
        </div >'
    container.appendChild(card);
    container.appendChild(spacer);
}

for (const entry of cardData) {
    addCard(entry.title, entry.text)
}
