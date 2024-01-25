import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit{
  #url = inject(ActivatedRoute) 


  public getSubject = signal<string | null>(null);
  @Input() set subject(id: string){
    this.getSubject.set(id)
  }

  ngOnInit(): void{
    console.log(this.#url.snapshot.params['subject']);

    this.#url.params.subscribe((res) => console.log(res['subject']))

  }

} 
