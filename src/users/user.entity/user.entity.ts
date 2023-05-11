/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName:string;

    @Column('date') 
    birthday:Date;

    @Column() 
    isActive:boolean;
}