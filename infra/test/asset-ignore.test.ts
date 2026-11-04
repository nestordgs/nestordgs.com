import * as path from 'node:path';
import { IgnoreStrategy } from 'aws-cdk-lib';
import { expect, test } from 'vitest';

test('CDK asset exclusions preserve globstar and brace pattern behavior', () => {
  const root = path.resolve('test-assets');
  const strategy = IgnoreStrategy.glob(root, ['**/*.tmp', '**/{cache,generated}/**']);

  expect(strategy.ignores(path.join(root, 'nested', 'file.tmp'))).toBe(true);
  expect(strategy.ignores(path.join(root, 'cache', 'file.js'))).toBe(true);
  expect(strategy.ignores(path.join(root, 'nested', 'generated', 'file.js'))).toBe(true);
  expect(strategy.ignores(path.join(root, 'src', 'file.ts'))).toBe(false);
});
