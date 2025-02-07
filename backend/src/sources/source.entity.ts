import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { Article } from '../articles/article.entity';
import { Tag } from 'src/tags/tag.entity';

@Entity()
export class Source {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  url: string;

  @Column()
  isRSS: boolean;

  @OneToMany(() => Article, (article) => article.source, { cascade: true })
  articles: Article[];

  @ManyToMany(() => Tag, (tag) => tag.sources, {cascade: false})
  tags: Tag[];
}
