import type { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth.js";
import { toNodeHandler, fromNodeHeaders } from "better-auth/node";

const authentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session = await auth.api.getSession({
          headers: fromNodeHeaders(req.headers),
        });
    
        if (!session) {
          return res.status(401).json({
            success: false,
            message: "Unauthorized",
          });
        }
    
        req.user = session.user;
    
        next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};