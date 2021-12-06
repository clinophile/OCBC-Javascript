import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-komponen2',
  templateUrl: './komponen2.component.html',
  styleUrls: ['./komponen2.component.css']
})
export class Komponen2Component implements OnInit {
  @Output() clickHandler: EventEmitter<string> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    console.log("Click berjalan!")
    this.clickHandler.emit("Hai! ini adalah pesan dari anakmu.")
  }
}
