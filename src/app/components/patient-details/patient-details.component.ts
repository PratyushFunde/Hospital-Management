import { Component, inject } from '@angular/core';
import { patient } from '../../models/patient';
import { GetPatientsService } from '../../services/get-patients.service';
import { SelectedPatientService } from '../../services/selected-patient.service';

@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss'
})
export class PatientDetailsComponent {

  getDataService=inject(GetPatientsService)
  updateService=inject(SelectedPatientService)
  selectedPatient!:patient;

  ngOnInit(){

    this.getDataService.data$.subscribe((response:patient[])=>{
      this.selectedPatient=response[3];
      // console.log(this.jessicaData);
    })

    this.updateService.selectedPatient.subscribe((data)=>{
      this.selectedPatient=data;
    })
  }





}
