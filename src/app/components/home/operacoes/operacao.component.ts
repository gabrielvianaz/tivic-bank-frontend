import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css'],
})
export class OperacaoComponent {
  @Input() nome?: string;
  @Input() icone?: string;
}
