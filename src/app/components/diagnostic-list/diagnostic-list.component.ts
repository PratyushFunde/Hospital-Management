import { Component, inject } from '@angular/core';
import { patient } from '../../models/patient';
import { GetPatientsService } from '../../services/get-patients.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-diagnostic-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './diagnostic-list.component.html',
  styleUrl: './diagnostic-list.component.scss'
})
export class DiagnosticListComponent {
  getDataService = inject(GetPatientsService)

  jessicaData?: patient;

  ngOnInit() {
    this.getDataService.data$.subscribe((response: patient[]) => {
      this.jessicaData = response[3];
      // console.log(this.jessicaData.diagnosis_history);
    })
  }
}
