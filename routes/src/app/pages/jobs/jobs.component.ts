import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit{
  
  #router =  inject(Router)
  #url    =  inject(ActivatedRoute) 

  public getSubject = signal<string | null>(null);
  @Input() set subject(id: string){
    this.getSubject.set(id)
  }

  ngOnInit(): void{
    console.log(this.#url.snapshot.params['subject']);

    this.#url.params.subscribe((res) => console.log(res['subject']))


    console.log(this.#url.snapshot.queryParamMap.get('name'))
    console.log(this.#url.snapshot.queryParamMap.get('age'));
    console.log(this.#url.snapshot.queryParams['profession']);

    // // URL é uma instancia da classe ActivatedRoute(Ativade da rota)
    // console.log(this.#url.snapshot.queryParamMap.get('name'))
    // console.log(this.#url.snapshot.queryParamMap.get('age'))
    // console.log(this.#url.snapshot.queryParamMap.get('profession'))


    setTimeout(() => {
      this.#router.navigate(['/curso'])
    }, 3000)
  }

} 
