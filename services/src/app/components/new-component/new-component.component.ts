import { Component, OnInit, inject } from '@angular/core';


import { ApiService } from '@services/api.service';
// import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponentComponent implements OnInit{

  #apiService = inject(ApiService) // new way to work with injection into class

  ngOnInit(){

  //   console.log(this.#apiService.name());

  //   this.#apiService.name$.subscribe({
  //     next: (next)=> console.log(next),
  //     error: (error)=> console.log(error),
  //     complete: ()=> console.log('Complente'),
  //   });
  
  //   this.#apiService.name$.next("João Victor $$");
  //   this.#apiService.name.set("João Victor 2")
  }
}
