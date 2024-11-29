import { Component } from '@angular/core';
import { PatientTemplateComponent } from "../patient-template/patient-template.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PatientTemplateComponent, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


  searching: boolean = false;

 

  onSearchClick(){
    this.searching=true
  }

  searchClose(data:boolean){
    this.searching=data;
  }
 
}
