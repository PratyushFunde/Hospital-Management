import { Component, inject } from '@angular/core';
import { GetPatientsService } from '../../services/get-patients.service';
import { patient } from '../../models/patient';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-patient-template',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './patient-template.component.html',
  styleUrl: './patient-template.component.scss'
})
export class PatientTemplateComponent {
  getDataService = inject(GetPatientsService)
  data: patient[] = []
  ngOnInit() {
   this.getDataService.data$.subscribe((response:patient[])=>{
    this.data=response;
    // console.log('Data updated')
   })
  }

}
