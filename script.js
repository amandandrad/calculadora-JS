const students = [
  {
    name: "Júlia",
    note1: 7,
    note2: 7,
  },
  {
    name: "Camilo",
    note1: 3,
    note2: 6,
  },
  {
    name: "Camilo",
    note1: 6,
    note2: 8,
  },
];

function calcMedia(student) {
  let media = (student.note1 + student.note2) / 2;
  if (media >= 7) {
    alert(`A média das provas realizadas foi: ${media} 
Parabéns ${student.name}, você foi aprovado(a) no concurso! `);
  } else {
    alert(`A média das provas realizadas foi: ${media} 
Não foi dessa vez, ${student.name}. Tente novamente!`);
  }
}

for (let student of students) {
  calcMedia(student);
}
