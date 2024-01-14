import {  AfterContentChecked, AfterContentInit,  AfterViewChecked, AfterViewInit,  ChangeDetectionStrategy,  Component, ContentChild,  DoCheck,  ElementRef,  Input,  OnDestroy,  OnInit,  ViewChild,  signal } from '@angular/core';


// RXJS é uma biblioteca JS usada para controlar os estados e fluxo de dados na nossa aplicação.
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [],
  templateUrl: './other.component.html',
  styleUrl: './other.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherComponent implements 
  DoCheck, 
  OnInit, 
  AfterViewInit, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked,
  OnDestroy
{
  
  public myNumber = signal(0);
  @Input() set inputMyNumber(value: number){
    this.myNumber.set(value);
  }

  @ViewChild('anyElement') public anyElement!: ElementRef
  @ContentChild('text') public text!: ElementRef 



  // private destroy$ = timer(0,1000).pipe(
  //   takeUntilDestroyed()
  // )
  // .subscribe({
  //   next: (next) => console.log('next: ', next),
  //   error: (error)=> console.log('error: ', error),
  //   complete: () => console.log('complete!')
  // });

  public name = signal<string>("Primeiro Texto")

  // Executado quando o componente é inicializado
  ngOnInit(): void{
    // console.log("OnInit", this.anyElement) // no INIT anyElement não existe, porque o TEMPLATE ainda não foi carregado por COMPLETO
  }

  // Executado sempre que o componente é verificado por existir alguma mudança
  ngDoCheck():  void{
    // console.log("ngDoCheck");
  }

  // Executado quando o TEMPLATE HTML é carregado por COMPLETO
  ngAfterViewInit(): void{
    // console.log("AfterViewInit", this.anyElement); // no AFTERVIEWINIT anyElement já existe porque o HTML já foi carregado por COMPLETO
  }

  // Executado quando o conteúdo do NG-CONTENT é carregado
  ngAfterContentInit(): void{
    // console.log('AfterContentInit', this.text);
  }

  // Executado quando todo conteúdo do NG-CONTENT é carregado
  ngAfterContentChecked(): void{
    // console.log('AfterContentChecked');
  }

  // Executado quando toda visualização é vericado por mudanças, praticamente por último
  ngAfterViewChecked(): void{
    // console.log('AfterViewChecked');
  }

  // Executado quando o componente é destruído(um pouco antes) [destruído => para de ser exibido]
  ngOnDestroy(): void {
    console.log('OnDestroy');
    // this.destroy$.unsubscribe();
  }  







}
