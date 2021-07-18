import { Model } from 'mongoose';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Certification } from './interfaces/certification.interface';
export declare class CertificationsService {
    private readonly certificationModel;
    private readonly profileModel;
    constructor(certificationModel: Model<Certification>, profileModel: Model<Profile>);
    findAll(): Promise<Certification[]>;
    findOne(id: string): Promise<Certification>;
    create(certification: Certification): Promise<Certification>;
    update(id: string, certification: Certification): Promise<Certification>;
    delete(id: string): Promise<Certification>;
}
