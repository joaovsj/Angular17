import { Component, OnInit, inject, signal } from '@angular/core';

import { NewComponentComponent } from '../new-component/new-component.component';
import { ApiService } from '@services/api.service';
import { ITask } from 'app/interfaces/task';
import { CommonModule } from '@angular/common';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-consumer',
  standalone: true,
  imports: [CommonModule, NewComponentComponent],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.scss'
})
export class ConsumerComponent implements OnInit{

  #apiService = inject(ApiService) // new way to work with injection into class
  
  public getTask = signal<null | ITask[]>(null)

  public getTask$ = this.#apiService.httpListTask$().pipe(
    shareReplay()
  )

  ngOnInit(){
    this.getTask$.subscribe({
      next: (next) => {
        this.getTask.set(next)
      },
      error: (error) => console.log(error),
      complete: () => console.log("Completed!"),
    });
  }
}
