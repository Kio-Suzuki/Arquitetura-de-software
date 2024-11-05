const Organizacao = require('./organizacao');
const Departamento = require('./departamento');
const Funcionario = require('./funcionario');

const f1 = new Funcionario('Paulo', 1000);
const f2 = new Funcionario('João', 2000);
const f3 = new Funcionario('Maria', 3000);

const d1 = new Departamento('RH');
const d2 = new Departamento('TI');

d1.adicionar(f1);
d2.adicionar(f2);
d2.adicionar(f3);

const empresa = new Departamento('Empresa');

empresa.adicionar(d1);
empresa.adicionar(d2);

console.log(empresa.calcularSalario());

