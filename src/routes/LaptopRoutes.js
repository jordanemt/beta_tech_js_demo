import { Router } from 'express';
import LoginController from '../controllers/LoginController.js';
import LaptopController from '../controllers/LaptopController.js';

/**
 * @swagger
 * components:
 *  schemas:
 *   Laptop:
 *    type: object
 *    properties:
 *     id:
 *      type: integer
 *      description: The auto-generated id of the laptop
 *     serial:
 *      type: string
 *      description: The serial of the laptop
 *    required:
 *     - serial
 *    example:
 *     id: 1
 *     serial: L123
 */

const router = Router();

/**
 * @swagger
 * /api/laptops:
 *  get:
 *   summary: Returns the list of all the laptops
 *   security:
 *    - bearerAuth: []
 *   tags: [Laptop]
 *   responses:
 *    200:
 *     description: The list of the laptops
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        $ref: '#/components/schemas/Laptop'
 */
router.get('/', LoginController.verifyToken, LaptopController.getAll);

/**
 * @swagger
 * /api/laptops/{id}:
 *  get:
 *   summary: Get the laptop by id
 *   security:
 *    - bearerAuth: []
 *   tags: [Laptop]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The laptop id
 *      schema:
 *       type: integer
 *   schema:
 *    type: integer
 *    required: true
 *    description: The laptop id
 *   responses:
 *    200:
 *     description: The laptop
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/Laptop'
 */
router.get('/:id', LoginController.verifyToken, LaptopController.get);

/**
 * @swagger
 * /api/laptops:
 *  post:
 *   summary: Create a new laptop
 *   security:
 *    - bearerAuth: []
 *   tags: [Laptop]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object 
 *       $ref: '#/components/schemas/Laptop'
 *   responses:
 *    200:
 *     description: The laptop
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        $ref: '#/components/schemas/Laptop'
 */
router.post('/', LoginController.verifyToken, LaptopController.create);

/**
 * @swagger
 * /api/laptops/{id}:
 *  put:
 *   summary: Update the laptop by id
 *   security:
 *    - bearerAuth: []
 *   tags: [Laptop]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The laptop id
 *      schema:
 *       type: integer
 *   schema:
 *    type: integer
 *    required: true
 *    description: The laptop id
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object 
 *       $ref: '#/components/schemas/Laptop'
 *   responses:
 *    200:
 *     description: The laptop
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        $ref: '#/components/schemas/Laptop'
 */
router.put('/:id', LoginController.verifyToken, LaptopController.update);

/**
 * @swagger
 * /api/laptops/{id}:
 *  delete:
 *   summary: Delete the laptop by id
 *   security:
 *    - bearerAuth: []
 *   tags: [Laptop]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The laptop id
 *      schema:
 *       type: integer
 *   schema:
 *    type: integer
 *    required: true
 *    description: The laptop id
 *   responses:
 *    200:
 *     description: The deleted laptop
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/Laptop'
 */
router.delete('/:id', LoginController.verifyToken, LaptopController.remove);

export default router;
