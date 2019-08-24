import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { MatTableDataSource } from '@angular/material';
import { Animal } from "../animal.model";
import { AnimalService } from '../animal.service';

@Component({
  selector: 'component-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  animals: Animal[];
  displayedColumns= ['species', 'count'];

  constructor(private animalService: AnimalService) {
    //this.animals.push({species: 'Cat', count: 10});
  }

  ngOnInit() {
    //this.animal.getAnimals().subscribe((animals) => {
     // console.log(animals);
    //} )
    this.fetchAnimals();
    this.animals.push({species: 'Cat', count: 10});
    this.animals.push({species: 'Dog', count: 12});
  }


  fetchAnimals() {
    this.animalService
      .getAnimals()
      .subscribe((data: Animal[]) => {
        this.animals = data;
        console.log('Data requested');
        console.log(this.animals);
      });
  }
}
