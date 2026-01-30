// Sample jobs data (replace with API fetch later)
let jobs = [
    { id: 1, title: 'Plumbing for New Store', budget: 'R$5,000', desc: 'São Paulo, urgent.' },
    { id: 2, title: 'Electrical Work', budget: 'R$3,200', desc: 'Rio, franchise build.' }
];

const jobList = document.getElementById('job-list');
const jobForm = document.getElementById('job-form');

function renderJobs() {
    jobList.innerHTML = '';
    jobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Budget:</strong> ${job.budget}</p>
            <p>${job.desc}</p>
            <button onclick="alert('Apply to job ${job.id}')">Apply</button>
        `;
        jobList.appendChild(card);
    });
}

jobForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newJob = {
        id: jobs.length + 1,
        title: document.getElementById('title').value,
        budget: document.getElementById('budget').value,
        desc: document.getElementById('desc').value
    };
    jobs.push(newJob);
    renderJobs();
    jobForm.reset();
    alert('Job posted! Refresh after deploy.');
});

renderJobs();
