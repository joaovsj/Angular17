import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reference-variables',
  standalone: true,
  imports: [],
  templateUrl: './reference-variables.component.html',
  styleUrl: './reference-variables.component.scss'
})
export class ReferenceVariablesComponent implements AfterViewInit{

  // Decorator('nome da referencia HTML') variavel !(significa que não tem valor inicial)
  @ViewChild('name') public nameInput!: ElementRef 
  @ViewChild('title') public titlePage!: ElementRef

  ngAfterViewInit(){

    console.log(this.nameInput.nativeElement.value);
    console.log(this.titlePage.nativeElement.innerText);
  }




}
