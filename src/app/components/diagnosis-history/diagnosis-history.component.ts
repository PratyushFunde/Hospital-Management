import { Component, ElementRef, inject } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { Chart, registerables, ChartConfiguration } from 'chart.js';
import { DiagnosisHistory, initializePatient, patient } from '../../models/patient';
import { GetPatientsService } from '../../services/get-patients.service';
import { SelectedPatientService } from '../../services/selected-patient.service';

@Component({
  selector: 'app-diagnosis-history',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './diagnosis-history.component.html',
  styleUrl: './diagnosis-history.component.scss'
})
export class DiagnosisHistoryComponent {

  labels: string[] = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'March']
  systolic_data: number[] = []
  diastolic_data: number[] = []
  systolic?: DiagnosisHistory[];

  bpm: number = 0;
  resRate: number = 0;
  temperature: number = 0;

  private chart: Chart | null = null; 

  constructor() {
    Chart.register(...registerables);
  }

  getDataService = inject(GetPatientsService)
  getSelectedPatient=inject(SelectedPatientService)

  selectedPatient?: patient;
  


  ngOnInit() {

    this.getDataService.data$.subscribe((response: patient[]) => {
      console.log(response)
      this.selectedPatient = response[3];
      console.log(this.selectedPatient)
      this.systolic = this.selectedPatient?.diagnosis_history?.slice(0,6);
      // console.log(this.selectedPatient.diagnosis_history);
      // console.log(this.systolic)
      this.setSystolicDiastolicData()
      // console.log(this.selectedPatient.diagnosis_history)
    })

    this.getSelectedPatient.selectedPatient.subscribe((data:patient)=>{
      this.selectedPatient=data;
      this.systolic = this.selectedPatient?.diagnosis_history?.slice(0,6);
      this.setSystolicDiastolicData()
      // console.log(this.systolic)
      // console.log(this.selectedPatient?.name)
      // console.log(this.selectedPatient?.diagnosis_history)
    })


  }

  ngAfterViewInit() {
    // this.drawChart();
    // console.log("View init")
  }

  setSystolicDiastolicData() {
    this.systolic_data=[]
    this.diastolic_data=[]
    // console.log(this.systolic)
    this.systolic?.slice(0,6)?.forEach(element => {
      // console.log(element.blood_pressure?.systolic?.value) 
      if (element.month == "March" &&element.year==2024) {
        this.resRate = element.respiratory_rate?.value ?? 0;
        this.temperature = element.temperature?.value ?? 0;
        this.bpm = element.heart_rate?.value ?? 0
        // this.systolic_data.push(element.blood_pressure?.systolic?.value ?? 0)
        // this.diastolic_data.push(element.blood_pressure?.diastolic?.value??0)
      }

      this.systolic_data.push(element.blood_pressure?.systolic?.value ?? 0)
      this.diastolic_data.push(element.blood_pressure?.diastolic?.value ?? 0)
    })
    this.systolic_data = this.systolic_data.slice(0, 6).reverse();
    this.diastolic_data = this.diastolic_data.slice(0, 6).reverse();
    // console.log("Systolic" + this.systolic_data);
    // console.log("Diastolic" + this.diastolic_data);
    this.drawChart()
  }

  drawChart() {
    if (this.chart) {
      this.destroyChart();
    }
    const canvas = document.getElementById('bp-graph') as HTMLCanvasElement;
    // console.log(canvas)

    const data = {
      labels: this.labels,
      datasets: [{
        label: 'Systolic',
        data: this.systolic_data,
        fill: false,
        borderColor: '#E66FD2',
        tension: 0.4
      },
      {
        label: 'Diastolic',
        data: this.diastolic_data,
        fill: false,
        borderColor: '#8C6FE6',
        tension: 0.4
      }
      ]
    }

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }

    this.chart=new Chart(canvas,config)

  }

  destroyChart(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
  
}
