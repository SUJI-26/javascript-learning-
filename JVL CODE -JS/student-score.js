const students =[];
function addStudent(name,score){
    score =Number(score)
    score =score ?? 0;
    name = name.trim().toUpperCase();
    students.push({ name, score })
}

function getGrades(){
    return students.map((students) =>{
        let grade = "F";
        if(students.score >=90) grade = "A";
        else if(students.score>= 75) grade = "B"
        else  if(students.score>= 50) grade = "C"
        else if(students.score>= 35) grade = "D"
        return {...students, grade}
    })

}

// Tob scores //
function getTopscores(){
    return students.filter((students) => students.score >= 75)
}

function findStudent(name){
     return students.find((students) => students.name ==name )

}

// check faillyers //

function hasFailures(){
     return students.some((students) => students.score <35)
}

// display Data //
function displayAll(){
    const graded = getGrades();
    console.log("student Data")
    console.log("All Student with Grade");
    console.log("Name | Score | Grade")
    graded.forEach((students) => {
        console.log(`${students.name} | ${students.grade} |${students.grade}`)
    })
}

// addidng studetn data//
addStudent("Suji","91")
addStudent("vijay","83")
addStudent("karthick","44")
addStudent("sanjai","28")


// Display student data 
displayAll()
// Top score 
console.log("\n Top scores:")
console.log(getTopscores())

// find studnet //
console.log("\n searching for  Suji:")
console.log(findStudent("suji"));


// find student //
console.log("\n searching for Suji:");
console.log(findStudent("suji"));

// check fail /
 console.log("\n Any fail")
console.log(hasFailures() ?" Yes some are fail":" No student is Fail " )