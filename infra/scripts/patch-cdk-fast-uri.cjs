'use strict'

const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const source = path.join(root, 'node_modules', 'fast-uri')
const target = path.join(root, 'node_modules', 'aws-cdk-lib', 'node_modules', 'fast-uri')
const minimumVersion = '3.1.2'

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

if (!fs.existsSync(source) || !fs.existsSync(target)) {
  process.exit(0)
}

const sourceVersion = readPackageVersion(source)
if (!isAtLeast(sourceVersion, minimumVersion)) {
  throw new Error(`fast-uri ${sourceVersion} is below the required patched version ${minimumVersion}`)
}

fs.rmSync(target, { recursive: true, force: true })
fs.cpSync(source, target, { recursive: true })
