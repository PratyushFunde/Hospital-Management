import { Component, ElementRef } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { Chart ,registerables,ChartConfiguration} from 'chart.js';

@Component({
  selector: 'app-diagnosis-history',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './diagnosis-history.component.html',
  styleUrl: './diagnosis-history.component.scss'
})
export class DiagnosisHistoryComponent {

  labels:string[]=['Oct','Nov','Dec','Jan','Feb','March']
  data1:number[]=[115,120,140,160,117,110]
  data2:number[]=[110,63,115,90,70,79]


  constructor(){
    Chart.register(...registerables);}

    ngAfterViewInit(){
      this.drawChart()
      console.log("View init")
    }

  drawChart(){

  
  

  const canvas=document.getElementById('bp-graph') as HTMLCanvasElement;
  console.log(canvas)

  const data={
    labels:this.labels,
    datasets:[{
      label:'Dataset',
      data:this.data1,
      fill:false,
      borderColor:'#E66FD2',
      tension:0.4 
    },
    {
      label:'Dataset',
      data:this.data2,
      fill:false,
      borderColor:'#8C6FE6',
      tension:0.4  
    }
  ]
  }

  const config:ChartConfiguration<'line'>  ={
    type:'line',
    data:data
  }

  const myChart=new Chart(canvas,config)

}
}
