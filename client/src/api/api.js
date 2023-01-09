export async function fetchData() {
  const response = await fetch("http://localhost:5000/users");
  const promise = await response.json();
  return promise;
}

export async function postData(newUser) {
  console.log(newUser);
  return await fetch("http://localhost:5000/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
