describe ('Validação de campos obrigatórios na tela de login e registro', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('Verifica mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click ();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click ();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('Verifica mensagens de email inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click ();
        // Inserindo nome Jacqueline no campo
        cy.get('input[formcontrolname="email"]').type('Jacqueline')
        //Validação do Email inválido
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

    })

    it('Verifica mensagens de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click ();
        // Inserindo senha 123
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button', 'Register').click ();
        //Validação de senha com menos de 8 caracteres
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');

    })

})