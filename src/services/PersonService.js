
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getAll = async () => {
    const data = await prisma.person.findMany();
    await prisma.$disconnect();
    return data;
}

const get = async (id) => {
    const data = await prisma.person.findUnique({ where: { id: id } });
    await prisma.$disconnect();
    return data;
}

const create = async (card, name, lastName, email) => {
    const data = await prisma.person.create({
        data: {
            card: card,
            name: name,
            lastName: lastName,
            email: email,
        },
    });
    await prisma.$disconnect();
    return data;
}

const update = async (id, card, name, lastName, email) => {
    const data = await prisma.person.update({
        where: {
            id: id,
        },
        data: {
            card: card,
            name: name,
            lastName: lastName,
            email: email,
        },
    });
    await prisma.$disconnect();
    return data;
}

const remove = async (id) => {
    const data = await prisma.person.delete({
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
