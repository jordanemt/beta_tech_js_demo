import PersonService from "../services/PersonService.js";

const ping = (req, res) => {
    res.send('pong');
}

const getAll = async (req, res) => {
    const data = await PersonService.getAll();
    res.send(data);
}

const get = async (req, res) => {
    const data = await PersonService.get(parseInt(req.params.id));
    res.send(data);
}

const create = async (req, res) => {
    const data = await PersonService.create(req.body.card, req.body.name, req.body.lastName, req.body.email);
    res.send(data);
}

const update = async (req, res) => {
    const data = await PersonService.update(parseInt(req.params.id), req.body.card, req.body.name, req.body.lastName, req.body.email);
    res.send(data);
}

const remove = async (req, res) => {
    const data = await PersonService.remove(parseInt(req.params.id));
    res.send(data);
}

export default {
    ping,
    getAll,
    get,
    create,
    update,
    remove,
};
