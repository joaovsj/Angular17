import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss'
})
export class PropertyBindingComponent {


  public isDisabled = false;

  public picture = {
    address: "https://conexaoplaneta.com.br/wp-content/uploads/2022/08/tigres-nepal-conexao-planeta.jpg",
    name: "Tigre Indiano",
    alternative: "Tigre"
  }


}
