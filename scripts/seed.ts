import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Amharic", // Amharic
        imageSrc: "/eth.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Amharic
        title: "Unit 1", // Unit 1
        description: "Learn the Amharic Alphabet", // Learn the basics of Amharic
        order: 1,
      }
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1 
        order: 1,
        title: "The First Characters", // Two-legged letters
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Two-legged letters
        type: "SELECT",
        order: 1,
        question: '"Select the one with the HA sound?', // What does the letter "ሀ" look like?
      },
      {
        id: 2,
        lessonId: 1, // Two-legged letters
        type: "ASSIST",
        order: 2,
        question: 'HA', // "ሀ"
      },
      {
        id: 3,
        lessonId: 1, // Two-legged letters
        type: "SELECT",
        order: 3,
        question: '"Select the one with the LE sound', // What does the letter "ለ" look like?
      },
      {
        id: 4,
        lessonId: 1, // Two-legged letters
        type: "ASSIST",
        order: 4,
        question: 'LE', // "ለ"
      },
      {
        id: 5,
        lessonId: 1, // Two-legged letters
        type: "SELECT",
        order: 5,
        question: '"Select the one with the ME sound', // What does the letter "መ" look like?
      },
      {
        id: 6,
        lessonId: 1, // Two-legged letters
        type: "ASSIST",
        order: 6,
        question: 'ME', // "መ"
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // What does the letter "ሀ" look like?
        imageSrc: "/letter_ha.svg", // Replace with image path for "ሀ"
        correct: true,
        text: "ሀ", // "ሀ"
        audioSrc: "/am_ha.mp3", // Replace with audio path for "ሀ"
      },
      {
        challengeId: 1,
        imageSrc: "/letter_la.svg", // Replace with image path for "ለ"
        correct: false,
        text: "ለ", // "ለ"
        audioSrc: "/am_la.mp3", // Replace with audio path for "ለ"
      },
      {
        challengeId: 1,
        imageSrc: "/letter_ma.svg", // Replace with image path for "መ"
        correct: false,
        text: "መ", // "መ"
        audioSrc: "/am_ma.mp3", // Replace with audio path for "መ"
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, // "ሀ"
        correct: true,
        text: "ሀ", // "ሀ"
        audioSrc: "/am_ha.mp3", // Replace with audio path for "ሀ"
      },
      {
        challengeId: 2,
        correct: false,
        text: "ለ", // "ለ"
        audioSrc: "/am_la.mp3", // Replace with audio path for "ለ"
      },
      {
        challengeId: 2,
        correct: false,
        text: "መ", // "መ"
        audioSrc: "/am_ma.mp3", // Replace with audio path for "መ"
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, // What does the letter "ለ" look like?
        imageSrc: "/letter_la.svg", // Replace with image path for "ለ"
        correct: true,
        text: "ለ", // "ለ"
        audioSrc: "/am_la.mp3", // Replace with audio path for "ለ"
      },
      {
        challengeId: 3,
        imageSrc: "/letter_ha.svg", // Replace with image path for "ሀ"
        correct: false,
        text: "ሀ", // "ሀ"
        audioSrc: "/am_ha.mp3", // Replace with audio path for "ሀ"
      },
      {
        challengeId: 3,
        imageSrc: "/letter_ma.svg", // Replace with image path for "መ"
        correct: false,
        text: "መ", // "መ"
        audioSrc: "/am_ma.mp3", // Replace with audio path for "መ"
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 4, // "ለ"
        correct: true,
        text: "ለ", // "ለ"
        audioSrc: "/am_la.mp3", // Replace with audio path for "ለ"
      },
      {
        challengeId: 4,
        correct: false,
        text: "ሀ", // "ሀ"
        audioSrc: "/am_ha.mp3", // Replace with audio path for "ሀ"
      },
      {
        challengeId: 4,
        correct: false,
        text: "መ", // "መ"
        audioSrc: "/am_ma.mp3", // Replace with audio path for "መ"
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 5, // What does the letter "መ" look like?
        imageSrc: "/letter_ma.svg", // Replace with image path for "መ"
        correct: true,
        text: "መ", // "መ"
        audioSrc: "/am_ma.mp3", // Replace with audio path for "መ"
      },
      {
        challengeId: 5,
        imageSrc: "/letter_ha.svg", // Replace with image path for "ሀ"
        correct: false,
        text: "ሀ", // "ሀ"
        audioSrc: "/am_ha.mp3", // Replace with audio path for "ሀ"
      },
      {
        challengeId: 5,
        imageSrc: "/letter_la.svg", // Replace with image path for "ለ"
        correct: false,
        text: "ለ", // "ለ"
        audioSrc: "/am_la.mp3", // Replace with audio path for "ለ"
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 6, // "መ"
        correct: true,
        text: "መ", // "መ"
        audioSrc: "/am_ma.mp3", // Replace with audio path for "መ"
      },
      {
        challengeId: 6,
        correct: false,
        text: "ሀ", // "ሀ"
        audioSrc: "/am_ha.mp3", // Replace with audio path for "ሀ"
      },
      {
        challengeId: 6,
        correct: false,
        text: "ለ", // "ለ"
        audioSrc: "/am_la.mp3", // Replace with audio path for "ለ"
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();