import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input()
  respRate!:number;
  @Input()
  bpm!:number;
  @Input()
  temperature!:number;

}
