const fetch = require("node-fetch");

require("dotenv").config({ path: `${__dirname}/../.env` });

const API_URL = process.env.API_URL;

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

if (process.argv.length < 4) {
  console.log("USAGE: node scripts/create-user USERNAME PASSWORD");
} else {
  signUp(process.argv[2], process.argv[3])
    .then(res => {
      console.log("created", userName);
      return login(userName, process.argv[3])
        .then(console.log)
        .catch(console.log);
    })
    .catch(console.log);
}
