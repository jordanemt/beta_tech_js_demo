
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

const getAllLaptops = async (personId) => {
    const data = await prisma.personHasLaptop.findMany({
        where: {
            AND: {
                personId: personId,
                unassignedAt: null,
            },
        },
        include: {
            laptop: true,
        },
    });
    await prisma.$disconnect();
    return data;
}

const assignLaptop = async (personId, laptopId) => {
    const data = await prisma.personHasLaptop.create({
        data: {
            personId: personId,
            laptopId: laptopId,
        },
    });

    await prisma.$disconnect();
    return data;
}

const unassignLaptop = async (personId, laptopId) => {
    const data = await prisma.personHasLaptop.update({
        where: {
            laptop_person_unique: {
                laptopId: laptopId,
                personId: personId,
            },
        },
        data: {
            unassignedAt: new Date(),
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
    getAllLaptops,
    assignLaptop,
    unassignLaptop,
};
