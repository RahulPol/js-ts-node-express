type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];

function getUserAge(name: string): number {
  const user = users.find((user) => user.name === name);
  return user.age;
}
