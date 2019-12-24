const person: {
/*  name: string,
  age: number,
} = {*/
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

let favouritesActivities: any[];
favouritesActivities = ['Sports', 1,];

 for(const hobby of personal.hobbies){
   console.log(hobby.toUpperCase());
   console.log(hobby.map()); // !!! ERROR !!!
 }