#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";
import * as fs from "fs";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

/* ****************************************************************************************************************** *
 * Config
 * ****************************************************************************************************************** */

// This regex now targets headers like `## v0.0.9` and ensures to capture versions formatted as `vX.X.X`
const headerMatchRegex = /^##[^\S\r\n]+v(\d+\.\d+\.\d+)/gm;

/* ****************************************************************************************************************** *
 * Script
 * ****************************************************************************************************************** */
const CHANGELOG_PATH = path.resolve(
  __dirname,
  "../../packages/tailwind-classes-authority/CHANGELOG.md"
);

function extractLatestReleaseLog() {
  if (!fs.existsSync(CHANGELOG_PATH))
    throw new Error(`Cannot find file: ${CHANGELOG_PATH}`);

  const fileData = fs.readFileSync(CHANGELOG_PATH, "utf-8");

  headerMatchRegex.lastIndex = 0; // Reset regex position

  const startMatch = headerMatchRegex.exec(fileData);
  if (!startMatch) throw new Error("No version headers found in changelog!");

  // Try to find the next version after the first to determine the end of the latest version's section
  const endMatch = headerMatchRegex.exec(fileData);
  const endIndex = endMatch ? endMatch.index : fileData.length;

  return fileData
    .slice(startMatch.index, endIndex) // Correctly slice from the start of the first match to the start of the second match (or end of file)
    .replace(/((?:\r?\n){2})(?:\r?\n)+/g, "$1") // Normalize line breaks
    .trim();
}

function generateCommitLogSinceLastTag() {
  const latestTag = execSync('git describe --tags --abbrev=0 HEAD^').toString().trim();
  const newTag = execSync('git describe --tags --abbrev=0').toString().trim();

  // Generate the changelog between these two tags
  const commitLog = execSync(`git log ${latestTag}..${newTag} --pretty=format:"* %s (%h)"`).toString().trim();
  
  if (!commitLog) throw new Error(`No commits found between tags ${latestTag} and ${newTag}`);

  return commitLog;
}

// Combine both changelog and commit log for comprehensive release notes
const releaseLog = extractLatestReleaseLog();
const commitLog = generateCommitLogSinceLastTag();

const combinedLog = `${releaseLog}\n\n### Commits since last release:\n${commitLog}`;

process.stdout.write(combinedLog);