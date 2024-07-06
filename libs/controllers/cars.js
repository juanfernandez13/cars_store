import { PrismaClient } from "@prisma/client";
import { guardPrisma } from "../utils/dataHandlers";

const prisma = new PrismaClient();

export const getAllCars = guardPrisma(async () => {
  const cars = await prisma.car.findMany();
  return cars;
});

export const getCarById = guardPrisma(async (id) => {
  const cars = await prisma.car.findUnique({ where: { id: parseInt(id) } });
  return cars;
});

export const createCar = guardPrisma(async (carData) => {
  const cars = await prisma.car.create({
    data: {
      price: carData.price,
      automaker: carData.automaker,
      model: carData.model,
      year: carData.year,
      color: carData.color,
      city: carData.city,
      km: carData.km,
      plate: carData.plate,
      images: carData.images,
    },
  });
  return cars;
});

export const updateCarById = guardPrisma(async (carData, id) => {
  const cars = await prisma.car.update(carData);
  return cars;
});

export const deleteCarById = guardPrisma(async (id) => {
  await prisma.car.delete({ where: { id: parseInt(id) } });
});
