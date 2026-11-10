#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const notesPath = path.join('notes', 'keynote-highlights.json');
const data = JSON.parse(fs.readFileSync(notesPath, 'utf-8'));

const grouped = data.highlights.reduce((acc, item) => {
  acc[item.topic] = acc[item.topic] || [];
  acc[item.topic].push(item.title);
  return acc;
}, {});

Object.entries(grouped).forEach(([topic, titles]) => {
  console.log(`${topic}:`);
  titles.forEach(t => console.log(`- ${t}`));
  console.log('');
});