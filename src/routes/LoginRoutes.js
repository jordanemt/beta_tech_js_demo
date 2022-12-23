import { Router } from 'express';
import LoginController from '../controllers/LoginController.js';



const router = Router();

/**
 * @swagger
 * /api/login:
 *  post:
 *   summary: Login 
 *   tags: [Login]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object 
 *       properties:
 *        username:
 *         type: string
 *         description: The username
 *        password:
 *         type: string
 *         description: The password
 *   responses:
 *    200:
 *     description: Return the token
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        properties:
 *         token:
 *          type: string
 *          description: The token
 */
router.post('/', LoginController.login);

export default router;