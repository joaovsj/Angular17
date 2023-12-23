import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


// INTERFACE
import { IProjects } from '../../../interface/IProjects.interface';



@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{

  constructor( 
    @Inject(MAT_DIALOG_DATA) private _data: IProjects, 
    private dialogRef: MatDialogRef<DialogProjectsComponent>  
  ){}

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void{
    // When the button on projects it's clicked the dialog value will be set as signal
      this.getData.set(this._data)
  }

  closeModal(){
    return this.dialogRef.close();
  }

}
