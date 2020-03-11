import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, Index } from "typeorm";

@Entity("Post")
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { nullable: true })
    title: string | null;

    @Column()
    text: string;

    @Column("json", { name:"profile", nullable: false, default: () => `'{"excludeNewInvoices":false}'`})
    profile: string;

    @Column("json", { name:"profile2", nullable: false, default: () => {excludeNewInvoices: false}})
    profile2: object;
}
