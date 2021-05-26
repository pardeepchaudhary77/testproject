import { Component, OnInit } from '@angular/core';
import { PersonDetailsService } from '../../person-details.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  constructor(private personServices: PersonDetailsService) { }

  ngOnInit(): void {
    this.personServices.getData().subscribe(data => this.products = data)
  }

  products:any;

}
