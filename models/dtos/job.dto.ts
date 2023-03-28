class JobDto{

    name: string;
    department: string;
    salaryRange: number;

    constructor(name: string, department: string, salaryRange: number){
        this.name = name;
        this.department = department;
        this.salaryRange = salaryRange;
    }
}

export default JobDto