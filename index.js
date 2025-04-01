//Key concepts - 

// Immutable Example
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // Creates a new array


// Higher Order Function

function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

function applyTwice(func, value) {
    return func(func(value));
}

//Post with Authorization

import axios from 'axios';

const apiUrl = 'https://example.com/api/data'; // Replace with your API URL
const jwtToken = 'your-jwt-token-here'; // Replace with your actual JWT token

const postData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

axios.post(apiUrl, postData, {
  headers: {
    Authorization: `Bearer ${jwtToken}`, // Add the JWT token in the Authorization header
    'Content-Type': 'application/json',
  },
})
.then(response => {
  console.log('Response:', response.data);
})
.catch(error => {
  console.error('Error:', error.response ? error.response.data : error.message);
});