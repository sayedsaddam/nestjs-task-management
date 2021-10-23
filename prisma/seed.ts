import { PrismaClient } from ".prisma/client";
const data = Array(
    {project: 1, name: 'Solar Systems'},
    {project: 1, name: 'HVAC Systems'},
    {project: 1, name: 'Fashion and disability ramps'},
    {project: 1, name: 'Three level basement parking'},
    {project: 1, name: 'Rooftop restaurant'},
    {project: 1, name: 'Food court'},
    {project: 1, name: 'Gold souk'},
    {project: 1, name: 'Offices'},
    {project: 1, name: 'Fitness center'},
    {project: 1, name: 'Escaltors'},
    {project: 1, name: 'Fashion floors'},
    {project: 1, name: 'Commercial floor'},
    {project: 1, name: 'Mosque'}
);
const prisma = new PrismaClient();
async function main() {
    await prisma.amenities.createMany({
        data,
    });
}

main()
.catch((e) => {
    console.log(e);
    process.exit(1);
})
.finally(() => {
    prisma.$disconnect();
});