
const container = document.getElementById('container');

const addCard = () => {
    let card = document.createElement('div')
    let spacer = document.createElement('br')
    card.className = 'card'
    card.style.width = '18rem'
    card.innerHTML = '<div class="card-body"> \
        <h5 class="card-title">Card title</h5> \
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p> \
        <a href="#" class="btn btn-primary">Go somewhere</a> \
        </div > \
        </div >'
    container.appendChild(card);
    container.appendChild(spacer);
}

for (let i = 0; i < 4; i++) {
    addCard();
}
