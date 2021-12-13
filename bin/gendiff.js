#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.3', '-V, --version', 'output the version number');

program.parse();
