import EmployeeMapper from "../mappers/employee.mapper";
import EmployeeDto from "../models/dtos/employee.dto";
import { Employee } from "../models/entities/employee.model";
import UserUtils from "../utils/user.utils";


class EmployeeService {

    private employeeMapper = new EmployeeMapper();

    public async getEmployeeById(): Promise<EmployeeDto> {

        const employee = await Employee.findOne({
            where: {
                id: UserUtils.user.dataValues.id
            }
        });

        if (!employee) {
            throw new Error("Employee not found!")
        }

        return this.employeeMapper.toDto(employee);

    }
    public async deleteEmployeeById(employeeId: number): Promise<Number> {

        return await Employee.destroy({ where: { id: employeeId } });
    }
}
export default EmployeeService;