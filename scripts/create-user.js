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
  }).then(r => r.json());

const login = (username, password) =>
  fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password
    })
  }).then(r => r.json());

const userName = process.argv[2];

signUp(process.argv[2], "test")
  .then(res => {
    console.log("created", userName);
    return login(userName, "test")
      .then(console.log)
      .catch(console.log);
  })
  .catch(console.log);
