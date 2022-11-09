document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: "gaara",
            img: "assets/gaara.png"
        },
        {
            name: "gaara",
            img: "assets/gaara.png"
        },
        {
            name: "hinata",
            img: "assets/hinata.png"
        },
        {
            name: "hinata",
            img: "assets/hinata.png"
        },
        {
            name: "itachi",
            img: "assets/itachi.png"
        },
        {
            name: "itachi",
            img: "assets/itachi.png"
        },
        {
            name: "jiraiya",
            img: "assets/jiraiya.png"
        },
        {
            name: "jiraiya",
            img: "assets/jiraiya.png"
        },
        {
            name: "lee",
            img: "assets/lee.png"
        },
        {
            name: "lee",
            img: "assets/lee.png"
        },
        {
            name: "naruto",
            img: "assets/naruto.png"
        },
        {
            name: "naruto",
            img: "assets/naruto.png"
        },
        {
            name: "sasuke",
            img: "assets/sasuke.png"
        },
        {
            name: "sasuke",
            img: "assets/sasuke.png"
        },
        {
            name: "kakashi",
            img: "assets/kakashi.png"
        },
        {
            name: "kakashi",
            img: "assets/kakashi.png"
        }      
    ];

    cardArray.sort(() => 0.5 - Math.random()); //random array

    const board = document.querySelector('.board');
    const moves = document.querySelector('#moves')
    let count = 8;
    let countCardMatch = 0;
    let chosenCards = [];
    let chosenCardsId = [];
    let restart = document.querySelector('.restart');
    restart.addEventListener('click', restartGame);

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'assets/backCard.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);
        }
    }

    function restartGame() {
        let cards = document.querySelectorAll('img');
        for (let i = 0; i < cards.length; i++) {
            cards[i].setAttribute('src', 'assets/backCard.png');
        }
        cardArray.sort(() => 0.5 - Math.random());
        moves.innerHTML = 0;
        countCardMatch = 0;
        chosenCards = [];
        chosenCardsId = [];
    }

    function flipCard() {
        if (this.getAttribute('src') != 'assets/backCard.png') return;
        let cardId = this.getAttribute('data-id');
        this.setAttribute('src', cardArray[cardId].img);
        chosenCards.push(cardArray[cardId].name);
        chosenCardsId.push(cardId);

        if (chosenCards.length === 2) {
            //check if the two cards match   
            checkForMatch();
        }
    }

    function checkForMatch() {
        let firstCardId = chosenCardsId[0];
        let secondCardId = chosenCardsId[1];
        let image = document.querySelectorAll('img');
        if (chosenCards[0] == chosenCards[1]) {
            countCardMatch++;
            console.log(countCardMatch)
            moves.innerHTML = countCardMatch;
            console.log('match');
            image[firstCardId].setAttribute('src', 'assets/' + chosenCards[0] + '.png');
            image[secondCardId].setAttribute('src', 'assets/' + chosenCards[0] + '.png');
        }

        else {
            console.log('not match')
            setTimeout(() => {
                image[firstCardId].setAttribute('src', 'assets/backCard.png');
                image[secondCardId].setAttribute('src', 'assets/backCard.png');
            }, 500)
        }

        if (countCardMatch === count) {
            console.log('game over');
            alert('Congratlations! you win');
            restartGame();
        }

        chosenCards = [];
        chosenCardsId = [];
    };

    createBoard();

});





