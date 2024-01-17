import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { ITask } from 'app/interfaces/task';
import { environment } from 'environments/environment'; // não colocar environment.alguma coisa
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // forma nova
  public name = signal<string>("Joao Victor");

  #http = inject(HttpClient)
  #url = signal(environment.API);


  #setListTask = signal<ITask[] | null>(null); // só criamos um SIGNAL

  public getListTask = this.#setListTask.asReadonly(); // só posso usar getListTask apenas para leitura


  public httpListTask$(): Observable <ITask[]>{  
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTask.set(res)) // toda vez que um valor for retornado o getListTask é atualizado
    );
  }

  // https://us-central1-curso-de-angular-api.cloudfunctions.net/app/tasks
}
