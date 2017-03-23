import { Component, OnInit } from '@angular/core';
import {PapaService} from "./papa-b-form.service";

@Component({
  selector: 'papa-b-form',
  templateUrl: './papa-b-form.component.html',
  styleUrls: ['./papa-b-form.component.css']
})
export class PapaBFormComponent implements OnInit {

  private size: string[];
  private crust: string[];
  private toppings: string[];
  private progress: number = 80;

  constructor(private papaService: PapaService) { }

  ngOnInit() {
    this.size = this.papaService.loadSize();
    this.crust = this.papaService.loadCrust();
    this.toppings = this.papaService.loadToppings();
  }



}
