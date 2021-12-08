import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-none-encapsulation',
  template: `
    <div class ="borderred">
    <h2> None </h2>
    <div class="none-message"> No Encapsulation </div> </div>`,
  styles :['h2, .none-message { color: red; } .borderred{border: 1px solid red;}'],
  encapsulation : ViewEncapsulation.None,
})
export class NoneEncapsulationComponent {


}
