import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Posts {

    @PrimaryColumn()
    title: string;

    @Column()
    content: string;

}