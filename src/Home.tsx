import * as React from 'react';
import { Title } from 'bloomer';
import { Link } from 'react-router-dom';

export const Home: React.StatelessComponent = () => (
    <div>
        <Title>Welcome to Advocado</Title>
        <p>
            <Link to={'/employees'}>Employees</Link>
        </p>
    </div>
);