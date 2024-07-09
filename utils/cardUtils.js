// utils/cardUtils.js

const createDeck = () => {
  const suits = [
    { name: '♠', image: '/images/spade.png' },
    { name: '♥', image: '/images/heart.png' },
    { name: '♣', image: '/images/club.png' },
    { name: '♦', image: '/images/diamond.png' }
  ];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck = [];
  for (let i = 0; i < 4; i++) {
    suits.forEach(suit => {
      ranks.forEach(rank => {
        deck.push({ suit: suit.name, rank, suitImage: suit.image });
      });
    });
  }
  deck.push({ suit: '', rank: '大王', suitImage: '/images/joker-color.png' });
  deck.push({ suit: '', rank: '小王', suitImage: '/images/joker-blackwhite.png' });
  return deck;
};

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

module.exports = {
  createDeck,
  shuffle
};
