import * as React from 'react';

import { Title } from 'bloomer';

import { Employee } from '@App/employees/Employee';
import { EmployeeModel } from '@App/employees/models';

const employeesUrl = 'https://my-json-server.typicode.com/pauleveritt/advocado/employees';

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
                <div className="notification is-danger">
                    This uses a public REST API server
                    at <a href={employeesUrl} style={{paddingRight: 5}}>{employeesUrl}</a>
                    for testing REST calls.
                </div>
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