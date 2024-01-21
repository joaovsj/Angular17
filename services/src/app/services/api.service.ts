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

  // GET ALL DATA
  #setListTask = signal<ITask[] | null>(null); // só criamos um SIGNAL
  public getListTask = this.#setListTask.asReadonly(); // só posso usar getListTask apenas para leitura

  public httpListTask$(): Observable <ITask[]>{  
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(), // impede que tenhamos problema de mult cache na nossa aplicação
      tap((res) => this.#setListTask.set(res)) // toda vez que um valor for retornado o getListTask é atualizado
    );
  } 

  // GET BY ID
  #setTaskId = signal<ITask | null>(null);
  public get getTaskId(){
    return this.#setTaskId.asReadonly(); // a variavel que recever o valor dessa função vai ser tornar um SIGNAL
  }

  public httpTaskId$(id: string): Observable<ITask>{
    return this.#http.get<ITask>(`${this.#url()}/${id}`)
      .pipe( // permite fazermos algumas configaurações e tratamentos na requisição
        shareReplay(),
        tap((res)=> this.#setTaskId.set(res))
      );
  }


  // CREATE
  #setTaskCreate = signal<ITask | null>(null);
  public get getTaskCreate(){
    return this.#setTaskCreate.asReadonly();
  }

  public httpPostTask$(title: string): Observable<ITask>{
    return this.#http.post<ITask>(this.#url(), { title })
     .pipe(
        shareReplay(),
        tap((res)=> this.#setTaskCreate.set(res))
     );
  }


}
