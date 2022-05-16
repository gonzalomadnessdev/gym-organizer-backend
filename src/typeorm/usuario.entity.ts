import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuarios{

    @PrimaryGeneratedColumn({
        type: 'int'
    })
    id:number;

    @Column({
        type: 'varchar'
    })
    nombre:string;

    @Column({
        type: 'varchar'
    })
    apellido:string;

    @Column({
        type: 'int'
    })
    membresia_id:number;

    @Column({
        type: 'datetime'
    })
    fecha_alta:string

    @Column({
        type: 'tinyint'
    })
    activo:number

    
}