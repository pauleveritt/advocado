import * as React from 'react';

const employeesUrl = 'http://localhost:3010/employees';

interface Employee {
    id: number;
    first_name: string;
    last_name: string;
    email: string;

}

interface EmployeesState {
    employees: Array<Employee>;
}

class Employees extends React.Component<any, EmployeesState> {

    constructor(props: any) {
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        fetch(employeesUrl)
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                this.setState({
                    employees: data
                });
            });
    }

    public render() {

        return this.state.employees.map((employee: any) => (
            <div key={employee.id}>
                {employee.first_name} {employee.last_name}
            </div>
        ));
    }
}

export default Employees;