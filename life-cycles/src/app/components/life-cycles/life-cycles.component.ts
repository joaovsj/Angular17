import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycles',
  standalone: true,
  imports: [],
  templateUrl: './life-cycles.component.html',
  styleUrl: './life-cycles.component.scss'
})
export class LifeCyclesComponent implements OnChanges{

  @Input() public name: string = ""
  @Output() public resetName = new EventEmitter;


  // executado quando as propridades declaradas como INPUT são modificadas
  ngOnChanges(changes: SimpleChanges): void {

    if(changes['name'].currentValue == "João Victor Silva de Jesus"){
      this.resetName.emit(true);
    }

    console.log("OnChanges", changes);

    // throw new Error('Method not implemented.');
  }  

}
