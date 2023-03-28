import { Module } from '@nestjs/common';
import { Doctor } from './doctors.entity';
import { DoctorsService } from './doctors.service';
import { DoctorsСontroller } from './doctors.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';


@Module({
    controllers:[DoctorsСontroller],
    providers:[DoctorsService],
    imports:[DatasourceModule],
})
export class DoctorsModule {}