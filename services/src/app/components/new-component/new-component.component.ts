import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ApiService } from '@services/api.service';
import { concatMap } from 'rxjs';


@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponentComponent implements OnInit{

  #apiService = inject(ApiService)

  public getListTask = this.#apiService.getListTask; // getListTask é uma propriedade apenas de leitura
  public getTaskId = this.#apiService.getTaskId;

  ngOnInit(): void{
    this.#apiService.httpListTask$().subscribe();
    this.#apiService.httpTaskId$("0").subscribe();
  }

  public httpPostTask(title: string){
    return this.#apiService.httpPostTask$(title)
// vai ser executado quando o sucesso da requisição principal tiver acontecido(ELE É UM OBSERVABLE, não use Subscribe)
      .pipe( concatMap(() => this.#apiService.httpListTask$() )) 
      .subscribe({})
  }

  

}
