import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from "@augejs/typeorm";
import { TaskStatus } from '../enums';
import { TaskSchema } from '../types';

@Entity()
@Index(['status', 'scheduleStatus'])
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    nullable: false,
    comment: `org id means an organization`
  })
  orgId!: string;

  @Column({
    length: 32,
    nullable: false,
    comment: `app id means an application`
  })
  appId!: string;

  @Column({
    comment: `biz id means an business point id`
  })
  bizId!: string;

  @Column('text', {
    default: '',
  })
  desc: string = '';

  @Column('json')
  taskSchema!: TaskSchema;

  @Column({
    length: 32,
    nullable: false,
    comment: `processor fingerprint default equals to env.ProcessorFingerprint or equals ip + port`
  })
  PFP!: string;

  @Column('enum', {
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus = TaskStatus.PENDING;

  @Column('json', {
    comment: `execute result json`
  })
  result: any = {};

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;
}
