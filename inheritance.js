class TeamMember {
    name;
    role = 'Support web Dev ';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;


    }
}
class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
// class StudentCare {
//     name;
//     designation = 'Student Care Web Dev';
//     address = 'BD';
//     constructor(name, address) {
//         this.name = name;
//         this.address = address;

//     }
//     buildARoutinne(student) {
//         console.log(this.name, 'Build a Routine for ', student);

//     }


// }

const aamir = new Support('Amir Khan', 'Indea', 11);
const salman = new Support('Sulaiman Khan', 'Boliud', 4);
aamir.startSession();
salman.startSession();
console.log(aamir, salman);
// const alia = new StudentCare('Alia Bhatt', 'Mumbai', 5);
// console.log(alia);