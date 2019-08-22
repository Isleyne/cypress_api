describe('Transferencia', () => {

  it('Simular Transferencia Interna', () => {
    cy.Auth()
      .then(access_token => {
        cy.request({
          method: 'POST',
          url: `https://sandbox-api.openbank.stone.com.br/api/v1/dry_run/internal_transfers`,
          
          headers: {
            'Content-Type': 'application/json',
            'x-stone-idempotency-key': '123',
            'Authorization': `Bearer ${access_token}`

          },
          body: {

              "amount":1000,
              "account_id":"e82c999b-e204-480c-a237-aab22040361f",
              "target":{
                "account":{
                  "account_code":"307942"}},
               "description":"aluguel",
               "scheduled_to":"2019-08-21"}

        }).then((response) => {
          expect(response.status).to.eq(200)
        })
      })
  })
})
