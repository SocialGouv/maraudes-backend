# maraudes-backend

Postgres + Hasura + JWT auth API

Clone the repo and add `docker-compose.override.yml` and `.env` from the sample files.

## Setup

```sh
# Clone the repo
git clone https://github.com/@socialgouv/maraudes-backend

# Change directory
cd maraudes-backend

# generate the RSA keys
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout > public.pem

# start the stack
docker-compose up

# Apply hasura migrations
hasura migrate apply --admin-secret=xxxx
```

### Dev

```sh
# install dependencies
yarn
# start API locally
yarn dev
```

## Auth

#### Sign-up

```js
fetch(`${API_URL}/signup`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username,
    password
  })
})
  .then(r => r.json())
  .catch(console.log);
```

#### Login

```js
fetch(`${API_URL}/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username,
    password
  })
})
  .then(r => r.json())
  .catch(console.log);
```

## see also

- [maraudes-app](https://github.com/socialgouv/maraudes-app)
- [original hasura-boilerplate](https://github.com/kwiss/hasura-boilerplate)
