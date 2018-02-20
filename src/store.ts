import { action, observable } from 'mobx';

export class CounterStore {
    @observable clickedCount = 1;

    @action
    increment() {
        this.clickedCount++;
    }
}

const store = new CounterStore();

export default store;