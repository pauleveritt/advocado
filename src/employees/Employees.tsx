import * as React from 'react';

import { Title } from 'bloomer';

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
                this.setState({
                    employees: data
                });
            });
    }

    public render() {

        return (
            <div>
                <Title>Employees</Title>
                <ul>
                    {
                        this.state.employees.map((employee: Employee) => (
                            <li key={employee.id}>{employee.first_name}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Employees;