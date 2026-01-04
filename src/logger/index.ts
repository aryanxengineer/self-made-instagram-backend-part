import type { Logger } from "winston";
import { devLogger } from "./dev.logger.js";
import { prodLogger } from "./prod.logger.js";
import { stagingLogger } from "./stag.lopper.js";
import { testLogger } from "./test.logger.js";

const loggerByEnv = {
  development: devLogger,
  production: prodLogger,
  staging: stagingLogger,
  test: testLogger,
} as const;

const env: string = process.env.NODE_ENV ?? "development";

export const logger: Logger =
  loggerByEnv[env as keyof typeof loggerByEnv] ?? devLogger;
