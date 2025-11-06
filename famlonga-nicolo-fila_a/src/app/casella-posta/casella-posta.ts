import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casella-posta',
  imports: [],
  templateUrl: './casella-posta.html',
  styleUrl: './casella-posta.css',
})
export class CasellaPosta {
  lettere = ["lettere1","lettere2","lettere3","lettere4","lettere5","lettere6","lettere8"]

   @Input() name!: string;
   ngOnInit() {}
}
