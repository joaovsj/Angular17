import { Component, OnInit, inject } from '@angular/core';

import { NewComponentComponent } from '../new-component/new-component.component';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-consumer',
  standalone: true,
  imports: [NewComponentComponent],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.scss'
})
export class ConsumerComponent implements OnInit{

  #apiService = inject(ApiService) // new way to work with injection into class

  ngOnInit(){
    
  }
}
