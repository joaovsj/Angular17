import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment'; // não colocar environment.alguma coisa
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // forma nova
  public name = signal<string>("Joao Victor");
  // antigo
  public name$ = new BehaviorSubject("João Victor $");

  #http = inject(HttpClient)
  #url = signal(environment.API);

  // public httpListTask$(): Observable <Array<{id: string, title: string}> >{
  //   return  
  // }

  // https://us-central1-curso-de-angular-api.cloudfunctions.net/app/tasks
}
