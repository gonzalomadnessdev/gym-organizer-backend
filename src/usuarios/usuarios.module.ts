import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from 'src/typeorm/usuario.entity';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

@Module({
    imports: [TypeOrmModule.forFeature([Usuarios])],
    providers: [UsuariosService],
    controllers: [UsuariosController],
})
export class UsuariosModule {}
