import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { initializePatient, patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class SelectedPatientService {

  constructor() { }

  private dataSource=new BehaviorSubject<patient>(initializePatient())
  selectedPatient=this.dataSource.asObservable();

  updateSelectedPatient(new_patient:patient){
    this.dataSource.next(new_patient);
  }

}
