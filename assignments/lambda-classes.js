// CODE here for your Lambda Classes

// PERSON
class Person {
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
//TEST
let newPerson1 = new Person('Meg', 21, 'Donabate');
let newPerson2 = new Person('Lola', 18, 'Howth');
let newPerson3 = new Person('Jack', 27, 'Sutton');


//INSTRUCTOR
class Instructor extends Person{
    constructor(name, age, location, speciality, favLanguage, catchPhrase){
        super(name, age, location);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    //this generates a random number from -10 to 10
    //the condition in the if statement ensures that the students grade is over ten so that if the function invoked generates -10 as the random number, the student's grade cannot go into minus
    //similarly the student's grade cannot be over 90 when the function is invoked which dissalows them from getting a grade above 100 if the random number generated is 10
    randomlyAssignGrade(student) {
        if(student.grade < 89 && student.grade > 10){ student.grade += Math.floor(Math.random() * 21) - 10; };     
    }
}

//TEST
let newInstructor1 = new Instructor('Johnny', 40, 'Dun Laoghaire', 'Frontend', 'CSS', 'Right Out of the Gate');
let newInstructor2 = new Instructor('Catherine', 51, 'Rathgar', 'iOS Development', 'Ruby on Rails', 'Swinging For the Fences');
let newInstructor3 = new Instructor('Stefan', 38, 'Lucan', 'Computer Architecture', 'JS', 'Keep On Truckin');


//STUDENT
class Student extends Person{
    constructor(name, age, location, previousBackground, className, favSubjects, grade ){
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = 60;
    }    
    listsSubjects() {
        this.favSubjects.forEach((subject) => {console.log(subject)});
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`;
    }
    graduate(){
        if(this.grade >= 70){
            return `Congratulations, ${this.name}! You have graduated Lambda School ${this.className}`;
        } else {
            return `Keep studying ${this.name}, you are not ready to graduate ${this.className}!`;
        }
    }
}
//TEST
let newStudent1 = new Student('Sarah', 24, 'Dublin', 'MSc in Pharmaceuticals', 'WEBEU3', ['Web Fundamentals','CS','Advanced CSS']);
let newStudent2 = new Student('Tony', 29, 'Manila', 'BSc in Computing', 'WEBEU1', ['JS1','Responsive Design','Advanced CSS']);
let newStudent3 = new Student('Peter', 38, 'Dublin', 'MSc in Pharmaceuticals', 'WEBE2', ['Data Science','UX/UI','iOS Development']);


//PM
class ProjectManager extends Instructor {
    constructor(name, age, location, speciality, favLanguage, catchPhrase, gradClassName, favInstructor){
        super(name, age, location, speciality, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
//TEST
let newPM1 = new ProjectManager('Alice', 31, 'Italy', 'CS', 'C+', 'Theres No I in Team', 'WEB20', 'Johnny');
let newPM2 = new ProjectManager('Dylan', 26, 'Spain', 'Android Development', 'JS', 'My Cup of Tea', 'WEB22', 'Catherine');
let newPM3 = new ProjectManager('Jamie', 42, 'Ireland', 'CS', 'HTML', 'Rain on Your Parade', 'WEB17', 'Stefan');