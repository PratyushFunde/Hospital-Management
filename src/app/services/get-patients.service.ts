import { Injectable } from '@angular/core';
import { patient } from '../models/patient';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPatientsService {

  constructor(private http:HttpClient) { this.getData()}

  private dataSubject = new BehaviorSubject<patient[]>([]);
  public data$ = this.dataSubject.asObservable();
  
  getData(){
    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);

     this.http.get<any[]>('https://fedskillstest.coalitiontechnologies.workers.dev',{headers:{'Authorization':`Basic ${auth}`}})
     .subscribe((response:patient[])=>{
      this.dataSubject.next(response);
     })

  //   fetch('https://fedskillstest.coalitiontechnologies.workers.dev',
  //     {

  //       headers:{
  //           'Authorization':`Basic ${auth}`
  //       }
  //     }
  //   ).then(function(response){
  //     if(response.ok){return response.json()} throw response
  //   }).then( (data) =>{
  //     this.data=data;
  //     console.log(data)
  //   }).catch(function(error){console.log(error)})
  // }
  

    
}
}
