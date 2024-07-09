import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";

export function guardPrisma(callback) {
  return async (...params) => {
    try {
      return await callback(...params);
    } catch (e) {
      if (e instanceof PrismaClientValidationError || e instanceof PrismaClientKnownRequestError) {
        return {
          error: {
            code: 400,
            meta: e.meta,
            message: e.message
          }
        }
      }
      return {
        error: {
          code: 500,
          message: "Server Error",
        }
      }
    }
  }
}