interface SpecializationCardInterface {
  specialization: string;
  img_src: string;
  img_alt: string;
}

interface TopNavInterface {
  doctor?: string;
}

interface DoctorCardInterface {
  doctor: string;
  specialization: string;
  hospital: string;
  img_src: string;
  patients: string;
  experience: string;
  rating: string;
  status?: string;
}

interface CustomChatInterface {
  name?: string;
  doctor?: string;
  msg?: string;
}

export type {
  SpecializationCardInterface,
  TopNavInterface,
  DoctorCardInterface,
  CustomChatInterface,
};
