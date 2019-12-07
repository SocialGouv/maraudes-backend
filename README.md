# hasura boilerplate app

hasura boilerplate app with koa knex objection passport jwt

```
# Clone the repo
git clone https://github.com/kwiss/hasura-node-starter

# Change directory
cd hasura-node-starter

# Install NPM dependencies
yarn

# Create your own .env file with given .env.sample

# generate the RSA keys
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout > public.pem

# start docker with postgres and hasura

docker-compose up

# Apply migrations
# (Note) this step creates tables "users", "roles" and "user_roles" in the database
yarn workspace @hnk/api db:migrate:latest

# Then simply start your app
yarn dev

```

Now point your browser to http://127.0.0.1:8080 to access the Hasura UI.

## Usage

### SignUp

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

### Login

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
