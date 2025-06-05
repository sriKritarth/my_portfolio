import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Here you would integrate with an email service like nodemailer
      // For now, we'll just log the message
      console.log("New contact message:", message);
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Validation failed",
          details: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          error: "Failed to send message" 
        });
      }
    }
  });

  // Get contact messages (for potential admin panel)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  // Serve resume download endpoint
  app.get("/api/resume", (req, res) => {
    // In a real implementation, you would serve an actual PDF file
    res.json({ 
      success: false, 
      error: "Resume file not configured. Please add your resume file to the server." 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
