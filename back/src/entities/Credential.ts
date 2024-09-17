import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity({ name: "credentials" })
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: "varchar", length: 50 })
  username: string;

  @Column({ type: "text", select: false })
  password: string;
}
