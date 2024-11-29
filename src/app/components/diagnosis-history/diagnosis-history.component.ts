import { Component, ElementRef, inject } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { Chart ,registerables,ChartConfiguration} from 'chart.js';
import { DiagnosisHistory, patient } from '../../models/patient';
import { GetPatientsService } from '../../services/get-patients.service';

@Component({
  selector: 'app-diagnosis-history',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './diagnosis-history.component.html',
  styleUrl: './diagnosis-history.component.scss'
})
export class DiagnosisHistoryComponent {

  labels:string[]=['Oct','Nov','Dec','Jan','Feb','March']
  systolic_data:number[]=[]
  diastolic_data:number[]=[110,63,115,90,70,79]
  systolic?:DiagnosisHistory[];

  bpm:number=0;
  resRate:number=0;
  temperature:number=0;

  constructor(){
    Chart.register(...registerables);}

    getDataService = inject(GetPatientsService)

   jessicaData?: patient;

  ngOnInit() {

    this.getDataService.data$.subscribe((response: patient[]) => {
      this.jessicaData = response[3];
      // console.log(this.jessicaData.diagnosis_history);
      this.systolic=this.jessicaData.diagnosis_history;
      // console.log(this.systolic)
      this.setSystolicDiastolicData()
      console.log(this.jessicaData.diagnosis_history)
    })
  }

    ngAfterViewInit(){
      this.drawChart();
      // console.log("View init")
    }

    setSystolicDiastolicData(){
      this.systolic?.forEach(element => {
        // console.log(element.blood_pressure?.systolic?.value) 
        if(element.month=="March"){
          this.resRate=element.respiratory_rate?.value??0;
          this.temperature=element.temperature?.value??0;
          this.bpm=element.heart_rate?.value??0
        }
        this.systolic_data.push(element.blood_pressure?.systolic?.value ?? 0)
        this.diastolic_data.push(element.blood_pressure?.diastolic?.value??0)
      });
      console.log(this.systolic_data.slice(0,6).reverse())
      console.log(this.diastolic_data.slice(0,6))
      this.systolic_data=this.systolic_data.slice(0,6).reverse();
      // this.diastolic_data=this.diastolic_data.slice(0,6).reverse();
      console.log(this.diastolic_data)
    }

  drawChart(){

  
  

  const canvas=document.getElementById('bp-graph') as HTMLCanvasElement;
  // console.log(canvas)

  const data={
    labels:this.labels,
    datasets:[{
      label:'Systolic',
      data:this.systolic_data,
      fill:false,
      borderColor:'#E66FD2',
      tension:0.4 
    },
    {
      label:'Diastolic',
      data:this.diastolic_data,
      fill:false,
      borderColor:'#8C6FE6',
      tension:0.4  
    }
  ]
  }

  const config:ChartConfiguration<'line'>  ={
    type:'line',
    data:data,
    options:{
      plugins:{
        legend:{
          display:false
        }
      }
    }
  }

  const myChart=new Chart(canvas,config)

}
}
