import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 200 })
  name: string;

  @Column({ unique: true, type: "varchar", length: 200 })
  email: string;

  @Column({ type: "date", default: new Date() })
  birthdate: Date;

  @Column({ unique: true, type: "int" })
  nDni: number;

  @OneToOne(() => Credential)
  @JoinColumn({ name: "credentialsId" })
  credentials: Credential;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];
}

//un usuario puede generar muchas reservas/turnos
//muchos turnos puden pertencer a un unico usuario
