//Key concepts

// 1) Functions are First class Citizens.
// 2) Immutable data - Increases readability & makes debugging easier.
// 3) Re-usability - T.ex Higher Order Functions, Pure functions


// Immutable Example
const arr = [1, 2, 3];

const newArr = [...arr, 4]; // Creates a new array


// Higher Order Function

function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}
// let double = createMultiplier(2);
// let times15 = createMultiplier(15);



function applyTwice(func, value) {
    return func(func(value));
}

let number = 0;

let myFunction = () => {
  console.log(4+4)
}

applyTwice(myFunction, 5)




// Login

//Ni kommer först att göra ett vanligt request för inloggning mot t.ex /api/login. 
//Om ni lyckas autentisera får ni tillbaka ett JWT i responsen.

const jwtToken = '54734574375345thdefhbdh45u5erhw324t234hg34hy346'; // Ser ungefär ut såhär
//JWT - JSON Web Token

//Spara denna i sessionStorage/localStorage för att indikera att användaren är inloggad.
//Valfri namn på nyckeln
localStorage.setItem("jwt", jwtToken)

//Post with Authorization

const apiUrl = 'https://example.com/api/data'; // Replace with your API URL

//Ett nytt objekt som ska skapas i databasen
const postData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

//Vi gör en POST-request och lägger in följande i headers.
// Om ni inte är korrekt autentiserade resulterar det i en respons 403 - Forbidden.
axios.post(apiUrl, postData, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Add the JWT token in the Authorization header.
  },
})
.then(response => {
  console.log('Response:', response.data);
})
.catch(error => {
  console.error('Error:', error.response ? error.response.data : error.message);
});