在此处输入文件内容
const cardUtils = require('../../utils/cardUtils.js');

Page({
  data: {
    playerHand: [],
    gameTable: [],
    aiMode: false,
    aiHands: []
  },

  onLoad(options) {
    this.setData({ aiMode: options.aiMode === 'true' });
    this.initializeGame();
  },

  initializeGame() {
    const deck = cardUtils.createDeck();
    cardUtils.shuffle(deck);
    const playerHand = deck.slice(0, 54);
    const aiHands = [
      deck.slice(54, 108),
      deck.slice(108, 162),
      deck.slice(162, 216)
    ];
    this.setData({ playerHand, aiHands, gameTable: [] });
  },

  playCard(playerIndex, cards) {
    if (playerIndex === 0) {
      const playerHand = this.data.playerHand.filter(card => !cards.includes(card));
      this.setData({ playerHand });
    } else {
      const aiHands = this.data.aiHands;
      aiHands[playerIndex - 1] = aiHands[playerIndex - 1].filter(card => !cards.includes(card));
      this.setData({ aiHands });
    }
    const gameTable = this.data.gameTable.concat(cards);
    this.setData({ gameTable });
    this.checkGameState();
  },

  checkGameState() {
    if (this.data.aiMode) {
      this.aiPlay();
    }
  },

  aiPlay() {
    const aiHands = this.data.aiHands;
    const aiCards = aiHands[0].slice(0, 2);
    this.playCard(1, aiCards);
  }
});
