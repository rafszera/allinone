const calculadora = require("../models/calculadora.js");

test("1. calcule esse resultado", () => {
  const resultado = calculadora.somar(0.5, 0.5);
  expect(resultado).toBe(1);
  console.log(resultado + " <- resultado 1");
});

test("2. somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado + " <- resultado 2");
});

test("3. subtrair 7 de 10 deveria retornar 3", () => {
  const resultado = calculadora.sub(10, 7);
  expect(resultado).toBe(3);
  console.log(resultado + " <- resultado 3");
});

test("4. somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana, 100");
  expect(resultado).toBe("Erro");
  console.log(resultado + " <- resultado 4");
});

test("5. multiplicar 5 por 5 deveria retornar 25", () => {
  const resultado = calculadora.multi(5, 5);
  expect(resultado).toBe(25);
  console.log(resultado + " <- resultado 5");
});
