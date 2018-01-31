import * as React from 'react';

import { Title } from 'bloomer';

import { Employee } from '@App/employees/Employee';
import { EmployeeModel } from '@App/employees/models';

const employeesUrl = 'http://localhost:3010/employees';

interface EmployeesState {
    employees: Array<EmployeeModel>;
}

class Employees extends React.Component<{}, EmployeesState> {

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
                        this.state.employees.map(
                            (employee: EmployeeModel) => (
                                <Employee key={employee.id} model={employee}/>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Employees;