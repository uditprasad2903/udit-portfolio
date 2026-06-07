// validate.js — Master Portfolio validation tests
const fs = require('fs');
const path = require('path');

let passed = 0, failed = 0, total = 0;

function test(desc, fn) {
  total++;
  try { fn(); passed++; console.log(`  ✓ ${desc}`); }
  catch (e) { failed++; console.error(`  ✗ ${desc}\n    Error: ${e.message}`); }
}

function assert(c, m) { if (!c) throw new Error(m || 'Assertion failed'); }

console.log('\n🧪 Running portfolio validation tests...\n');

test('index.html exists', () => {
  assert(fs.existsSync(path.join(__dirname, '..', 'index.html')), 'index.html not found');
});

test('package.json exists', () => {
  assert(fs.existsSync(path.join(__dirname, '..', 'package.json')), 'package.json not found');
});

test('.github/workflows directory exists', () => {
  const p = path.join(__dirname, '..', '.github', 'workflows');
  assert(fs.existsSync(p), 'Workflow directory not found');
  assert(fs.readdirSync(p).length > 0, 'No workflow files');
});

test('HTML5 doctype present', () => {
  const h = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(h.includes('<!DOCTYPE html>'), 'Missing doctype');
});

test('viewport meta tag present', () => {
  const h = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(h.includes('viewport'), 'Missing viewport');
});

test('Name "Udit Prasad" present', () => {
  const h = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(h.includes('Udit Prasad'), 'Name not found');
});

test('Email link present', () => {
  const h = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(h.includes('uditprasad32@gmail.com'), 'Email not found');
});

test('LinkedIn link present', () => {
  const h = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(h.includes('linkedin.com/in/uditprasad32'), 'LinkedIn not found');
});

test('GitHub link present', () => {
  const h = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(h.includes('github.com/uditprasad2903'), 'GitHub not found');
});

test('Project 1 (CI/CD) featured', () => {
  const h = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(h.includes('CI/CD Pipeline'), 'CI/CD project not mentioned');
});

test('Project 2 (Docker) featured', () => {
  const h = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(h.includes('Dockerized Web Application'), 'Docker project not mentioned');
});

test('Project 3 (Kubernetes) featured', () => {
  const h = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(h.includes('Kubernetes Deployment'), 'Kubernetes project not mentioned');
});

test('package.json has required scripts', () => {
  const p = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  assert(p.scripts.test, 'Missing test script');
  assert(p.scripts.build, 'Missing build script');
  assert(p.scripts.lint, 'Missing lint script');
});

test('package.json has correct name', () => {
  const p = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  assert(p.name === 'udit-portfolio', 'Incorrect project name');
});

test('Workflow has lint job', () => {
  const w = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(w.includes('lint:'), 'Missing lint job');
});

test('Workflow has test job', () => {
  const w = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(w.includes('test:'), 'Missing test job');
});

test('Workflow has build job', () => {
  const w = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(w.includes('build:'), 'Missing build job');
});

test('Workflow has deploy job', () => {
  const w = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(w.includes('deploy:'), 'Missing deploy job');
});

test('Workflow triggers on push', () => {
  const w = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(w.includes('push:') && w.includes('main'), 'Missing push trigger');
});

test('Workflow triggers on PR', () => {
  const w = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(w.includes('pull_request:'), 'Missing PR trigger');
});

console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed, ${total} total\n`);
if (failed > 0) process.exit(1);
console.log('✅ All tests passed! Portfolio is ready for deployment.\n');
