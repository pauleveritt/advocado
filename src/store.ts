import { action, observable } from 'mobx';

export class EmployeesStore {
    @observable data = [];
    employeesUrl = 'https://my-json-server.typicode.com/pauleveritt/advocado/employees';

    @action load() {
        fetch(this.employeesUrl)
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.data = data;
            });
    }

}

export class CounterStore {
    @observable clickedCount = 1;

    @action
    increment() {
        this.clickedCount++;
    }
}

const counterStore = new CounterStore();
const employeesStore = new EmployeesStore();

export interface AdvocadoStore {
    counter: CounterStore;
    employees: EmployeesStore;
}

const store = {
    counter: counterStore,
    employees: employeesStore
};

export default store;