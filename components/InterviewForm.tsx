"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormField from "./FormField";

const interviewFormSchema = z.object({
  role: z.string().min(3, "Role must be at least 3 characters"),
  level: z.enum(["Junior", "Mid", "Senior"]),
  type: z.enum(["Technical", "Behavioral", "Mixed"]),
  techstack: z.string().min(3, "Please specify at least one technology"),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 3 && Number(val) <= 10, {
    message: "Amount must be between 3 and 10",
  }),
});

const InterviewForm = ({ userName, userId }: { userName: string; userId: string }) => {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<z.infer<typeof interviewFormSchema>>({
    resolver: zodResolver(interviewFormSchema),
    defaultValues: {
      role: "",
      level: "Mid",
      type: "Mixed",
      techstack: "",
      amount: "5",
    },
  });

  const onSubmit = async (data: z.infer<typeof interviewFormSchema>) => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/vapi/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: data.type,
          role: data.role,
          level: data.level,
          techstack: data.techstack,
          amount: Number(data.amount),
          userid: userId,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Interview created successfully!");
        router.push("/");
      } else {
        toast.error("Failed to create interview. Please try again.");
      }
    } catch (error) {
      console.error("Error creating interview:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="interview-form-container">
      <div className="form-header">
        <h2 className="form-title">Create Your Mock Interview</h2>
        <p className="form-subtitle">Configure your AI-powered interview session</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="cyber-form">
          <FormField
            control={form.control}
            name="role"
            label="Job Role"
            placeholder="e.g., Frontend Developer, Data Scientist"
            type="text"
          />

          <div className="form-grid">
            <div className="form-group">
              <label className="label">Experience Level</label>
              <select
                {...form.register("level")}
                className="cyber-select"
              >
                <option value="Junior">Junior</option>
                <option value="Mid">Mid-Level</option>
                <option value="Senior">Senior</option>
              </select>
            </div>

            <div className="form-group">
              <label className="label">Interview Type</label>
              <select
                {...form.register("type")}
                className="cyber-select"
              >
                <option value="Technical">Technical</option>
                <option value="Behavioral">Behavioral</option>
                <option value="Mixed">Mixed</option>
              </select>
            </div>
          </div>

          <FormField
            control={form.control}
            name="techstack"
            label="Tech Stack"
            placeholder="e.g., React, TypeScript, Node.js (comma-separated)"
            type="text"
          />

          <FormField
            control={form.control}
            name="amount"
            label="Number of Questions"
            placeholder="Between 3-10"
            type="text"
          />

          <Button
            className="cyber-submit-btn"
            type="submit"
            disabled={isGenerating}
          >
            <div className="btn-bg-auth"></div>
            <span className="btn-text-auth">
              {isGenerating ? "Generating Interview..." : "Generate Interview"}
            </span>
            <div className="btn-glow-auth"></div>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InterviewForm;
