import { getGreeting } from '../support/app.po';

describe('apps-examples-nft-react-hooks', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to GraphHack NFT App!');
  });

  it('should get rate limited', () => {
    cy.visit('/collections');
    cy.intercept('/graphql').as('gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
    cy.get('button').click();
    cy.wait('@gqlRequest');
  });
});
