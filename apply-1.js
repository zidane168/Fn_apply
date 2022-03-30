const teacher = {
    firstName: "Vi",
    lastName: "Ly",
}

function welcome(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;
}

let result = welcome.apply(teacher, ['Hello', 'How are you today?']);
console.log(result);

result = welcome.call(teacher, "Holla", "Let's play Conqueror's blade");
console.log(result);