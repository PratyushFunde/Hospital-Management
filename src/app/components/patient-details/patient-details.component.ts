import { Component, inject } from '@angular/core';
import { patient } from '../../models/patient';
import { GetPatientsService } from '../../services/get-patients.service';

@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss'
})
export class PatientDetailsComponent {

  getDataService=inject(GetPatientsService)

  jessicaData!:patient;

  ngOnInit(){
    this.getDataService.data$.subscribe((response:patient[])=>{
      this.jessicaData=response[3];
      console.log(this.jessicaData);
    })
  }

}
