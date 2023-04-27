const students = [
{
  name: 'Anderson',
  grade1: 9.8,
  grade2: 7.1,
},
{
  name: 'Felipe',
  grade1: 5.5,
  grade2: 3.2,
},
{
  name: 'Vinicius',
  grade1: 10,
  grade2: 9.4,
},
{
  name: 'Nicolas',
  grade1: 6,
  grade2: 9.6,
}
]

function calculateGrade (grade1, grade2) {
  let averageGrade = ((grade1 + grade2) / 2).toFixed(1)
  return averageGrade
}

function printGrade (student) {

  let resultGrade = calculateGrade(student.grade1, student.grade2)
  let approved = calculateGrade(student.grade1, student.grade2) >= 7

  if (approved) {
    alert(`O aluno ${student.name} possui média de ${resultGrade} e está aprovado!`)
  } else {
    alert(`O aluno ${student.name} possui média de ${resultGrade} e está reprovado.`)
  }
}

for (let student of students) {
  printGrade(student)
}