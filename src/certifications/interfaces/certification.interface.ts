export interface Certification {
  name?: string;
  issuer?: string;
  issueDate?: IssueDate;
  credentialId?: string;
  credentialUrl?: string;
  profileId: string;
}

export class IssueDate {
  day?: number;
  month?: string;
  year: number;
}
