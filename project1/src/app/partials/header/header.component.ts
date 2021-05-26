import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isopen : boolean = false

  toggleNavBar(){
    this.isopen = !this.isopen
  }

  constructor() { }

  ngOnInit(): void {
  }

}
