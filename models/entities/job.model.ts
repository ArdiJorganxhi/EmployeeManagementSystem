import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript'
import { EmployeeJob } from './employee.job.model';
import { Employee } from './employee.model';

@Table({
    timestamps: false,
    tableName: "jobs"
})
export class Job extends Model {

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    department!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    salary_range!: number


    @BelongsToMany(() => Employee, {
        through: () => EmployeeJob,
        foreignKey: 'jobId',
      })
    employee!: Employee[]

}
