// Service file to handle API calls for feedback

const BASE_URL = `http://${window.location.hostname}:30500`;

const API_URL = `${BASE_URL}/api/feedback`;

// take feedback from database
export const getFeedback = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// send new feedback to backend
export const addFeedback = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// optional function (same POST request)
export const postFeedback = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
// // I created a service file to handle API calls for fetching feedback data. it establish connection between frontend and backend, making it easier to manage and reuse API calls across the application.
// const API_URL = "http://localhost:5000/api/feedback"; // react yha request bhejega aur backend se data fetch hoga
// // take feedback from database
// export const getFeedback = async () => {
//   const res = await fetch(API_URL);
//   return res.json();
// };
// // send new feedback to backend
// export const addFeedback = async (data) => {
//   const res = await fetch(API_URL, { // Server ko data bhejna 
//     method: "POST", 
//     headers: { "Content-Type": "application/json" }, // server ko btana ki data json format me ja rha hai
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

// export const postFeedback = async (data) => {
//   const res = await fetch("http://localhost:5000/api/feedback", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };
// /*
// I created a service layer called feedbackService.js to manage API communication between the React frontend and Express backend. 
// The getFeedback function fetches testimonials from the backend using a GET request, 
// while postFeedback sends user feedback using a POST request. 
// These requests interact with MongoDB through the backend API.
// */
