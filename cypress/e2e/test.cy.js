describe('Suma de dos números', () => {
    beforeEach(() => {
      // Visitamos la página antes de cada test
      cy.visit('https://trabajoci.onrender.com');
    });
  
    it('debería sumar dos números correctamente', () => {
      // Seleccionamos los inputs y el botón, luego interactuamos con ellos
      cy.get('#num1').type('2');
      cy.get('#num2').type('5');
      cy.get('button').click();
  
      // Verificamos el resultado
      cy.get('#result').should('have.text', 'Resultado: 7');
    });
  
    it('debería mostrar un error si no se ingresan números', () => {
      // Dejamos los inputs vacíos y hacemos click en el botón
      cy.get('button').click();
  
      // Verificamos que el resultado sea un mensaje de error o un valor por defecto
      cy.get('#result').should('have.text', 'Resultado: Se deben ingresar números.');
    });
  });