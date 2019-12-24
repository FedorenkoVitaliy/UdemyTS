const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string], //tuple
} = {
//const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR'
}

const personEnum = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if (personEnum.role === Role.ADMIN){
  console.log('is ADMIN');
}

//person.role.push('admin'); error, but doesn't catch
//person.role[1] = 10; //Error

let favouritesActivities: any[];
favouritesActivities = ['Sports', 1,];

 for(const hobby of person.hobbies){
   console.log(hobby.toUpperCase());
   //console.log(hobby.map()); // !!! ERROR !!!
 }