export class patient {
  name: string = '';
  gender: string = '';
  age: number = 0;
  profile_picture: string = '';
  date_of_birth: string = '';
  phone_number: string = '';
  emergency_contact: string = '';
  insurance_type: string = '';
  diagnosis_history?: DiagnosisHistory[];
  diagnostic_list?: Diagnostic[];
  lab_results?: string[];
}

export class DiagnosisHistory {
  month: string = '';
  year: number = 0;
  blood_pressure?: BloodPressure;
  heart_rate?: Vital;
  respiratory_rate?: Vital;
  temperature?: Vital;
}

export class BloodPressure {
  systolic?: Vital;
  diastolic?: Vital;
}

export class Vital {
  value: number = 0;
  levels: string = '';
}

export class Diagnostic {
  name: string = '';
  description: string = '';
  status: string = '';
}

export function initializePatient(): patient {
  return {
    name: '',
    gender: '',
    age: 0,
    profile_picture: '',
    date_of_birth: '',
    phone_number: '',
    emergency_contact: '',
    insurance_type: '',
    diagnosis_history: [
      {
        month: '',
        year: 0,
        blood_pressure: {
          systolic: { value: 0, levels: '' },
          diastolic: { value: 0, levels: '' },
        },
        heart_rate: { value: 0, levels: '' },
        respiratory_rate: { value: 0, levels: '' },
        temperature: { value: 0, levels: '' },
      },
    ],
    diagnostic_list: [
      {
        name: '',
        description: '',
        status: '',
      },
    ],
    lab_results: [],
  };
}