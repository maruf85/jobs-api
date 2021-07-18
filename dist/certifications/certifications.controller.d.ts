import { CertificationsService } from './certifications.service';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
import { Certification } from './interfaces/certification.interface';
export declare class CertificationsController {
    private readonly certificationService;
    constructor(certificationService: CertificationsService);
    findAll(): Promise<Certification[]>;
    findOne(id: string): Promise<Certification>;
    create(createCertificationDto: CreateCertificationDto): Promise<Certification>;
    update(id: string, updateCertificationDto: UpdateCertificationDto): Promise<Certification>;
    remove(id: string): Promise<Certification>;
}
