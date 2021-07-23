interface DoctorCardInterface {
  specialization: string;
  img_src: string;
  img_alt: string;
}

interface TopNavInterface {
  doctor?: string;
}

export type { DoctorCardInterface, TopNavInterface };
