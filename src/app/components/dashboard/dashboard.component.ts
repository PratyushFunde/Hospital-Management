import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DiagnosisHistoryComponent } from "../diagnosis-history/diagnosis-history.component";
import { PatientDetailsComponent } from "../patient-details/patient-details.component";
import { DiagnosticListComponent } from "../diagnostic-list/diagnostic-list.component";
import { LabResultsComponent } from "../lab-results/lab-results.component";
import { GetPatientsService } from '../../services/get-patients.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, DiagnosisHistoryComponent, PatientDetailsComponent, DiagnosticListComponent, LabResultsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  constructor(private getDataService:GetPatientsService){
    
  }

  getData(){
    this.getDataService.getData()
  }

}
