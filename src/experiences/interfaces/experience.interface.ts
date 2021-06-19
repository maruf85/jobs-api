export interface Experience {
  jobTitle?: string;
  employmentType?: string;
  companyName?: string;
  startPeriod?: Period;
  endPeriod?: Period;
  currentEmployer?: boolean;
  description?: string;
  profileId: string;
}

export interface Period {
  month?: string;
  year?: number;
}
