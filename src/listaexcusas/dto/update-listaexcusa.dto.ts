import { PartialType } from '@nestjs/swagger';
import { CreateListaexcusaDto } from './create-listaexcusa.dto';

export class UpdateListaexcusaDto extends PartialType(CreateListaexcusaDto) {}
