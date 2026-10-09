const sistema = require('./sistema');

describe('sistema', () => {
// Exercício 1
  describe('verificarMaioridade', () => {
    it('deve retornar true se o valor for maior ou igual a 18', () => {
      expect(sistema.verificarMaioridade(18)).toBe(true);
      expect(sistema.verificarMaioridade(21)).toBe(true);
    });

    it('deve retornar false se o valor for menor que 18', () => {
      expect(sistema.verificarMaioridade(15)).toBe(false);
    });
  });
// Exercício 2 
  describe('calcularIMC', () => {
    it('deve retornar o IMC calculado', () => {
      expect(sistema.calcularIMC(70, 1.75)).toBeCloseTo(22.86, 2);
    });
  });
// Exercício 3
  describe('formatarNome', () => {
    it('deve retornar o nome completo', () => {
      expect(sistema.formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
    });
  });
// Exercício 4 
  describe('ehPar', () => {
    it('deve retornar true se o numero for par', () => {
      expect(sistema.ehPar(2)).toBe(true);
    });

    it('deve retornar false se o numero for impar', () => {
      expect(sistema.ehPar(3)).toBe(false);
    });
    
    it('deve retornar true se o numero for 0', () => { 
      expect(sistema.ehPar(0)).toBe(true); 
    });
  });
  // Exercício 5
 describe('celsiusParaFahrenheit', () => {
    it('deve retornar o valor convertido para Fahrenheit', () => {
      expect(sistema.celsiusParaFahrenheit(100)).toBe(212);
      expect(sistema.celsiusParaFahrenheit(0)).toBe(32);
      expect(sistema.celsiusParaFahrenheit(-40)).toBe(-40); 
    });
});
 // Exercício 6
  describe('adicionarHobby', () => {
    it('deve retornar uma nova lista com o novo hobby adicionado', () => {
      expect(sistema.adicionarHobby(['Jogos', 'Ler'], 'Programação')).toEqual(['Jogos', 'Ler', 'Programação']);
    });
  });
//Exercício 7
  describe('dividir', () => {
    it('deve retornar o resultado da divisão', () => {
      expect(sistema.dividir(10, 2)).toBe(5);
    });

   it('deve retornar erro se divisão por zero for feita', () => {
     expect(() => sistema.dividir(10, 0)).toThrow('Divisão por zero não permitida');
    });
  });
// Exercício 8
  describe('criarAluno', () => {
    it('deve retornar um objeto com nome, curso e ativo', () => {
      expect(sistema.criarAluno('Aluno', 'Curso')).toEqual({ nome: 'Aluno', curso: 'Curso', ativo: true });
    });
  });
// Exercício 9
  describe('aplicarDesconto', () => {
    it('deve retornar o valor após desconto', () => {
      expect(sistema.aplicarDesconto(100, 10)).toBe(90);
      expect(sistema.aplicarDesconto(100, 0)).toBe(100);
    });
  });
// Exercício 10
  describe('validarTamanhoSenha', () => {
    it('deve retornar true se o tamanho for maior ou igual a 8', () => {
      expect(sistema.validarTamanhoSenha('12345678')).toBe(true);
    });

    it('deve retornar false se o tamanho for menor que 8', () => {
      expect(sistema.validarTamanhoSenha('12345')).toBe(false);
    });
  });
});
