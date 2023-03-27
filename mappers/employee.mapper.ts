import EmployeeDto from "../models/dtos/employee.dto";
import { Employee } from "../models/employee.model";

class EmployeeMapper {

    public toDto(employee: Employee): EmployeeDto {

        return new EmployeeDto(employee.id, employee.name, employee.surname);
    }
}
export default EmployeeMapper