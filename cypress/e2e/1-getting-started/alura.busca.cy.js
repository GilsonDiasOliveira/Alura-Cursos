describe('Alura busca cursos', () => {

    before(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
        //Buscando e Digitando
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        
        //Buscando e Clicando
        cy.get('.header-barraBusca-form-submit').click();
        
        //Resultado da Busca
        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Java e Orientação a Objetos');
            
    })

})