class Support {
    name;
    role = 'Support web Dev ';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address

    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Amir Khan', 'Indea');
const salman = new Support('Sulaiman Khan', 'Boliud');
aamir.startSession();
salman.startSession();
console.log(aamir, salman);