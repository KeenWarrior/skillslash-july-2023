## On you OS

1. Download and Install Postgres from https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
2. From terminal run `createdb notesapp` to create a new db notesapp. notesapp is placeholder here.
3. Run `psql notesapp` to connect with notesapp db.
4. You can run `\dt` to show tables.
5. You can run `\du` to show users.
6. `createuser username` to create user with username.
7. ALTER ROLE "username" WITH LOGIN CREATEROLE CREATEDB;
8. ALTER USER "username" WITH PASSWORD 'password';
6. `\q` to quit.

## In your VS Code
1. Install sqltools from https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools
2. Install postgres deiver https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-pg
3. Add new connection in sqltools
4. Select Postgres
5. Fill the form
 - Connection name : [Anything]
 - Connect using : Server and Port
 - Server Address : localhost
 - Port : 5432
 - Database : notesapp
 - Username : "We will learn how to create this"
 - Use password : Plaintext
 - Password : "We will learn how to create this"






