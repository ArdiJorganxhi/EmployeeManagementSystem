import JobMapper from "../mappers/job.mapper";
import JobDto from "../models/dtos/job.dto";
import { Employee } from "../models/entities/employee.model";
import { Job } from "../models/entities/job.model";
import CreateJobRequest from "../models/requests/create.job";

class JobService {

    private jobMapper = new JobMapper();

    public async createJob(request: CreateJobRequest): Promise<Job> {

        let { name, department, salaryRange } = request

        const checkJob = await Job.findOne({ where: { name } })

        if (checkJob) {
            throw new Error("Job already exists!")
        }

        const job = await new Job({ name, department, salary_range: salaryRange });

        await job.save();

        return job;

    }

    public async getJobById(jobId: number): Promise<JobDto> {

        const job = await Job.findByPk(jobId);

        if (!job) {
            throw new Error("Job doesn't exist!");
        }

        return this.jobMapper.toDto(job);

    }

    public async deleteJobById(jobId: number): Promise<Number> {

        return await Employee.destroy({ where: { id: jobId } })
    }
}

export default JobService