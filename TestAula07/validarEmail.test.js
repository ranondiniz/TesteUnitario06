function validarEmail(email) {
    // Expressão regular para verificar um endereço de e-mail.
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    // Verifica se a string corresponde à expressão regular.
    return regex.test(email);
  }

  describe("Testes para a função validarEmail", () => {
    // Define o primeiro teste.
    test("Deve retornar true para e-mails válidos", () => {
      // E-mail válido.
      const emailValido = "email@exemplo.com";
  
      // Verifica se a função retorna true.
      expect(validarEmail(emailValido)).toBeTruthy();
    });

  });