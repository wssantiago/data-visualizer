// fetches the server for the JSON data
export async function fetchData() {
  const response = await fetch("http://localhost:5000/users");
  const promise = await response.json();
  return promise;
}

// fetches the server with POST method with a new user object to be appended to the JSON
// newUser is a valid object validated before calling this api in NavForm.js
export async function postData(newUser) {
  return await fetch("http://localhost:5000/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
