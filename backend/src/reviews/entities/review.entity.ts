import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  website: string;

  @Column()
  review!: string;

  @Column()
  rating: number;

  @CreateDateColumn()
  public createdAt: Date = new Date();
}
