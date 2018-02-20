import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Title } from 'bloomer';

import { Employee } from './Employee';
import { EmployeeModel } from './models';
import { AdvocadoStore } from '../store';

interface EmployeesProps {
    store: AdvocadoStore;
}

@inject('store')
@observer
class Employees extends React.Component<EmployeesProps, {}> {

    componentDidMount() {
        this.props.store.employees.load();
    }

    public render() {

        const cs = this.props.store.counter;
        const employees = this.props.store.employees;

        return (
            <div>
                <Title>Employees</Title>
                <div className="notification is-danger">
                    This uses a public REST API server
                    at <a href={employees.employeesUrl} style={{ paddingRight: 5 }}>{employees.employeesUrl}</a>
                    for testing REST calls.
                </div>
                <div>Click count: {cs.clickedCount}</div>
                <div>
                    <button onClick={() => cs.increment()}>+1</button>
                </div>
                <ul>
                    {
                        employees.data.map(
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