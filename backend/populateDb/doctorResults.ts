export interface DocotorResults {
  data: Data;
  is_success: boolean;
}

export interface Data {
  results: Results;
  meta_data: MetaData;
}

export interface Results {
  index_type: string;
  results: Result[];
}

export interface Result {
  id: string;
  supplier_id: string;
  doctor_id: string;
  name: string;
  name_initials: string;
  url_slug: string;
  photo: string;
  bfhl_logo: boolean;
  specialities: Speciality[];
  payee_id: string;
  fees: string;
  'fee range': string;
  time_of_day: string[];
  searchtags: any[];
  experience: string;
  languages: string[];
  is_opt_for_listing: boolean;
  clinic: Clinic;
  offers: any[];
  ctas: Cta[];
  video_consult: boolean;
  in_clinic: boolean;
  inClinic_distance?: number;
  is_verified: boolean;
  qualifications: Qualification[];
  prime: boolean;
  badges: Badge[];
  teleconsultation_fees: string;
  telemed_fee: any;
  earliest_slot_in_minutes: string;
  next_available_slot: string;
  gender: string;
}

export interface Speciality {
  name: string;
}

export interface Clinic {
  name: string;
  address: Address;
}

export interface Address {
  locality: string;
  location: string;
}

export interface Cta {
  type: string;
  data: Data2;
}

export interface Data2 {
  url: string;
  mode_of_payment: string;
}

export interface Qualification {
  degree_type: number;
  degree: string;
}

export interface Badge {
  type: string;
}

export interface MetaData {
  total_records: number;
  page: number;
  size: number;
}
