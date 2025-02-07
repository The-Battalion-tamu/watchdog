import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Article } from '../articles/article.entity';
import { Tag } from 'src/tag/tag.entity';

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

  @ManyToMany(() => Tag, (tag) => tag.sources, {cascade: true})
  @JoinTable()
  tags: Tag[];
}
