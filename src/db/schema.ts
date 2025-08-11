import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// export const breeds = sqliteTable("breeds", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   name: text("name").notNull(),
// });

// export const animalCategories = sqliteTable("animalCategories", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   name: text("name").notNull(),
// });

// export const producers = sqliteTable("producers", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   name: text("name").notNull(),
// });

// export const medications = sqliteTable("medications", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   name: text("name").notNull(),
// });

// export const tropas = sqliteTable("tropas", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   name: text("name").notNull(),
// });

export const sessions = sqliteTable("sessions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  uuid: text("uuid").notNull(),
  name: text("name"),
  createdAt: text("createdAt").notNull(),
  syncedAt: text("syncedAt"),
});

export const sessionDetails = sqliteTable("sessionDetails", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  evaluatedAt: text("evaluatedAt").notNull(),
  weightKg: integer("weightKg"),
  bodyConditionScore: integer("bodyConditionScore"),
});

export type Session = typeof sessions.$inferSelect;
export type SessionDetail = typeof sessionDetails.$inferSelect;
// export type AnimalCategory = typeof animalCategories.$inferSelect;
// export type Breed = typeof breeds.$inferSelect;
// export type Tropa = typeof tropas.$inferSelect;
// export type Medication = typeof medications.$inferSelect;
// export type Producer = typeof producers.$inferSelect;
