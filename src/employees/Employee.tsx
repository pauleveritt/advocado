import * as React from 'react';

export interface EmployeeModel {
    id: number;
    first_name: string;
    last_name: string;
    email: string;

}

interface EmployeeProps {
    model: EmployeeModel;
}

export const Employee: React.StatelessComponent<EmployeeProps> = ({model}) => {
    return (
        <li>{model.first_name}</li>
    );
};