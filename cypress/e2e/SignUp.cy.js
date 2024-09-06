// describe('SignUp Page', () => {
//   describe('Error Massages', () => {
    

//     //NAME İÇİN TEST; 
//   it('name input throws error for 2 chars', () => { // testin neyi kontrol ettiğini açıklayan bir tanımlamadır. 
    
//  //en iyi yöntem; cypress SignUp.jsx form alanında (test alanlarına) id ver. id vermek için (data-cy="id(form alanı neyse onun ismi-input") yazım şeklini kullan. 


//  //Arrange (sayfayı aç.)
//  cy.visit(' http://localhost:5173/')
 
 
//  //Act (input alanına yaz.)
//  cy.get("[data-cy='name-input']").type("ni"); //isim giriş inputuna ni yazar.
//  //Assert 
//  cy.contains("Name information must be at least 3 characters").should("be.visible") //hata mesajının görüntülenip görüntülenmediğini doğrular. 
//  // Cypress testlerinde bir elementin görünür olup olmadığını kontrol eden bir asertif (doğrulama) komutudur.
 
// });

// //SURNAME İCİN TEST; 

// it('Surname input throws error for 2 chars', () => {
// //Arrange 
//   cy.visit(' http://localhost:5173/')

// //Act 
// cy.get("[data-cy='surname-input']").type("tü"); 

// //Assert 
// cy.contains("Surname information must be at least 3 characters").should("be.visible")

// });

// //EMAİL İÇİN TEST; 
// it('Email input throws error for nida@wit.', () => {
//   //Arrange 
//     cy.visit(' http://localhost:5173/')
  
//   //Act 
//   cy.get("[data-cy='email-input']").type("nida@wit."); 
  
//   //Assert 
//   cy.contains("Please enter a valid e-mail information.").should("be.visible")
// });

// //PASSWORD İÇİN TEST; 

// it('Password input throws error for 1234', () => {
//   //Arrange 
//     cy.visit(' http://localhost:5173/')
  
//   //Act 
//   cy.get("[data-cy='password-input']").type("1234"); 
  
//   //Assert 
//   cy.contains("Must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 symbol and 1 number.").should("be.visible")
// });



// //BUTON DİSABLED Mİ? KONTROLÜ 

// it("button is disabled for unvalidated inputs.", () => {

//   //Arrange
//   cy.visit("http://localhost:5173/")

//   //Act
// cy.get("[data-cy='password-input']").type("1234");

//   //Assert
//   cy.get("[data-cy='submit-button']").should("be.disabled")
// })

// });
// });


//İYİ SENARYOLAR İÇİN TESTLER

