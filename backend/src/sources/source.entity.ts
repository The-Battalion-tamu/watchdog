import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Article } from '../articles/article.entity';

@Entity()
export class Source {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  rssUrl: string;

  @OneToMany(() => Article, (article) => article.source, { cascade: true })
  articles: Article[];
}
