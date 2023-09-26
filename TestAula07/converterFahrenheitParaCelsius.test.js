function converterFahrenheitParaCelsius(fahrenheit) {
    // Fórmula para converter de Fahrenheit para Celsius.
    const celsius = (fahrenheit - 32) * (5 / 9);
  
    // Retorna o valor convertido.
    return celsius;
}

describe("Testes para a função converterFahrenheitParaCelsius", () => {
    // Define o primeiro teste.
    test("Deve retornar 0 graus Celsius para 32 graus Fahrenheit", () => {
      // Temperatura em Fahrenheit.
      const fahrenheit = 32;
  
      // Temperatura esperada em Celsius.
      const celsiusEsperado = 0;
  
      // Temperatura convertida.
      const celsiusConvertido = converterFahrenheitParaCelsius(fahrenheit);
  
      // Verifica se a temperatura convertida é igual à temperatura esperada.
      expect(celsiusConvertido).toEqual(celsiusEsperado);
    });
});