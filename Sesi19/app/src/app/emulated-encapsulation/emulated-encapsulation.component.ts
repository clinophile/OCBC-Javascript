import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-emulated-encapsulation',
  template: `
    <div class ="borderred">
    <h2> Emulated </h2>
    <div class="emulated-message"> Emulated Encapsulation </div> 
    <app-none-encapsulation> </app-none-encapsulation> </div>`,
  styles :['h2, .emulated-message { color: green; } .borderred{border: 1px solid green;}'],
  encapsulation : ViewEncapsulation.Emulated,
})

export class EmulatedEncapsulationComponent {


}
