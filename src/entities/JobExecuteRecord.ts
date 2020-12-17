import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from "@augejs/typeorm";
import { JobExecuteStatusEnum, JobScheduleTypeEnum } from '../enums';

@Entity()
@Index(['status', 'scheduleStatus'])
export class JobExecuteRecord {
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

  @Column("boolean")
  scheduleRepeated: boolean = false

  @Column('enum', {
    enum: JobScheduleTypeEnum,
    default: JobScheduleTypeEnum.BASIC,
  })
  scheduleType: JobScheduleTypeEnum = JobScheduleTypeEnum.BASIC;

  @Column('json')
  scheduleParams: any = {};

  @Column('int')
  scheduleCurStep: number = 0;

  @Column('int')
  scheduleTotalStep: number = 0;

  @Column('timestamp')
  executeTimeStamp!: Date;

  @Column({
    length: 32,
    nullable: false,
    comment: `processor fingerprint default equals to env.ProcessorFingerprint or equals ip + port`
  })
  PFP!: string;

  @Column('enum', {
    enum: JobExecuteStatusEnum,
    default: JobExecuteStatusEnum.PENDING,
  })
  executeStatus: JobExecuteStatusEnum = JobExecuteStatusEnum.PENDING;

  @Column('json', {
    comment: `execute result json`
  })
  executeResult: any = {};

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;
}
