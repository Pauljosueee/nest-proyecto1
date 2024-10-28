import { Test, TestingModule } from '@nestjs/testing';
import { ListaexcusasController } from './listaexcusas.controller';
import { ListaexcusasService } from './listaexcusas.service';

describe('ListaexcusasController', () => {
  let controller: ListaexcusasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaexcusasController],
      providers: [ListaexcusasService],
    }).compile();

    controller = module.get<ListaexcusasController>(ListaexcusasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
