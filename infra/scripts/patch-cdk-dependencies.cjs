'use strict'

const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
// aws-cdk-lib bundles these packages, so npm overrides cannot replace its copies.
// Keep the bundled modules aligned with the patched root versions after install.
const dependencies = [
  { name: 'brace-expansion', minimumVersion: '5.0.12' },
  { name: 'fast-uri', minimumVersion: '3.1.8' }
]

function readPackageVersion (directory) {
  const packagePath = path.join(directory, 'package.json')
  return JSON.parse(fs.readFileSync(packagePath, 'utf8')).version
}

function isAtLeast (actual, minimum) {
  const actualParts = actual.split('.').map(Number)
  const minimumParts = minimum.split('.').map(Number)

  for (let i = 0; i < minimumParts.length; i++) {
    if ((actualParts[i] || 0) > minimumParts[i]) return true
    if ((actualParts[i] || 0) < minimumParts[i]) return false
  }

  return true
}

for (const { name, minimumVersion } of dependencies) {
  const source = path.join(root, 'node_modules', name)
  const target = path.join(root, 'node_modules', 'aws-cdk-lib', 'node_modules', name)

  if (!fs.existsSync(source) || !fs.existsSync(target)) continue

  const sourceVersion = readPackageVersion(source)
  if (!isAtLeast(sourceVersion, minimumVersion)) {
    throw new Error(`${name} ${sourceVersion} is below the required patched version ${minimumVersion}`)
  }

  fs.rmSync(target, { recursive: true, force: true })
  fs.cpSync(source, target, { recursive: true })
}
