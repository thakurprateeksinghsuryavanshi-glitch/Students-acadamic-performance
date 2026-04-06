// =============================================
// DataPath SRMU - Global JS
// Made by Prateek Singh (202410101360128)
// =============================================

// Scroll-based navbar
window.addEventListener('scroll', () => {
  document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 40);
});

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Active nav link
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.href === window.location.href) a.classList.add('active');
});

// Toast notifications
function showToast(msg, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : '❌'}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// Local Storage helpers (used as JSON file simulation in browser)
const Storage = {
  get(key) {
    try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
  },
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  },
  getStudents() {
    return this.get('ds_students') || [];
  },
  saveStudents(students) {
    this.set('ds_students', students);
  },
  exportJSON() {
    const data = { students: this.getStudents(), exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'students_data.json';
    a.click();
    showToast('Data exported as JSON!');
  },
  importJSON(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.students) {
            this.saveStudents(data.students);
            showToast(`Imported ${data.students.length} students!`);
            resolve(data.students);
          }
        } catch { reject(new Error('Invalid JSON')); }
      };
      reader.readAsText(file);
    });
  }
};

// Interview tracker helpers
const InterviewStorage = {
  getProgress() {
    return Storage.get('interview_progress') || {};
  },
  toggleQuestion(id) {
    const p = this.getProgress();
    p[id] = !p[id];
    Storage.set('interview_progress', p);
    return p[id];
  },
  isComplete(id) {
    return !!this.getProgress()[id];
  }
};
