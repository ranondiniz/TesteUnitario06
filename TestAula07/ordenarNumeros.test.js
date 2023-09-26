function ordenarNumeros(numeros) {
    // Ordena a lista de números em ordem crescente.
    numeros.sort((a, b) => a - b);
    return numeros;
  }

describe("Testes para a função ordenarNumeros", () => {
    test("Deve ordenar uma lista de números em ordem crescente", () => {
      // Lista de números desordenados.
      const numeros = [10, 5, 2, 7, 3];
  
      // Lista de números ordenados.
      const numerosOrdenadosEsperados = [2, 3, 5, 7, 10];
  
      // Chama a função para ordenar a lista.
      const numerosOrdenados = ordenarNumeros(numeros);
  
      // Verifica se a lista ordenada é igual à lista esperada.
      expect(numerosOrdenados).toEqual(numerosOrdenadosEsperados);
    });
  
  });