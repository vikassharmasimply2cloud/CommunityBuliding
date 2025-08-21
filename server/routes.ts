import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Search communities (must come before the :id route)
  app.get("/api/communities/search", async (req, res) => {
    try {
      const querySchema = z.object({
        q: z.string().optional(),
        category: z.string().optional(),
        location: z.string().optional(),
      });

      const { q, category, location } = querySchema.parse(req.query);
      const communities = await storage.searchCommunities(q || "", category, location);
      
      res.json(communities);
    } catch (error) {
      res.status(500).json({ message: "Failed to search communities" });
    }
  });

  // Get all communities
  app.get("/api/communities", async (req, res) => {
    try {
      const communities = await storage.getCommunities();
      res.json(communities);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch communities" });
    }
  });

  // Get community by ID (must come after search route)
  app.get("/api/communities/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const community = await storage.getCommunity(id);
      
      if (!community) {
        return res.status(404).json({ message: "Community not found" });
      }
      
      res.json(community);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch community" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
