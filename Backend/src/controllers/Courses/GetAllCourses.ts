import type { Request, Response } from "express";
import { prisma } from "../../lib/DB.js";

export const getCourses = async (_req: Request, res: Response) => {
    try {
      const courses = await prisma.course.findMany({
        where: {
          isPublished: true,
        },
        include: {
          teacher: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
  
      return res.status(200).json({
        success: true,
        data: courses,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch courses",
      });
    }
  };