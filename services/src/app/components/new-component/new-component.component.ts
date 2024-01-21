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

  public getListTask = this.#apiService.getTaskList; // getListTask é uma propriedade apenas de leitura
  public getTaskId = this.#apiService.getTaskId;
  public setTaskListError = this.#apiService.getTaskListError;
  public getTaskIdError = this.#apiService.getTaskIdError;
  public getTaskErrorDelete = this.#apiService.getTaskErrorDelete;
  public getTaskErrorUpdate = this.#apiService.getTaskErrorUpdate;

  ngOnInit(): void{
    this.#apiService.httpTaskList$().subscribe();
  }

  public getById(id: string){
    return this.#apiService.httpTaskId$(id).subscribe()
  }

  public httpPostTask(title: string){
    return this.#apiService.httpPostTask$(title)
// vai ser executado quando o sucesso da requisição principal tiver acontecido(ELE É UM OBSERVABLE, não use Subscribe)
      .pipe( concatMap(() => this.#apiService.httpTaskList$() )) 
      .subscribe({})
  }

  public httpPutTask(id: string, title: string){

    return this.#apiService.httpTaskUpdate$(id, title)
      .pipe(concatMap(()=> this.#apiService.httpTaskList$()))
      .subscribe()
  }

  public httpTaskDelete(id: string){
    return this.#apiService.httpTaskDelete$(id)
      .pipe(concatMap(()=>this.#apiService.httpTaskList$()))
      .subscribe()
  }
  

}
