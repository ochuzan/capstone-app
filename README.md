Christina Loiacono, Deborah Campos, Milton Clark, Oliver Chuzan <br>
ERD
<img src="./images/erd.png" alt="event-relational-database"/>



# Backend Routes

Our backend database using [Postgres](https://www.postgresql.org/) has three tables: `users`, `resources`, and `favorites`.  These are the routes for each table:

## Users Table

| Resource | Method | Route       | Description                           |
|----------|--------|-------------|---------------------------------------|
| users    | POST   | /users      | Create a `user`.                        |
| users    | GET    | /users/{id} | Return one `users` by their id of {id}. |
| users    | PUT    | /users/{id} | Update one `users` by their id of {id}. |
| users    | DELETE | /users/{id} | Delete one `users` by their id of {id}. |

## Resources Table

| Resource  | Method | Route                      | Description                                                                  |
|-----------|--------|----------------------------|------------------------------------------------------------------------------|
| resources | GET    | /users/{id}/resources      | Return all `resources` associated with the `users` with and id of {id}.          |
| resources | GET    | /users/{id}/resources/{id} | Return details of one `resource` associated with the `users` with an id of {id}. |
| resources | POST   | /users/{id}/resources      | Creates a new `resource` associated with the `user` with an id of {id}.          |
| resources | PUT    | /users/{id}/resources/{id} | Updates one `resource` associated with the `users` with an id of {id}.           |
| resources | DELETE | /users/{id}/resources/{id} | Deletes one `resource` associated with the `users` with an id of {id}.           |

## Favorites Table

| Resource  | Method | Route                      | Description                                                                      |
|-----------|--------|----------------------------|----------------------------------------------------------------------------------|
| favorites | GET    | /users/{id}/favorites      | Return all `favorites` associated with the `users` with and id of {id}.          |
| favorites | GET    | /users/{id}/favorites/{id} | Return details of one `favorite` associated with the `users` with an id of {id}. |
| favorites | POST   | /users/{id}/favorites      | Creates a new `favorite` associated with the `user` with an id of {id}.          |
| favorites | DELETE | /users/{id}/favorites/{id} | Deletes one `favorite` associated with the `users` with an id of {id}.           |