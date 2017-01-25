import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {setTimeout} from "timers";

@Component({
  selector: 'guessingGame',
  templateUrl: './guessing-game.component.html',
  styleUrls: ['./guessing-game.component.css']
})
export class GuessingGameComponent implements OnInit {

  private theNumber = 0;
  private userGuess = "";
  private imgSrc = "";
  private highLow = "";
  private guessCounter = 0;
  private cheat: boolean = false;

  constructor(private route: Router) { }

  ngOnInit() {
    this.generateNumber();
    this.imgSrc = '../../../assets/img/guessing-game/Smile.jpg';
    console.log(this.theNumber);
  }

  checkGuess(){
    if(this.theNumber > parseInt(this.userGuess)){
      this.highLow = "Too Low"
      this.imgSrc = '../../../assets/img/guessing-game/SmileLow.jpg';
      this.guessCounter++;
      console.log("Your guess is too low");
    }

    else if (this.theNumber < parseInt(this.userGuess)) {
      this.highLow = "Too High"
      this.imgSrc = '../../../assets/img/guessing-game/SmileHigh.jpg';
      this.guessCounter++;
      console.log("your guess is too high");
    }

    else if(this.theNumber == parseInt(this.userGuess)){
      this.guessCounter++;
      this.highLow = "You Win! It took you " + this.guessCounter + " guesses.";
      this.imgSrc = '../../../assets/img/guessing-game/Smile2.jpg';
      console.log("You guessed the number!");
    }
  }

  resetGame(){
    this.generateNumber();
    this.userGuess = "";
    this.highLow = "";
    this.imgSrc = '../../../assets/img/guessing-game/Smile.jpg';
    this.guessCounter = 0;
    console.log(this.theNumber);
  }

  exit(){
    this.route.navigate(['html']);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateNumber(){
    this.theNumber = this.getRandomInt(1, 100);
  }

  showCheat(){
    this.cheat = !this.cheat;
  }
}
