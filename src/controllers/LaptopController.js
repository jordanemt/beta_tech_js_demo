import LaptopService from "../services/LaptopService.js";

const ping = (req, res) => {
    res.send('pong');
}

const getAll = async (req, res) => {
    const data = await LaptopService.getAll();
    res.send(data);
}

const get = async (req, res) => {
    const data = await LaptopService.get(parseInt(req.params.id));
    res.send(data);
}

const create = async (req, res) => {
    const data = await LaptopService.create(req.body.serial);
    res.send(data);
}

const update = async (req, res) => {
    const data = await LaptopService.update(parseInt(req.params.id), req.body.serial);
    res.send(data);
}

const remove = async (req, res) => {
    const data = await LaptopService.remove(parseInt(req.params.id));
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
