const Aluno = require('./aluno');
const Turma = require('./turma');
const TurmaPresencial = require('./turmaPresencial');

const a1 = new Aluno('Akio', 'akio@utfpr.br', '2476495');
const t1 = new Turma('ES46B', 5);
const tp1 = new TurmaPresencial('ES46A', 7, 80);

console.log(t1.aprovado());
console.log(tp1.aprovado());