import { Component } from '@angular/core';
import { CasellaPosta } from '../casella-posta/casella-posta';

@Component({
  selector: 'app-cassettiera',
  imports: [CasellaPosta],
  templateUrl: './cassettiera.html',
  styleUrl: './cassettiera.css',
})
export class Cassettiera {
  lista = ["marco","lucia","elisa","beatrice","chiara","luca","nunzio"]
}
