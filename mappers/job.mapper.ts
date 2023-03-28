import JobDto from "../models/dtos/job.dto";
import { Job } from "../models/entities/job.model";

class JobMapper{

    public toDto(job: Job){
        return new JobDto(job.name, job.department, job.salary_range)
    }
}

export default JobMapper