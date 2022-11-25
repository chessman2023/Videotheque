let students = [];

students = [
    "Matin : 42",
    "Thibaut : 25",
    "Tristan : 24",
    "Meijuan : 32",
    "Christelle : 55",
    "Maxime : 27",
    "Mouloud : 50",
    "Falilou : 26",
    "Lamïa : 28",
    "Adam : 19",
    "Lynda : 21",
    "Kylian : 22"
];

console.log(students);

class studentAge {

    constructor(name, age){

        this.name = name;
        this.age = age;
}
}

let studentAge1 = new studentAge("Matin", 42);
let studentAge2 = new studentAge("Thibaut", 25);
let studentAge3 = new studentAge("Tristan", 24);
let studentAge4 = new studentAge("Meijuan", 32);
let studentAge5 = new studentAge("Christelle", 55);
let studentAge6 = new studentAge("Maxime", 27);
let studentAge7 = new studentAge("Mouloud", 50);
let studentAge8 = new studentAge("Falilou", 26);
let studentAge9 = new studentAge("Lamïa", 28);
let studentAge10 = new studentAge("Adam", 19);
let studentAge11 = new studentAge("Lynda", 21);
let studentAge12 = new studentAge("Kylian", 22);

console.log(studentAge1, studentAge2, studentAge3, studentAge4, studentAge5, studentAge6,studentAge7, studentAge8, studentAge9, studentAge10, studentAge11, studentAge12);

const numberOfstudents = students.length
console.log(students.length)



const cumulativeSum = (sum => value => sum += value)(0);

console.log([studentAge1.age, studentAge2.age, studentAge3.age,
    studentAge4.age, studentAge5.age, studentAge6.age,
     studentAge7.age, studentAge8.age,studentAge9.age,
     studentAge10.age, studentAge11.age, studentAge12.age].map(cumulativeSum));


/*let Age = [studentAge1.age, studentAge2.age, studentAge3.age,
     studentAge4.age, studentAge5.age, studentAge6.age,
      studentAge7.age, studentAge8.age];

      var result = Ageitem + the sum of any previous items; */







/* let numberOfstudent = 12;
let cumulativeAge = students.age

while (
        
        numberOfstudent < 13
        && length > 0
    ) {
        
        cumulativeAge ++;
        
}

console.log(cumulativeAge); */