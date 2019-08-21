Cypress.Commands.add('Auth', () => {
  cy.request({
    method: 'POST',
    url: 'https://sandbox-accounts.openbank.stone.com.br/auth/realms/stone_bank/protocol/openid-connect/token',
    form: true,
    body: {
      username: 'isleynealves@gmail.com',
      password: '123stone',
      grant_type: 'password',
      client_id: 'admin-cli'
    }
  }).then(response => {
    return response.body.access_token
  })
})

Cypress.Commands.add('Accounts', (access_token) => {
 cy.request({
   method: 'GET',
   url: 'https://sandbox-api.openbank.stone.com.br/api/v1/accounts',
   headers: {
     'Authorization': `Bearer ${access_token}`
   }
 }).then(response => {
   return response.body
 })
})
