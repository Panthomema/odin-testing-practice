import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node', // or 'jsdom' if you're testing browser code
};

export default config;
