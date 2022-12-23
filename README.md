# Beta Tech JS Demo
## Beta Tech Postgresql Docker
Follow the Beta Test repo readme https://github.com/Beta-Tech-Costa-Rica/BetaTest/blob/PROD/docker/README.md
## JS Demo with Prisma and Swagger
Create .env file. Use the next one as example working with Beta Test Demo.
```
DATABASE_URL="postgresql://esalas:0ewj0Ra6zYWe@localhost:5432/postgres?schema=public"
PORT=3000
SECRET_KEY=DREotN4U4VrZfp
```
Run ```npm install```.

Migrate the database ```npx prisma migrate dev --name init```.

Up the server with (nodemon) ```npm start```.
