import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Patient } from "./patient.entity";

@Injectable()
export class PatientService{
    constructor(private readonly DatasourceService:DatasourceService){};
    create(patient: Patient){
        this.DatasourceService.getpatients().push(patient);
        return patient;
    }
    findOne(id:number){
        return this.DatasourceService.getpatients()
        .find((Patient)=>Patient.id===id);
    }
    findAll():Patient[]{
        return this.DatasourceService.getpatients();
    }
    update(id:number,updatedPatient:Patient){
        const index = this.DatasourceService.getpatients()
        .findIndex((Patient)=>Patient.id===id);
        this.DatasourceService.getpatients()[index] = updatedPatient;
        return this.DatasourceService.getpatients()[index];

    }
    remove(id:number){
        const index = this.DatasourceService
        .getpatients().findIndex((Patient)=>Patient.id===id);
        this.DatasourceService.getpatients().splice(index,1);
    
        return HttpStatus.OK;
        
    }
}
