import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Title } from 'bloomer';

import { Employee } from './Employee';
import { EmployeeModel } from './models';
import { CounterStore } from '../store';

const employeesUrl = 'https://my-json-server.typicode.com/pauleveritt/advocado/employees';

interface EmployeesProps {
    counterStore: CounterStore;
}

interface EmployeesState {
    employees: Array<EmployeeModel>;
}

@inject('counterStore')
@observer
class Employees extends React.Component<EmployeesProps, EmployeesState> {

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

        const cs = this.props.counterStore;

        return (
            <div>
                <Title>Employees</Title>
                <div className="notification is-danger">
                    This uses a public REST API server
                    at <a href={employeesUrl} style={{ paddingRight: 5 }}>{employeesUrl}</a>
                    for testing REST calls.
                </div>
                <div>Click count: {cs.clickedCount}</div>
                <div>
                    <button onClick={() => cs.increment()}>+1</button>
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