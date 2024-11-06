const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Alle Projekte abrufen
router.get('/', async (req, res) => {
  const projects = await Project.find().populate('tasks');
  res.json(projects);
});

// Neues Projekt erstellen
router.post('/', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

module.exports = router;
