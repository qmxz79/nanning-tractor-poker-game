// scripts.js

// 定义扑克牌的花色和点数
const suits = [
    { name: '♠', image: 'images/spade.png' },
    { name: '♥', image: 'images/heart.png' },
    { name: '♣', image: 'images/club.png' },
    { name: '♦', image: 'images/diamond.png' }
];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// 创建扑克牌组
const createDeck = () => {
    const deck = [];
    for (let i = 0; i < 4; i++) {
        suits.forEach(suit => {
            ranks.forEach(rank => {
                deck.push({ suit: suit.name, rank, suitImage: suit.image });
            });
        });
    }
    deck.push({ suit: '', rank: '大王', suitImage: 'images/joker-color.png' });
    deck.push({ suit: '', rank: '小王', suitImage: 'images/joker-blackwhite.png' });
    return deck;
};

// 洗牌函数
const shuffle = deck => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
};

// 显示玩家手牌
const displayPlayerHand = (hand, elementId) => {
    const handElement = document.getElementById(elementId);
    handElement.innerHTML = '';
    hand.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <span class="rank">${card.rank}</span>
            <img class="suit" src="${card.suitImage}" alt="${card.suit}">
        `;
        handElement.appendChild(cardElement);
    });
};

// 初始化游戏
const startGame = () => {
    // 创建并洗牌
    let deck = createDeck();
    deck = shuffle(deck);

    // 分牌给玩家
    const playerHand = deck.slice(0, 27); // 假设一个玩家有27张牌
    const gameTable = deck.slice(27, 54); // 剩下的牌在桌面上

    // 显示玩家手牌和游戏桌面
    displayPlayerHand(playerHand, 'player-hand');
    displayPlayerHand(gameTable, 'game-table');
};

// 监听开始游戏按钮
document.getElementById('start-game').addEventListener('click', startGame);
