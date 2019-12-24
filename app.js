/*const person: {
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
};*/
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};
if (person.role === ADMIN) {
    console.log('is ADMIN');
}
//person.role.push('admin'); error, but doesn't catch
//person.role[1] = 10; //Error
var favouritesActivities;
favouritesActivities = ['Sports', 1,];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // !!! ERROR !!!
}
