import { Router } from 'express';
import LoginController from '../controllers/LoginController.js';
import PersonController from '../controllers/PersonController.js';

/**
 * @swagger
 * components:
 *  schemas:
 *   Person:
 *    type: object
 *    properties:
 *     id:
 *      type: integer
 *      description: The auto-generated id of the person
 *     card:
 *      type: string
 *      description: The card of the person
 *     name:
 *      type: string
 *      description: The name of the person
 *     lastName:
 *      type: string
 *      description: The last name of the person
 *     email:
 *      type: string
 *      description: The email of the person
 *    required:
 *     - card
 *     - name 
 *     - lastName
 *     - email
 *    example:
 *     id: 1
 *     card: 123456789
 *     name: John
 *     lastName: Doe
 *     email: johndoe@examp.com
 */

const router = Router();

/**
 * @swagger
 * /api/persons:
 *  get:
 *   summary: Returns the list of all the persons
 *   security:
 *    - bearerAuth: []
 *   tags: [Person]
 *   responses:
 *    200:
 *     description: The list of the persons
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        $ref: '#/components/schemas/Person'
 */
router.get('/', LoginController.verifyToken, PersonController.getAll);

/**
 * @swagger
 * /api/persons/{id}:
 *  get:
 *   summary: Get the person by id
 *   security:
 *    - bearerAuth: []
 *   tags: [Person]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The person id
 *      schema:
 *       type: integer
 *   schema:
 *    type: integer
 *    required: true
 *    description: The person id
 *   responses:
 *    200:
 *     description: The person
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/Person'
 */
router.get('/:id', LoginController.verifyToken, PersonController.get);

/**
 * @swagger
 * /api/persons:
 *  post:
 *   summary: Create a new person
 *   security:
 *    - bearerAuth: []
 *   tags: [Person]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object 
 *       $ref: '#/components/schemas/Person'
 *   responses:
 *    200:
 *     description: The person
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        $ref: '#/components/schemas/Person'
 */
router.post('/', LoginController.verifyToken, PersonController.create);

/**
 * @swagger
 * /api/persons/{id}:
 *  put:
 *   summary: Update the person by id
 *   security:
 *    - bearerAuth: []
 *   tags: [Person]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The person id
 *      schema:
 *       type: integer
 *   schema:
 *    type: integer
 *    required: true
 *    description: The person id
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object 
 *       $ref: '#/components/schemas/Person'
 *   responses:
 *    200:
 *     description: The person
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        $ref: '#/components/schemas/Person'
 */
router.put('/:id', LoginController.verifyToken, PersonController.update);

/**
 * @swagger
 * /api/persons/{id}:
 *  delete:
 *   summary: Delete the person by id
 *   security:
 *    - bearerAuth: []
 *   tags: [Person]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The person id
 *      schema:
 *       type: integer
 *   schema:
 *    type: integer
 *    required: true
 *    description: The person id
 *   responses:
 *    200:
 *     description: The deleted person
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/Person'
 */
router.delete('/:id', LoginController.verifyToken, PersonController.remove);

/**
 * @swagger
 * /api/persons/{id}/getAllLaptops/:
 *  get:
 *   summary: Returns the list of all the laptops
 *   security:
 *    - bearerAuth: []
 *   tags: [Person]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The person id
 *      schema:
 *       type: integer
 *   responses:
 *    200:
 *     description: The list of the laptops
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        $ref: '#/components/schemas/Laptop'
 */
router.get('/:id/getAllLaptops/', LoginController.verifyToken, PersonController.getAllLaptops);

/**
 * @swagger
 * /api/persons/{id}/assignLaptop/:
 *  post:
 *   summary: Return the laptop assigned to the person
 *   security:
 *    - bearerAuth: []
 *   tags: [Person]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The person id
 *      schema:
 *       type: integer
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object 
 *       parameters:
 *        laptopId:
 *         type: integer
 *         required: true
 *         description: The laptop id
 *       example:
 *        laptopId: 1
 *   responses:
 *    200:
 *     description: The laptop assigned to the person
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/Laptop'
 */
router.post('/:id/assignLaptop', LoginController.verifyToken, PersonController.assignLaptop);

/**
 * @swagger
 * /api/persons/{id}/unassignLaptop/:
 *  post:
 *   summary: Return the laptop unassigned to the person
 *   security:
 *    - bearerAuth: []
 *   tags: [Person]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The person id
 *      schema:
 *       type: integer
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object 
 *       parameters:
 *        laptopId:
 *         type: integer
 *         required: true
 *         description: The laptop id
 *       example:
 *        laptopId: 1
 *   responses:
 *    200:
 *     description: The laptop unassigned to the person
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/Laptop'
 */
router.post('/:id/unassignLaptop', LoginController.verifyToken, PersonController.unassignLaptop);

export default router;
