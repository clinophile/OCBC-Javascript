import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-shadowdom-encapsulation',
  template: `
    <div class ="shadow-borderred">
    <h2 class="shadow-message"> ShadowDom </h2>
    <div class="shadow-message"> ShadowDom Encapsulation </div>
    <br>
    <app-emulated-encapsulation> </app-emulated-encapsulation> 
    <br>
    <app-none-encapsulation> </app-none-encapsulation>
    </div>`,
  styles :['h2, .shadow-message { color: blue; } .shadow-borderred{border: 1px solid blue;}'],
  encapsulation : ViewEncapsulation.ShadowDom,
})

export class ShadowdomEncapsulationComponent {


}
