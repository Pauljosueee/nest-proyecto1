import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const post1 = await prisma.listaexcusas.upsert({
        where: { name: 'I was sick' },
        update: {},
        create: {
            name: "I was sick",
            description: "Content of Post 1",
            
    }  
});

    const post2 = await prisma.listaexcusas.upsert({
        where: { name: 'ate my dog' },
        update: {},
        create: {
            name: "ate my dog",
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
