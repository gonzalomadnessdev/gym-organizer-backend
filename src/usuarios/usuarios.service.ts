import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from 'src/typeorm/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuarios)
        private usuariosRepository : Repository<Usuarios>
    ){}

    fetchUsuarios(): any {
        return this.usuariosRepository.find();
    }
    fetchUsuario(id:string): any {
        return this.usuariosRepository.findOne(id);
    }

    insertUsuario(body : any): any {
        return this.usuariosRepository.save( { ... body} )
    }

    async removeUsuario(id: string): Promise<any> {
        let res = this.usuariosRepository.findOne(id);
        await this.usuariosRepository.delete(id);
        return res
    }

}


// return this.usuariosRepository.createQueryBuilder().insert().into(Usuarios).values([
//     {...body}
// ])
// .returning("id")
// .execute()