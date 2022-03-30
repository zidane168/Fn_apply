// borrow function

const teacher = {
    firstName: "Zidane",
    lastName: "https://learn-tech-tips.blogspot.com",
    isOnline: false,
    goOnline() {
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Online`);
    },

    goOffine() {
        this.isOnline = false;
        console.log(`${this.firstName} ${this.lastName} is Offline`);
    }
}

const student = {
    firstName: "Vi",
    lastName: "Ly",
    isOnline: false,
}

console.log('Teacher: ', teacher.isOnline);
teacher.goOnline();
console.log('Teacher: ', teacher.isOnline);


console.log('Student: ', student.isOnline);
teacher.goOnline.apply(student);
console.log('Student: ', student.isOnline);