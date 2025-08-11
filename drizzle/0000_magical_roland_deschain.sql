CREATE TABLE `sessionDetails` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`evaluatedAt` text NOT NULL,
	`weightKg` integer,
	`bodyConditionScore` integer
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`name` text,
	`createdAt` text NOT NULL,
	`syncedAt` text
);
