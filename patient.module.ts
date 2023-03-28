import { Module } from '@nestjs/common';
import { PatientСontroller } from './patient.controller';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';
import { DatasourceModule } from '../datasource/datasource.module';


@Module({
    controllers:[PatientСontroller],
    providers:[PatientService],
    imports:[DatasourceModule],
})
export class PatientModule {}