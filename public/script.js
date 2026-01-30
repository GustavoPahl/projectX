// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// File Upload Handling
const fileUpload = document.getElementById('fileUpload');
const fileInput = document.getElementById('photos');
const fileList = document.getElementById('fileList');
let selectedFiles = [];

fileInput.addEventListener('change', handleFileSelect);

// Drag and drop
fileUpload.addEventListener('dragover', (e) => {
  e.preventDefault();
  fileUpload.style.borderColor = 'var(--primary)';
  fileUpload.style.backgroundColor = 'var(--primary-light)';
});

fileUpload.addEventListener('dragleave', () => {
  fileUpload.style.borderColor = '';
  fileUpload.style.backgroundColor = '';
});

fileUpload.addEventListener('drop', (e) => {
  e.preventDefault();
  fileUpload.style.borderColor = '';
  fileUpload.style.backgroundColor = '';
  
  const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
  addFiles(files);
});

function handleFileSelect(e) {
  const files = Array.from(e.target.files);
  addFiles(files);
}

function addFiles(files) {
  files.forEach(file => {
    if (!selectedFiles.find(f => f.name === file.name)) {
      selectedFiles.push(file);
    }
  });
  renderFileList();
}

function removeFile(fileName) {
  selectedFiles = selectedFiles.filter(f => f.name !== fileName);
  renderFileList();
}

function renderFileList() {
  fileList.innerHTML = selectedFiles.map(file => `
    <div class="file-item">
      <span>${file.name}</span>
      <button type="button" onclick="removeFile('${file.name}')" aria-label="Remover arquivo">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  `).join('');
}

// Phone Mask
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');
  
  if (value.length <= 11) {
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 10) {
      value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }
  }
  
  e.target.value = value;
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());
  data.files = selectedFiles;
  
  // Show success message
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  
  submitBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    Enviado com sucesso!
  `;
  submitBtn.style.backgroundColor = '#16a34a';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.style.backgroundColor = '';
    submitBtn.disabled = false;
    contactForm.reset();
    selectedFiles = [];
    renderFileList();
  }, 3000);
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Header shadow on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = 'var(--shadow-md)';
  } else {
    header.style.boxShadow = '';
  }
});
