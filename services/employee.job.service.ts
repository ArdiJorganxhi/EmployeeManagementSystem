import { EmployeeJob } from "../models/entities/employee.job.model";
import EmployRequest from "../models/requests/employ.request";

class EmployeeJobService {

    public async employ(employeeId: number, jobId: number, request: EmployRequest): Promise<EmployeeJob> {

        let { salary, dateEntered } = request;
        
        const employed = await new EmployeeJob({ employeeId, jobId, salary, dateEntered })

        await employed.save();

        return employed;
    }

    public async unemploy(employeeId: number, jobId: number): Promise<EmployeeJob> {

        const now = new Date();
        const leftDate = now.toISOString().slice(0, 10)

        const checkEmployment = await EmployeeJob.findOne({
            where: {
                employeeId: employeeId,
                jobId: jobId
            }
        });

        if (!checkEmployment) {
            throw new Error("This employee isn't employeed!")

        }

        return await checkEmployment.update({
            dateLeft: leftDate
        },)
    }
}

export default EmployeeJobService