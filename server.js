const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve your HTML/CSS/JS

// Fake jobs data (Supabase later)
let jobs = [
  { id: 1, title: 'Plumbing Store SP', budget: 'R$5k', desc: 'Urgent' },
  { id: 2, title: 'Electrical RJ', budget: 'R$3k', desc: 'Franchise' }
];

// API Routes
app.get('/api/jobs', (req, res) => res.json(jobs));

app.post('/api/jobs', (req, res) => {
  const newJob = { id: jobs.length + 1, ...req.body };
  jobs.push(newJob);
  res.json(newJob);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
