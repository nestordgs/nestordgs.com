import * as path from 'node:path';

const { loadNycConfig } = require('@istanbuljs/load-nyc-config');

test('Istanbul loads YAML coverage configuration with the upgraded parser', async () => {
  const config = await loadNycConfig({
    cwd: path.join(__dirname, 'fixtures'),
    nycrcPath: path.join(__dirname, 'fixtures', 'nyc.yaml'),
  });

  expect(config).toMatchObject({
    all: true,
    include: ['lib/**/*.ts'],
    exclude: ['test/**'],
    reporter: ['text', 'lcov'],
  });
});
