import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { ITask } from 'app/interfaces/task';
import { environment } from 'environments/environment'; // não colocar environment.alguma coisa
import { BehaviorSubject, Observable, catchError, shareReplay, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // forma nova
  public name = signal<string>("Joao Victor");

  #http = inject(HttpClient)
  #url = signal(environment.API);

  // GET ALL DATA
  #setTaskList = signal<ITask[] | null>(null); // só criamos um SIGNAL
  public get getTaskList(){ // só posso usar getListTask ape  nas para leitura
    return this.#setTaskList.asReadonly();
  }

  // Erros
  #setTaskListError = signal<any>(null)
  public get getTaskListError(){
    return this.#setTaskListError.asReadonly();
  }

  public httpTaskList$(): Observable <ITask[]>{  

    // Dessa forma que usamos HEADERS
    const headers = new HttpHeaders()
      .set('firstName', "Joao")
      .set('lastName', "Victor Silva de Jesus");

    // Dessa forma que trabalhamos com Parametros na URL
    const params = new HttpParams()
      .set('page', '1')
      .set('brand', 'Ford')




    this.#setTaskList.set(null) // permite trabalharmos com LOADING...
    this.#setTaskListError.set(null)

    return this.#http.get<ITask[]>(this.#url(), 
      { 
        // headers: headers, params: params 
      }).pipe(

      // shareReplay(), // impede que tenhamos problema de mult cache na nossa aplicação
      tap((res) => this.#setTaskList.set(res)), // toda vez que um valor for retornado o getListTask é atualizado
      catchError((error: HttpErrorResponse)=>{

        this.#setTaskListError.set(error.error.message)
        return throwError(() => error.error)
      })
    );
  } 

  // GET BY ID
  #setTaskId = signal<ITask | null>(null);
  public get getTaskId(){
    return this.#setTaskId.asReadonly(); // a variavel que recever o valor dessa função vai ser tornar um SIGNAL
  }

  #setTaskErrorId = signal<any>(null)
  public get getTaskIdError(){
    return this.#setTaskErrorId.asReadonly()
  }

  public httpTaskId$(id: string): Observable<ITask>{

    this.#setTaskId.set(null) // reseta nossa lista
    this.#setTaskErrorId.set(null) 

    return this.#http.get<ITask>(`${this.#url()}/${id}`)
      .pipe( // permite fazermos algumas configaurações e tratamentos na requisição
        // shareReplay(),
        tap((res)=> this.#setTaskId.set(res)),
        catchError((error: HttpErrorResponse)=>{

          this.#setTaskErrorId.set(error.error)
          return throwError(()=>error.error)
        })
      );
  }

  // CREATE 
  public httpPostTask$(title: string): Observable<ITask>{
    return this.#http.post<ITask>(this.#url(), { title })
     .pipe(
        // shareReplay()
     );
  }


  // UPDATE 
  #setTaskErrorUpdate = signal<any>(null)
  public get getTaskErrorUpdate(){
    return this.#setTaskErrorUpdate.asReadonly()
  }

  public httpTaskUpdate$(id: string, title: string): Observable<ITask>{

    this.#setTaskErrorUpdate.set(null);

    return this.#http.patch<ITask>(`${this.#url()}/${id}`, { title })
      .pipe(
        // shareReplay(),
        catchError((error: HttpErrorResponse)=>{
          this.#setTaskErrorUpdate.set(error.error)
          return throwError(() => error.error)
        })
      );
  }

  #setTaskErrorDelete = signal<any>(null)
  public get getTaskErrorDelete(){
    return this.#setTaskErrorDelete.asReadonly()
  }
  // DELETE
  public httpTaskDelete$(id: string): Observable<void>{

    this.#setTaskErrorDelete.set(null);

    return this.#http.delete<void>(`${this.#url()}/${id}`)
      .pipe( 
        // shareReplay(),
        catchError((error: HttpErrorResponse)=>{

          this.#setTaskErrorDelete.set(error.error)
          return throwError(()=>error.error)
        })
      );
  }
}
