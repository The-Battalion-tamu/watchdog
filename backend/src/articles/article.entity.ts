import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Source } from '../source/source.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  link: string;

  @ManyToOne(() => Source, (source) => source.articles, { onDelete: 'CASCADE' })
  source: Source;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  retrievedAt: Date;
}
