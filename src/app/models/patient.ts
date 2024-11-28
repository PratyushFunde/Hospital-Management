export class patient{
    name:string='';
    gender:string='';
    age:number=0;
    profile_picture:string='';
    date_of_birth: string='';
    phone_number: string='';
    emergency_contact: string='';
    insurance_type: string='';
    diagnosis_history?: DiagnosisHistory[];
    diagnostic_list?: Diagnostic[];
    lab_results?: string[];
}

class DiagnosisHistory {
    month: string='';
    year: number=0;
    blood_pressure?: BloodPressure;
    heart_rate?: Vital;
    respiratory_rate?: Vital;
    temperature?: Vital;
  }
  
  class BloodPressure {
    systolic?: Vital;
    diastolic?: Vital;
  }
  
  class Vital {
    value: number=0;
    levels: string='';
  }
  
  class Diagnostic {
    name: string='';
    description: string='';
    status: string='';
  }