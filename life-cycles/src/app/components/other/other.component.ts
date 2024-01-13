import { AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, OnInit, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [],
  templateUrl: './other.component.html',
  styleUrl: './other.component.scss'
})
export class OtherComponent implements DoCheck, OnInit, AfterViewInit, AfterContentInit{  
  
  @ViewChild('anyElement') public anyElement!: ElementRef
  @ContentChild('text') public text!: ElementRef 

  public name = signal<string>("Primeiro Texto")

  // Executado quando o componente é inicializado
  ngOnInit(): void{
    console.log("OnInit");
    console.log(this.anyElement) // no INIT anyElement não existe, porque o TEMPLATE ainda não foi carregado por COMPLETO
  }

  // Executado sempre que o componente é verificado por existir alguma mudança
  ngDoCheck():  void{
    console.log("ngDoCheck");
  }


  // Executado quando o TEMPLATE HTML é carregado por COMPLETO
  ngAfterViewInit(): void{
    console.log("AfterViewInit");
    console.log(this.anyElement); // no AFTERVIEWINIT anyElement já existe porque o HTML já foi carregado por COMPLETO
  }

  // Executado quando o conteúdo do NG-CONTENT é carregado
  public ngAfterContentInit(){
    console.log('AfterContentInit');
    console.log(this.text);
  }




}
