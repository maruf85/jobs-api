import { IssueDate } from '../interfaces/certification.interface';

export class BaseCertificationDto {
  readonly name?: string;
  readonly issuer?: string;
  readonly issueDate?: IssueDate;
  readonly credentialId?: string;
  readonly credentialUrl?: string;
  readonly profileId: string;
}
