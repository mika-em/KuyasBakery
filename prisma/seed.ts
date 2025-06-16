import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Croissant",
        price: 4.5,
        description: "Flaky and golden",
        category: "bread",
        image: "",
      },
      {
        name: "Black Sesame Cream Puff",
        price: 6.0,
        description:
          "Cookie topped and filled with rich, house-made black sesame custard",
        category: "cream puffs",
        image: "",
      },
      {
        name: "Guava Cronut",
        price: 6.0,
        description: "Buttery, flaky donut with homemade guava glaze",
        category: "cronuts",
        image: "",
      },
    ],
  });
  console.log("seeded the default products!");
}

main()
  .catch((er) => {
    console.error(er);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
