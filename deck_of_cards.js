$(document).ready(function() {
  class Card {
    constructor(suite, value) {
      this.suite = suite;
      this.value = value;
      this.strValue;

      if (value == 1) {
        this.strValue = "Ace";
      } else if (value == 11) {
        this.strValue = "Jack";
      } else if (value == 12) {
        this.strValue = "Queen";
      } else if (value == 13) {
        this.strValue = "King";
      } else {
        this.strValue = value.toString();
      }
    }
    show() {
      console.log(`This card is a ${this.strValue} of ${this.suite}`);
    }
  }
  class Deck {
    constructor() {
      this.resetDeck();
      this.shuffleDeck();
    }
    printDeck() {
      console.log(this.cards);
    }
    resetDeck() {
      this.cards = [];
      const suites = {
        1: "\u2660",
        2: "\u2666",
        3: "\u2665",
        4: "\u2663"
      };
      for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 14; j++) {
          let card = new Card(suites[i], j);
          this.cards.push(card);
        }
      }
      return this;
    }
    shuffleDeck() {
      for (let i = 0; i < this.cards.length; i++) {
        let randCard = Math.floor(Math.random() * this.cards.length);
        [this.cards[i], this.cards[randCard]] = [
          this.cards[randCard],
          this.cards[i]
        ];
      }
      return this;
    }
    dealCard() {
      let randomCard = Math.floor(Math.random() * this.cards.length);
      let cardRemoved = this.cards.splice(randomCard, 1);

      return cardRemoved;
    }
  }
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }
    takeCard(deck) {
      this.hand.push(deck.dealCard());
      console.log(this.hand);
      return this;
    }
    discardCard() {
      let cardRemoved = this.hand.pop();
      console.log(cardRemoved);
      return cardRemoved;
    }
  }
  var newDeck = new Deck();
  var p1 = new Player("Michelle");
  p1.takeCard(newDeck);
  p1.takeCard(newDeck);
  p1.discardCard();
  newDeck.printDeck();
});
