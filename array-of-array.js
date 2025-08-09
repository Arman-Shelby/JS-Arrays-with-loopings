const numbers = [ 1 , 3564,4556, 64644, 64646 , 6464 ,64];
const tournament_runs = [[], [], [], []];


//two dimentional array
const exam_marks = [
    [98 , 87 , 54 , 15 , 445 , 4444],
    [12654, 5454, 54, 1554, 45, 545],
    [45 , 84 , 212, 121, 846 , 446],
    [ 764, 5646 , 5154, 4545]
]
console.log(numbers[0]);
// console.log(exam_marks[0]);
console.log(exam_marks[0][0]);

const first_class_marks = exam_marks[0];
console.log(first_class_marks[0]);

exam_marks[0][1] = 66;
exam_marks[1].pop();
exam_marks[1].push(44);

// console.log(exam_marks);
for (const marks of exam_marks){
    console.log(marks);
}