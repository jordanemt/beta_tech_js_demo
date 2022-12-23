import * as dotenv from 'dotenv'
import express from 'express';
import LoginRoutes from './routes/LoginRoutes.js';
import PersonRoutes from './routes/PersonRoutes.js';
import LaptopRoutes from './routes/LaptopRoutes.js';

//swagger
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Node Prisma',
            version: '1.0.0',
            description: 'Beta Tech Demo',
        },
        servers: [
            {
                url: 'http://localhost:3000/',
                description: 'Local server'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                },
            },
        },
    },
    apis: ['src/routes/*.js'],
};

dotenv.config()
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/login', LoginRoutes);
app.use('/api/persons', PersonRoutes);
app.use('/api/laptops', LaptopRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerOptions)));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
