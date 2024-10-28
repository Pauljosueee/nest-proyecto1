import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListaexcusasService } from './listaexcusas.service';
import { CreateListaexcusaDto } from './dto/create-listaexcusa.dto';
import { UpdateListaexcusaDto } from './dto/update-listaexcusa.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('listaexcusas')
@ApiTags('listaexcusas')
export class ListaexcusasController {
  constructor(private readonly listaexcusasService: ListaexcusasService) {}

  @Post()
  create(@Body() createListaexcusaDto: CreateListaexcusaDto) {
    return this.listaexcusasService.create(createListaexcusaDto);
  }

  @Get()
  findAll() {
    return this.listaexcusasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaexcusasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListaexcusaDto: UpdateListaexcusaDto) {
    return this.listaexcusasService.update(+id, updateListaexcusaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaexcusasService.remove(+id);
  }
}
