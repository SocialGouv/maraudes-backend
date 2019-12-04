const fetch = require("node-fetch");

const API_URL = process.env.API_URL || "http://127.0.0.1:1337";

const signUp = (username, password) =>
  fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password
    })
  });

console.log("process.argv[2]", process.argv[2]);
signUp(process.argv[2], "test")
  .then(res => res.text())
  .then(console.log)
  .catch(console.log);
