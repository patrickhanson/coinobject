let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)
        
        return this.state;
    },
    toString: function() {
        if(this.state === 0) {
            return this.state = "H"
        } else if(this.state === 1) {
            return this.state = "T"
        }
    },
    toHTML: function() {
        let img = document.createElement("img");
        let imgDestination = document.getElementById("img")
        if(this.state === "H") {
            img.src = "coinheads.jpg"
            imgDestination.appendChild(img)
        } else if(this.state === "T") {
            img.src = "cointails.png"
            imgDestination.appendChild(img)
        }
        return img;
    }
};

for(let y = 0; y < 20; y++) {
    let stringDestination = document.getElementById("string")
    coin.flip()
    stringDestination.textContent += coin.toString() + " "
    
}

for(let i = 0; i < 20; i++){
    coin.flip();
    coin.toString();
    coin.toHTML();
}