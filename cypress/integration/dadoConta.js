// describe('Consultar Dados da Conta', () => {
//
//   it('Consultar o Saldo ', () => {
//     cy.Auth()
//       .then(access_token => {
//         cy.Accounts(access_token)
//           .then((response) => {
//             cy.request({
//               method: 'GET',
//               url: `https://sandbox-api.openbank.stone.com.br/api/v1/accounts/${response[0].id}/balance`,
//               headers: {
//                 'Authorization': `Bearer ${access_token}`
//               }
//             }).then((response) => {
//               expect(response.status).to.eq(200)
//             })
//           })
//       })
//   })

//   it('Consultar Extrato', () => {
//     cy.Auth()
//       .then(access_token => {
//         cy.Accounts(access_token)
//           .then((response) => {
//             cy.request({
//               method: 'GET',
//               url: `https://sandbox-api.openbank.stone.com.br/api/v1/accounts/${response[0].id}/statement?limit=50`,
//               headers: {
//                 'Authorization': `Bearer ${access_token}`
//               }
//             }).then((response) => {
//               expect(response.status).to.eq(200)
//             })
//           })
//       })
//   })
//
//   it('Consultar Extrato', () => {
//     cy.Auth()
//       .then(access_token => {
//         cy.Accounts(access_token)
//           .then((response) => {
//             cy.request({
//               method: 'GET',
//               url: `https://sandbox-api.openbank.stone.com.br/api/v1/accounts/${response[0].id}/statement?limit=50`,
//               headers: {
//                 'Authorization': `Bearer ${access_token}`
//               }
//             }).then((response) => {
//               expect(response.status).to.eq(200)
//             })
//           })
//       })
//   })
//
//
//
//   it('Consultar Todas as Taxas', () => {
//     cy.Auth()
//       .then(access_token => {
//         cy.Accounts(access_token)
//           .then((response) => {
//             cy.request({
//               method: 'GET',
//               url: `https://sandbox-api.openbank.stone.com.br/api/v1/accounts/${response[0].id}/fees`,
//               headers: {
//                 'Authorization': `Bearer ${access_token}`
//               }
//             }).then((response) => {
//               expect(response.status).to.eq(200)
//             })
//           })
//       })
//   })
//
//
//   it('Consultar Todas as Contas às Quais se tenho Acesso', () => {
//     cy.Auth()
//       .then(access_token => {
//         cy.Accounts(access_token)
//           .then((response) => {
//             cy.request({
//               method: 'GET',
//               url: `https://sandbox-api.openbank.stone.com.br/api/v1/accounts/${response[0].id}?paginate=true`,
//               headers: {
//                 'Authorization': `Bearer ${access_token}`
//               }
//             }).then((response) => {
//               expect(response.status).to.eq(200)
//             })
//           })
//       })
//   })
//
//
// })
