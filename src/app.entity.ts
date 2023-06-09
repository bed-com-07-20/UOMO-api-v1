import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name:string;

    @Column() 
    status:string;

    @Column() 
    price: number;
}