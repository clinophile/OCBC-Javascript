import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-komponen1',
  templateUrl: './komponen1.component.html',
  styleUrls: ['./komponen1.component.css']
})
export class Komponen1Component implements OnInit {

  @Input()  komponen1Title: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
