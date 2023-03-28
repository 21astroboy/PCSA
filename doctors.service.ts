import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Doctor } from "./doctors.entity";

@Injectable()
export class DoctorsService{
    constructor(private readonly DatasourceService:DatasourceService){};
    create(doctor: Doctor){
        this.DatasourceService.getDoctors().push(doctor);
        return doctor;
    }
    findOne(id:number){
        return this.DatasourceService.getDoctors()
        .find((Doctor)=>Doctor.id===id);
    }
    findAll():Doctor[]{
        return this.DatasourceService.getDoctors();
    }
    update(id:number,updatedDoctor:Doctor){
        const index = this.DatasourceService.getDoctors()
        .findIndex((Doctor)=>Doctor.id===id);
        this.DatasourceService.getDoctors()[index] = updatedDoctor;
        return this.DatasourceService.getDoctors()[index];

    }
    remove(id:number){
        const index = this.DatasourceService
        .getDoctors().findIndex((Doctor)=>Doctor.id===id);
        this.DatasourceService.getDoctors().splice(index,1);
    
        return HttpStatus.OK;
        
    }
}
