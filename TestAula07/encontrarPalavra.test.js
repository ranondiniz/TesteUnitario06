function encontrarPalavra(frase, palavra) {
    // Converte a frase e a palavra para minúsculas.
    frase = frase.toLowerCase();
    palavra = palavra.toLowerCase();
  
    // Verifica se a palavra está presente na frase.
    return frase.includes(palavra);
  }

  describe("Testes para a função encontrarPalavra", () => {
    // Define o primeiro teste.
    test("Deve retornar true se a palavra estiver presente na frase", () => {
      // Frase com a palavra presente.
      const frase = "Aqui está uma frase com a palavra 'palavra'.";
      const palavra = "palavra";
  
      // Verifica se a função retorna true.
      expect(encontrarPalavra(frase, palavra)).toBeTruthy();
    });
});