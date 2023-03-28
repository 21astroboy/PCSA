import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Block } from 'src/Blocks/blocks.entity';

@Injectable()
export class BlocksService{
    constructor(private readonly DatasourceService:DatasourceService){};
    create(block: Block){
        this.DatasourceService.getBlocks().push(block);
        return block;
    }
    findOne(id:number){
        return this.DatasourceService.getBlocks()
        .find((Block)=>Block.id===id);
    }
    findAll():Block[]{
        return this.DatasourceService.getBlocks();
    }
    update(id:number,updatedBlock:Block){
        const index = this.DatasourceService.getBlocks()
        .findIndex((Doctor)=>Doctor.id===id);
        this.DatasourceService.getBlocks()[index] = updatedBlock;
        return this.DatasourceService.getBlocks()[index];

    }
    remove(id:number){
        const index = this.DatasourceService
        .getBlocks().findIndex((Block)=>Block.id===id);
        this.DatasourceService.getBlocks().splice(index,1);
    
        return HttpStatus.OK;
        
    }
}
