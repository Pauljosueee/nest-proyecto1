import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const post1 = await prisma.listaexcusas.upsert({
        where: { name: 'Estuve enfermo' },
        update: {},
        create: {
            name: "Estuve enfermo",
            description: "Content of Post 1",
            
    }  
});

    const post2 = await prisma.listaexcusas.upsert({
        where: { name: 'se comio mi perro' },
        update: {},
        create: {
            name: "se comio mi perro",
            description: "Content of Post 2",
        }
    });
console.log({post1, post2});
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
