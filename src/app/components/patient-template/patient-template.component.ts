import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { GetPatientsService } from '../../services/get-patients.service';
import { patient } from '../../models/patient';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectedPatientService } from '../../services/selected-patient.service';

@Component({
  selector: 'app-patient-template',
  standalone: true,
  imports: [NgFor, NgClass, NgIf,FormsModule],
  templateUrl: './patient-template.component.html',
  styleUrl: './patient-template.component.scss'
})
export class PatientTemplateComponent {
  getDataService = inject(GetPatientsService)
  data: patient[] = []
  filtered_data:patient[]=[]
  searchString:string=''

  constructor(private updatePatient:SelectedPatientService){}

  @Output() dataEmitter=new EventEmitter<boolean>();

  @Input() searching:boolean=false;

  ngOnInit() {
    this.getDataService.data$.subscribe((response: patient[]) => {
      this.data = response;
      // console.log('Data updated')
      this.setFilteredData()
    })
  }

  setFilteredData(){
    if(this.searchString=='')
    {
      this.filtered_data=this.data
    }
   this.filtered_data=this.data.filter((item)=>item.name.toLowerCase().includes(this.searchString.toLowerCase()))
  }

  onSearchClose()
  {
    this.searching=false;
    this.dataEmitter.emit(this.searching);
  }

  onPatientClick(data:patient){
    console.log(data)
    this.updatePatient.updateSelectedPatient(data)
  }

}
