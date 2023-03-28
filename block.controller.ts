import { BlocksService } from "./blocks.service";
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Block } from "./blocks.entity";
import { createApiPropertyDecorator } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { Delete } from "@nestjs/common/decorators";

@Controller('Blocks')
export class BlockController{
    constructor(private readonly blocksService: BlocksService){  
    }
    @Get()
            findAll(){
                return this.blocksService.findAll();
            }

    @Get(':id')
            findOne(@Param('id') id: string){
                return this.blocksService.findOne(+id);
            }

    @Put(':id')
            update(@Param('id') id: string, @Body() updatedBlock: Block){
                return this.blocksService.update(+id, updatedBlock);
            }
    
    @Post()
            create(@Body() createBlock: Block){
                return this.blocksService.create(createBlock);
            }
    

    @Delete(':id')
            remove(@Param('id') id: string){
                return this.blocksService.remove(+id);
            }
}