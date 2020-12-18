import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from "@augejs/typeorm";
import { JobStatusEnum, JobRunningStatus } from '../enums';
import { JobSchema } from '../types';

@Entity({
  name: 'job'
})
@Index(['status', 'scheduleStatus'])
export class JobEntity {
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

  @Column('enum', {
    enum: JobStatusEnum,
    default: JobStatusEnum.NORMAL,
  })
  status: string = JobStatusEnum.NORMAL

  @Column('text', {
    default: '',
  })
  desc: string = '';

  @Column('enum', {
    enum: JobRunningStatus,
    default: JobRunningStatus.WAITING,
  })
  runningStatus: JobRunningStatus = JobRunningStatus.WAITING;

  @Column('int')
  delay: number = 0;

  @Column('bool')
  repeatable: boolean = false;

  @Column('json')
  jobSchema!: JobSchema;

  @Column('int', {
    nullable: false,
    default: 0,
  })
  curStep: number = 0;

  @Column('int')
  totalStep: number = 0;

  @Column('timestamp')
  nextTaskTime!: Date;

  @Column({
    length: 32,
    nullable: false,
    default: '',
    comment: `processor fingerprint default equals to env.ProcessorFingerprint or equals ip + port`
  })
  PFP!: string;

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;
}
