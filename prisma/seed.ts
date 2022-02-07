import { PrismaClient } from "@prisma/client";
import { places } from "../data/places";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "test@gmail.com",
      role: "ADMIN",
    },
  });

  await prisma.place.createMany({
    data: places,
  });

  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
