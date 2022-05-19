DROP DATABASE IF EXISTS crypto_users;
CREATE DATABASE crypto_users;

\c crypto_users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT,
    contact_email TEXT,
    active BOOLEAN
);

DROP TABLE IF EXISTS resources;
 
CREATE TABLE resources(
    id SERIAL PRIMARY KEY,
    subject TEXT NOT NULL,
    description TEXT,
    type TEXT,
    url TEXT,
    articles_id TEXT,
    is_favorite BOOLEAN,
    users_id INTEGER REFERENCES users(id)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites(
  id SERIAL PRIMARY KEY,
  favorited_date TEXT,
  resources_id INTEGER REFERENCES resources(id),
  users_id INTEGER REFERENCES users(id)
  ON DELETE CASCADE
);