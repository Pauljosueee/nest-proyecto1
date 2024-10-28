import { ApiProperty } from "@nestjs/swagger";
export class CreateListaexcusaDto {
@ApiProperty()
    name:string;

    @ApiProperty()
    description:string;
   
  
}