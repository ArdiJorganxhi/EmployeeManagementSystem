import { Table, Model, Column, DataType } from "sequelize-typescript";


@Table({
    timestamps: false,
    tableName: "employees"
})
export class Employee extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    surname!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;
}