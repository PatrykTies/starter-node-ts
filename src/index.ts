interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  console.log("Hello, " + person.firstName + " " + person.lastName);
  return "Hello, " + person.firstName + " " + person.lastName;
}

const user = { firstName: "Jane", lastName: "User" };
greeter(user);
