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

  constructor(private route: Router) { }

  ngOnInit() {
    this.generateNumber();
    this.imgSrc = '../../../assets/img/guessing-game/Smile.jpg';
    console.log(this.theNumber);
  }

  checkGuess(){
    if(this.theNumber > parseInt(this.userGuess)){
      this.imgSrc = '../../../assets/img/guessing-game/SmileLow.jpg';
      console.log("Your guess is too low");
    }

    else if(this.theNumber < parseInt(this.userGuess)){
      this.imgSrc = '../../../assets/img/guessing-game/SmileHigh.jpg';
      console.log("your guess is too high");
    }

    else if(this.theNumber == parseInt(this.userGuess)){
      this.imgSrc = '../../../assets/img/guessing-game/Smile2.jpg';
      console.log("You guessed the number!");
    }
  }

  resetGame(){
    this.generateNumber();
    this.userGuess = "";
    this.imgSrc = "";
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
}
