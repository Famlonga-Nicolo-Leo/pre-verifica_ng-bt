import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cassettiera } from './cassettiera/cassettiera';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Cassettiera],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('famlonga-nicolo-fila_a');
}
