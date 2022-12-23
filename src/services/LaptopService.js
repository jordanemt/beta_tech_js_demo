
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getAll = async () => {
    const data = await prisma.laptop.findMany();
    await prisma.$disconnect();
    return data;
}

const get = async (id) => {
    const data = await prisma.laptop.findUnique({ where: { id: id } });
    await prisma.$disconnect();
    return data;
}

const create = async (serial) => {
    const data = await prisma.laptop.create({
        data: {
            serial: serial,
        },
    });
    await prisma.$disconnect();
    return data;
}

const update = async (id, serial) => {
    const data = await prisma.laptop.update({
        where: {
            id: id,
        },
        data: {
            serial: serial,
        },
    });
    await prisma.$disconnect();
    return data;
}

const remove = async (id) => {
    const data = await prisma.laptop.delete({
        where: {
            id: id,
        },
    });
    await prisma.$disconnect();
    return data;
}

export default {
    getAll,
    get,
    create,
    update,
    remove,
};
