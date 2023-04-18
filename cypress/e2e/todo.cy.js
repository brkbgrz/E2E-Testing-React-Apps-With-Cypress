describe ('React todo list app testing with cypress', () => {
    beforeEach(() => {
        cy.visit('/')
      })
    it('Add task todo list',()=>{
        cy.get('input').type('Test Task 1')
        cy.get('button').click()
        cy.get('.theList > div > :nth-child(1)').should('have.text', 'Test Task 1')
        cy.get('input').type('Test Task 2').type('{enter}')
        cy.get('.theList > div > :nth-child(2)').should('have.text', 'Test Task 2')
    })
    it('Delete task from todo list',()=>{
        cy.get('input').type('Test Task 1').type('{enter}')
        cy.get('input').type('Test Task 2').type('{enter}')
        cy.get('.theList > div > :nth-child(1)').click()
        cy.contains('.theList > div','Test Task 1').should('not.exist')
    })
  });
