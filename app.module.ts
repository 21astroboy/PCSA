import { Module } from '@nestjs/common';
import { DoctorsModule } from './Doctors/doctors.module';
import { DatasourceModule } from './datasource/datasource.module';
import { BlocksModule } from './Blocks/blocks.module';
import { PatientModule } from './Patients/patient.module';
@Module({
  imports: [PatientModule,BlocksModule, DoctorsModule,DatasourceModule],
  controllers: [],
  providers: [],
})
export  class AppModule {}
