import { Component } from '@angular/core';
import { PatientTemplateComponent } from "../patient-template/patient-template.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PatientTemplateComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
