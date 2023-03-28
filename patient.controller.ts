
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { createApiPropertyDecorator } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { Delete } from "@nestjs/common/decorators";
import { PatientService } from './patient.service';
import { Patient } from './patient.entity';

@Controller('Patients')
export class PatientСontroller{
    constructor(private readonly patientService: PatientService){  
    }
    @Get()
            findAll(){
                return this.patientService.findAll();
            }

    @Get(':id')
            findOne(@Param('id') id: string){
                return this.patientService.findOne(+id);
            }

    @Put(':id')
            update(@Param('id') id: string, @Body() updatedPatient: Patient){
                return this.patientService.update(+id, updatedPatient);
            }
    
    @Post()
            create(@Body() createPatient: Patient){
                return this.patientService.create(createPatient);
            }
    

    @Delete(':id')
            remove(@Param('id') id: string){
                return this.patientService.remove(+id);
            }
}