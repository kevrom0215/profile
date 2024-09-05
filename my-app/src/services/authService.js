// services/authService.js
import axios from 'axios';
import creds from '../utils/creds.json'

const API_URL = 'https://your-api-url.com/api/auth'; // Replace with your API endpoint

// // Login function that takes email and password
// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, {
//       email,
//       password,
//     });

//     // Save token to localStorage or cookies (depending on your needs)
//     if (response.data.token) {
//       localStorage.setItem('token', response.data.token);
//     }

//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || 'Login failed');
//   }
// };

// // Logout function that removes token
// export const logout = () => {
//   localStorage.removeItem('token');
// };

// // Check if the user is authenticated
// export const isAuthenticated = () => {
//   const token = localStorage.getItem('token');
//   return !!token;
// };
export const login = async(email,password) => {
    try{
        const user = creds.find(user => user.username === email && user.password === password);
        if (user) {
            const token = 'dummy-token';
            sessionStorage.setItem('token', token);
            return { success: true, message: 'Login successful!' };
        } 
        else {
            // If no user matches, return failure message
            return { success: false, message: 'Invalid email or password' };
        }
    }
    catch(e){
        throw new Error('Unable to load user data');
    }
    finally{

    }
}

export const logout = () => {
    sessionStorage.removeItem('token');
};

export const isAuthenticated = () => {
    const token = sessionStorage.getItem('token');
    console.log(token)
    return !!token;
};