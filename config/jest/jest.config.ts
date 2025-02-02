import * as path from 'path';

import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  rootDir: '../..',
  passWithNoTests: true,
  clearMocks: true,
  coverageProvider: 'v8',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>src'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg\\?svgr$': path.resolve(__dirname, 'MockSvg.tsx'),
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/config/jest/jest.setup.ts'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};

export default config;
