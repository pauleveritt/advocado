import { action, observable } from 'mobx';

class HelloData {
    @observable clickedCount = 1;

    @action
    increment() {
        this.clickedCount++;
    }
}

const store = new HelloData();

export default store;