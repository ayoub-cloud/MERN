const express = require("express");
const app = express();
const port = 8000;
// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const {faker}  = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
      _id: faker.datatype.id(),
      phoneNumber: faker.phone.phoneNumber(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
         };
    return newUser;
  }; 
  

  const createCompany = () => {
    const newCompany = {
      _id: faker.datatype.id(),
      name: faker.company.companyName(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
      }
    };
    return newCompany;
  };
  
  //******MIDDELWARE******* *///
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// --------create Route NewUser -------
// app.get('.api/users/new', (req,res)=>{
//     return res.json(createUser());
// });
app.get('/api/users/new', (req, res) => {
    const user = createUser();
    res.json(user);
  });
//-------------- Create Route New company------------
app.get("/api/users/new", (req,res) =>{
    return res.json(createCompany());
});


//-------------create Route for both User&&Company---------
app.get("/api/user/company/new", (req, res) =>{
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ newUser , newCompany});
});


// we can create a function to return a random / fake "Product"
// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };
    
// const newFakeProduct = createProduct();
console.log(faker.commerce.price());
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

