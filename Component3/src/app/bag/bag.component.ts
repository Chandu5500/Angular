import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.css'
})
export class BagComponent {
  @Input() bookname!: string;
  @Input() bookurl!: string;
}
