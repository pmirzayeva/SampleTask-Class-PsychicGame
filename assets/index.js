

class LetterGuessGame {
    constructor(){
        this.winElement=document.querySelector("#winElement")
        this.loseElement=document.querySelector("#loseElement")
        this.optionsLeftElement=document.querySelector("#optionsLeftElement")
        this.yourOptionsElement=document.querySelector("#yourOptionsElement")
        

        this.wins=0;
        this.loses=0;
        this.guessesLeft=9;
        this.guessesLetters=[]
        this.randomLetter=this.getRandomElement()

        document.addEventListener("keypress",(e)=>this.handleKeyPress(e))
        this.updateDisplay()
    }


    getRandomElement(){
        let letters="abcdefghijklmnopqrstuvwxyz";
        let randomLetter=letters[Math.floor(Math.random()*letters.length)]
        return randomLetter
    }

    resetGame(){
        this.guessesLeft=9
        this.guessesLetters=[]
        this.randomLetter=this.getRandomElement()
        this.updateDisplay()
    }

    handleKeyPress(e){
        const userGuess = e.key.toLowerCase()
        this.guessesLetters.push(userGuess)

        if(this.randomLetter === userGuess){
            this.wins ++
            this.resetGame()
        }else{
            this.guessesLeft --
            if(this.guessesLeft === 0 ){
                this.loses ++
                this.resetGame()
            }
        }
        this.updateDisplay()
    }

    updateDisplay(){
        this.winElement.innerHTML=`Wins:  ${this.wins}`
        this.loseElement.innerHTML=`Loses: ${this.loses}`
        this.optionsLeftElement.innerHTML = `Guesses Left:   ${this.guessesLeft}`
        this.yourOptionsElement.innerHTML = `Your Guesses so far: ${this.guessesLetters.join(" ")}`
    }
}

const game = new LetterGuessGame();
