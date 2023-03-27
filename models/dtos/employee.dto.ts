class EmployeeDto{

    id: number;
    name: string;
    surname: string;

    constructor(id: number, name: string, surname: string){
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}

export default EmployeeDto;