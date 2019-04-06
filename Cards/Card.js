function Card(suit, face){
possibleSuits = ["Hearts", "Diamonds", "Clubs", "Spades"];
possibleFaces = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

 if(possibleSuits.indexOf(suit) > -1){

    this.suit = suit;
 }
    
else{
    this.suit = possibleSuits[Math.floor(Math.random()*possibleSuits.length)];
}
if(possibleFaces.indexOf(face) > -1){
    this.face = face;
}
else{
    this.face = possibleFaces[Math.floor(Math.random()*possibleFaces.length)];

}
this.setSuit = function(suit){
    if(possibleSuits.indexOf(suit)>-1){
        this.suit = suit;
    }
    else{
        this.suit = possibleSuits[Math.floor(Math.random()*possibleSuits.length)]; 
    }
}
this.setFace = function(face){
    if(possibleFaces.indexOf(face)>-1){
        this.suit = suit;
    }
    else{
        this.face = possibleFaces[Math.floor(Math.random()*possibleFaces.length)]; 
    }
}
}

card1 = new Card("Hearts", "10");
document.write("<p>The card is a " + card1.face + " of " + card1.suit);
card2 = new Card("Frenches", "Beliebers");
document.write("<p>The card is a " + card2.face + " of " + card2.suit);
