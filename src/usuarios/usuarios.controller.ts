import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosS: UsuariosService) {}

    @Get()
    getUsuarios(): any {
      return this.usuariosS.fetchUsuarios();
    }

    @Get('/:id')
    getUsuario(@Param() params): any {
      return this.usuariosS.fetchUsuario(params.id);
    }

    @Post()
    createUsuario(@Body()body): any {
        const id = this.usuariosS.insertUsuario({ ... body });
        return id
    }

    @Delete('/:id')
    removeUsuario(@Param() params): any {
        return this.usuariosS.removeUsuario(params.id)
    }

}
