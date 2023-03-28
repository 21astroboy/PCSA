import { DoctorsService } from "./doctors.service";
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Doctor } from "./doctors.entity";
import { createApiPropertyDecorator } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { Delete } from "@nestjs/common/decorators";

@Controller('Doctors')
export class DoctorsСontroller{
    constructor(private readonly doctorsService: DoctorsService){  
    }
    @Get()
            findAll(){
                return this.doctorsService.findAll();
            }

    @Get(':id')
            findOne(@Param('id') id: string){
                return this.doctorsService.findOne(+id);
            }

    @Put(':id')
            update(@Param('id') id: string, @Body() updateDoctor: Doctor){
                return this.doctorsService.update(+id, updateDoctor);
            }
    
    @Post()
            create(@Body() createDoctor: Doctor){
                return this.doctorsService.create(createDoctor);
            }
    

    @Delete(':id')
            remove(@Param('id') id: string){
                return this.doctorsService.remove(+id);
            }
}