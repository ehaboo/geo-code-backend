import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

const logDir = path.join(__dirname, "..", "assets", "logs");

async function logFileExists() {
  if (!fs.existsSync(logDir)) {
    try {
      await fsPromises.mkdir(logDir);
    } catch (err) {
      console.error("Error creating log", err);
    }
  }
}

const errorFile = path.join(logDir, "errors.log");
const activityFile = path.join(logDir, "activity.log");

async function errorsLogger(msg: string, err: any): Promise<void> {
  await logFileExists();

  const now = new Date();
  let message = now.toLocaleString() + "\n";
  message += msg + "\n";
  if (typeof err === "string") message += err + "\n";
  if (err?.stack) message += `Stack: ${err.stack} \n`;
  message += "----------------------\n";

  try {
    await fsPromises.appendFile(errorFile, message);
  } catch (err: any) {
    console.error("Failed to write to Error log:", err);
  }
}

async function activityLogger(msg: string): Promise<void> {
  await logFileExists();

  const now = new Date();
  let message = now.toLocaleString() + "\n";
  message += msg + "\n";
  message += "----------------------\n";

  try {
    await fsPromises.appendFile(activityFile, message);
  } catch (err: any) {
    console.error("Failed to write to activity log:", err);
  }
}

export default {
  activityLogger,
  errorsLogger,
};
