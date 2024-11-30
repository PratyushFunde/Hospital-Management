import { Component, inject } from '@angular/core';
import { patient } from '../../models/patient';
import { GetPatientsService } from '../../services/get-patients.service';
import { NgFor } from '@angular/common';
import { SelectedPatientService } from '../../services/selected-patient.service';

@Component({
  selector: 'app-lab-results',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lab-results.component.html',
  styleUrl: './lab-results.component.scss'
})
export class LabResultsComponent {
  getDataService = inject(GetPatientsService)
  updateService=inject(SelectedPatientService)

  selectedPatient?: patient;

  ngOnInit() {
    this.getDataService.data$.subscribe((response: patient[]) => {
      this.selectedPatient = response[3];
      // console.log(this.selectedPatient.diagnostic_list);
      
    })

    this.updateService.selectedPatient.subscribe((data)=>{
      this.selectedPatient=data;
    })
  }
}
