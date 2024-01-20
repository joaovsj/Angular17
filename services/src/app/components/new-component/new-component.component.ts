import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ApiService } from '@services/api.service';


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
  // public getTask$ = toSignal(this.#apiService.httpListTask$());

  ngOnInit(): void{
    this.#apiService.httpListTask$().subscribe()

    console.log(this.getListTask());
  }

}
