import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { getAllTutorials } from "@/lib/content";
import { TutorialListingClient } from "./listing-client";

export const metadata: Metadata = {
  title: "Robotics & AI Tutorials — Hands-On Guides for Engineers & Developers",
  description:
    "Step-by-step robotics and AI tutorials with working code. Learn ROS 2, OpenCV, PyTorch, YOLO, robot kinematics, and more — from beginner to advanced.",
};

export default function TutorialsPage() {
  const allTutorials = getAllTutorials();

  return (
    <>
      <section className="bg-surface-900 pb-12 pt-12">
        <Container>
          <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            Tutorials
          </h1>
          <p className="mt-2 text-text-secondary">
            Hands-on guides from beginner to advanced
          </p>
        </Container>
      </section>

      <section className="bg-reading py-12">
        <Container>
          <Suspense>
            <TutorialListingClient
              tutorials={allTutorials.map((t) => ({
                slug: t.slug,
                slugAsParams: t.slugAsParams,
                title: t.title,
                description: t.description,
                date: t.date,
                readingTime: t.readingTime,
                tags: t.tags,
                difficulty: t.difficulty,
                estimatedTime: t.estimatedTime,
                techStack: t.techStack,
                image: t.image,
              }))}
            />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
