import { IssueDate } from '../interfaces/certification.interface';
export declare class BaseCertificationDto {
    readonly name?: string;
    readonly issuer?: string;
    readonly issueDate?: IssueDate;
    readonly credentialId?: string;
    readonly credentialUrl?: string;
    readonly profileId: string;
}
