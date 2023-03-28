import { Injectable } from "@nestjs/common/decorators";
import { Doctor } from "src/Doctors/doctors.entity";
import { Patient } from "src/Patients/patient.entity";
import { Block } from '../Blocks/blocks.entity';
@Injectable()
export class DatasourceService{

    private blocks: Block[] = [];
    getBlocks():Block[]{
        return this.blocks;
    }

    private patients: Patient[] = [];
    getpatients():Patient[]{
        return this.patients;
    }
      
    private doctors: Doctor[] = [];
    getDoctors(): Doctor[]{
    return this.doctors;
    }
}