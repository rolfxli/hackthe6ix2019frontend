import { Component, OnInit } from '@angular/core';
import { AnimalService } from "../animal.service";

@Component({
  selector: 'component-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private animal: AnimalService) { }

  ngOnInit() {
    this.animal.getAnimals().subscribe((animals) => {
      console.log(animals);
    } )
  }

}
