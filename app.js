const icons = {
  campus: '<path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6M3 20h18"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  user: '<path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  reports: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  upload: '<path d="M12 16V4m0 0L7 9m5-5 5 5"/><path d="M20 16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3"/>',
  camera: '<path d="M14 5h-4L8 8H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c6.5 0 10 7 10 7a16 16 0 0 1-3 3.8M6.2 6.2C3.5 8 2 12 2 12s3.5 7 10 7a10 10 0 0 0 3-.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
  wrench: '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3z"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4M8 7h1M15 7h1M8 11h1M15 11h1"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  back: '<path d="m15 18-6-6 6-6"/><path d="M20 12H9"/>',
  filter: '<path d="M4 7h16M7 12h10M10 17h4"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/><path d="m9 12 2 2 4-4"/>'
};
const I = (name, size = 18) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.reports}</svg>`;
const defaultReports = [
  { id: 'LAP-2026-084', title: 'Lampu koridor mati', facility: 'Lampu & Penerangan', location: 'Gedung A · Lantai 2', date: '28 Okt 2026', status: 'Menunggu Verifikasi', urgency: 'Sedang', reporter: 'Nadia Putri', category: 'Kelistrikan', description: 'Lampu di koridor lantai 2 sisi timur mati sejak kemarin sore. Area menjadi cukup gelap saat malam hari.' },
  { id: 'LAP-2026-079', title: 'Kursi kuliah rusak', facility: 'Kursi & Meja', location: 'Gedung B · Ruang 203', date: '25 Okt 2026', status: 'Sedang Diperbaiki', urgency: 'Rendah', reporter: 'Nadia Putri', category: 'Furnitur', description: 'Bagian sandaran kursi di baris ketiga lepas dan bautnya hilang.' },
  { id: 'LAP-2026-061', title: 'Keran wastafel bocor', facility: 'Keran & Saluran Air', location: 'Gedung C · Toilet Lantai 1', date: '19 Okt 2026', status: 'Selesai', urgency: 'Sedang', reporter: 'Nadia Putri', category: 'Plumbing', description: 'Keran wastafel terus menetes meskipun sudah ditutup rapat.' },
  { id: 'LAP-2026-055', title: 'Proyektor tidak menyala', facility: 'Proyektor', location: 'Gedung A · Ruang 104', date: '15 Okt 2026', status: 'Diproses', urgency: 'Tinggi', reporter: 'Rizky Ananda', category: 'Elektronik', description: 'Proyektor tidak merespons saat dinyalakan dan indikator daya berkedip.' },
  { id: 'LAP-2026-048', title: 'Pintu ruang kelas macet', facility: 'Pintu & Jendela', location: 'Gedung D · Ruang 301', date: '12 Okt 2026', status: 'Ditolak', urgency: 'Rendah', reporter: 'Salsa Amalia', category: 'Bangunan', description: 'Pintu ruang kelas sulit dibuka dan ditutup.' },
];
const reportsStorageKey = 'ruanglapor.reports';
const userStorageKey = 'ruanglapor.user';
const reportStatuses = ['Menunggu Verifikasi','Diproses','Sedang Diperbaiki','Selesai','Ditolak'];
let storageWarning = false;
function readStoredValue(key, description) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    storageWarning = true;
    console.error(`${description} tidak dapat dibaca dari penyimpanan browser.`, error);
    return null;
  }
}
function writeStoredValue(key, value, description) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    storageWarning = true;
    console.error(`${description} tidak dapat disimpan di penyimpanan browser.`, error);
    return false;
  }
}
function isValidReport(report) {
  return Boolean(report && typeof report === 'object' && !Array.isArray(report) &&
    ['id','title','facility','location','date','status','urgency','reporter','category','description']
      .every(key => typeof report[key] === 'string'));
}
function normalizeReport(report) {
  const history = Array.isArray(report.history)
    ? report.history.filter(entry => entry && typeof entry.status === 'string' && typeof entry.date === 'string')
      .map(entry => ({ status: entry.status, date: entry.date }))
    : [];
  return {
    ...report,
    image: typeof report.image === 'string' ? report.image : '',
    timeAgo: typeof report.timeAgo === 'string' ? report.timeAgo : '',
    urgency: ['Rendah','Sedang','Tinggi'].includes(report.urgency) ? report.urgency : 'Sedang',
    status: reportStatuses.includes(report.status) ? report.status : 'Menunggu Verifikasi',
    history,
  };
}
function loadReports(saved) {
  if (saved === null) return [...defaultReports];
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new Error('Format data laporan bukan daftar.');
    const validReports = parsed.filter(isValidReport);
    if (validReports.length !== parsed.length) {
      storageWarning = true;
      console.warn('Beberapa laporan tersimpan tidak valid dan dilewati.');
    }
    return validReports.length ? validReports.map(normalizeReport) : [...defaultReports];
  } catch (error) {
    storageWarning = true;
    console.error('Data laporan tersimpan tidak valid; menggunakan data contoh.', error);
    return [...defaultReports];
  }
}
const savedReports = readStoredValue(reportsStorageKey, 'Data laporan');
let reports = loadReports(savedReports);
if (savedReports === null && !storageWarning) {
  writeStoredValue(reportsStorageKey, JSON.stringify(reports), 'Data awal laporan');
}
let currentPage = 'login';
let role = 'student';
let currentAdminName = 'Admin';
let selectedReport = reports[0];
let selectedImage = '';
let toastTimer;
const defaultUser = {
  name: 'Rey Yamlean',
  npm: '202555201048',
  email: 'reyyamlean@kampus.ac.id',
};
let currentUser = {
  ...defaultUser,
};
const savedUser = readStoredValue(userStorageKey, 'Data akun');
if (savedUser !== null) {
  try {
    const parsedUser = JSON.parse(savedUser);
    if (parsedUser && typeof parsedUser === 'object' && !Array.isArray(parsedUser) &&
        typeof parsedUser.name === 'string' && parsedUser.name.trim()) {
      currentUser = {
        name: parsedUser.name.trim(),
        npm: typeof parsedUser.npm === 'string' ? parsedUser.npm : defaultUser.npm,
        email: typeof parsedUser.email === 'string' ? parsedUser.email : defaultUser.email,
      };
    } else {
      storageWarning = true;
      console.warn('Data akun tersimpan tidak valid; menggunakan profil awal.');
    }
  } catch (error) {
    storageWarning = true;
    console.error('Data akun tersimpan tidak dapat dibaca; menggunakan profil awal.', error);
  }
}

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const userInitials = name => name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'M';
function saveReports() {
  if (!writeStoredValue(reportsStorageKey, JSON.stringify(reports), 'Data laporan')) {
    throw new Error('Perubahan laporan tidak dapat disimpan di browser ini.');
  }
}
function updateReportStatus(report, status, urgencyValue = report.urgency) {
  if (!reportStatuses.includes(status)) {
    throw new Error(`Status laporan tidak dikenal: ${status}`);
  }
  if (!['Rendah','Sedang','Tinggi'].includes(urgencyValue)) {
    throw new Error(`Prioritas laporan tidak dikenal: ${urgencyValue}`);
  }
  const statusChanged = report.status !== status;
  if (!statusChanged && report.urgency === urgencyValue) return false;
  const previousStatus = report.status;
  const previousUrgency = report.urgency;
  const previousHistory = report.history;
  report.status = status;
  report.urgency = urgencyValue;
  if (statusChanged) {
    report.history = [...(report.history || []), {
      status,
      date: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
    }];
  }
  try {
    saveReports();
  } catch (error) {
    report.status = previousStatus;
    report.urgency = previousUrgency;
    report.history = previousHistory;
    throw new Error('Perubahan status tidak dapat disimpan di browser.', { cause: error });
  }
  return statusChanged;
}
function setPage(page) {
  currentPage = page;
  if (page === 'track' && selectedReport) {
    history.pushState({ page, role, reportId:selectedReport.id }, '', `#/track/${encodeURIComponent(selectedReport.id)}`);
  } else {
    history.pushState({ page, role }, '', page === 'landing' ? `${location.pathname}${location.search}` : `#/${page}`);
  }
  render(true);
}
function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error || new Error('Foto gagal dibaca.'));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error('File yang dipilih bukan foto yang valid.'));
      image.onload = () => {
        if (!image.naturalWidth || !image.naturalHeight) {
          reject(new Error('Foto tidak memiliki ukuran yang dapat diproses.'));
          return;
        }
        const scale = Math.min(1, 1280 / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        const context = canvas.getContext('2d');
        if (!context) {
          reject(new Error('Browser tidak dapat memproses foto ini.'));
          return;
        }
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
          if (!blob) {
            reject(new Error('Foto tidak dapat diproses.'));
            return;
          }
          const compressedReader = new FileReader();
          compressedReader.onerror = () => reject(compressedReader.error || new Error('Foto gagal diproses.'));
          compressedReader.onload = () => resolve(compressedReader.result);
          compressedReader.readAsDataURL(blob);
        }, 'image/jpeg', .78);
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
const statusClass = status => ({ 'Menunggu Verifikasi':'waiting', 'Diproses':'processing', 'Sedang Diperbaiki':'repair', 'Selesai':'done', 'Ditolak':'rejected' }[status] || 'waiting');
const badge = status => `<span class="status ${statusClass(status)}">${status}</span>`;
const urgencyClass = urgency => ({ Tinggi:'high', Sedang:'medium', Rendah:'low' }[urgency] || 'low');
const urgency = value => `<span class="urgency ${urgencyClass(value)}">${value}</span>`;
const pageMeta = {
  home: ['Beranda', 'Pantau perkembangan laporan fasilitas kampus Anda.'],
  create: ['Buat Laporan', 'Sampaikan kerusakan fasilitas agar segera ditangani.'],
  mine: ['Laporan', 'Semua laporan yang pernah Anda kirim.'],
  detail: ['Detail Laporan', 'Informasi dan progres penanganan laporan.'],
  notifications: ['Notifikasi', 'Kabar terbaru tentang laporan fasilitas Anda.'],
  adminHome: ['Ringkasan', 'Pantau kondisi fasilitas dan tindak lanjut laporan.'],
  manage: ['Manajemen Laporan', 'Verifikasi dan kelola laporan fasilitas kampus.'],
  handling: ['Detail Penanganan', 'Kelola proses tindak lanjut laporan fasilitas.'],
  profile: ['Profil', 'Informasi akun dan preferensi Anda.'],
};
reports.forEach(report => {
  if (!Array.isArray(report.history) || report.history.length === 0) {
    report.history = [{ status:'Laporan dikirim', date:report.date }];
  }
});

function navButton(page, icon, label, active = currentPage === page, extra = '') {
  return `<button class="nav-item ${active ? 'active' : ''}" data-page="${page}">${I(icon)}<span>${label}</span>${extra}</button>`;
}
function sidebar() {
  const admin = role === 'admin';
  return `<aside class="sidebar" id="sidebar">
    <div class="brand"><div class="brand-mark">${I('campus', 20)}</div><div><div class="brand-name">RuangLapor</div><div class="brand-caption">Fasilitas Kampus</div></div></div>
    <div class="nav-label">${admin ? 'MENU PENGELOLA' : 'MENU UTAMA'}</div>
    <nav class="nav-list">
      ${admin ? `${navButton('adminHome','home','Ringkasan')}${navButton('manage','list','Manajemen Laporan',currentPage==='manage'||currentPage==='handling','<span class="nav-badge">8</span>')}` :
      `${navButton('home','home','Beranda')}${navButton('create','plus','Buat Laporan')}${navButton('mine','list','Laporan Saya')}${navButton('notifications','bell','Notifikasi',currentPage==='notifications','<span class="nav-badge">2</span>')}${navButton('profile','user','Profil')}`}
    </nav>
    ${admin ? '<div class="nav-label" style="margin-top:29px">PREFERENSI</div><nav class="nav-list">'+navButton('notifications','bell','Notifikasi')+'</nav>' : ''}
    <div class="sidebar-bottom">
      ${!admin ? `<div class="help-card"><strong>Butuh bantuan?</strong><p>Tim fasilitas siap membantu. Hubungi kami jika ada kendala.</p></div>` : ''}
      <div class="profile-mini"><div class="avatar ${admin?'admin': ''}">${admin?userInitials(currentAdminName):userInitials(currentUser.name)}</div><div><strong>${admin?escapeHTML(currentAdminName):escapeHTML(currentUser.name)}</strong><small>${admin?'Pengelola Fasilitas':`Mahasiswa · NPM ${escapeHTML(currentUser.npm)}`}</small></div></div>
      <button class="nav-item logout" data-action="logout">${I('logout')}<span>Keluar</span></button>
    </div>
  </aside>`;
}
function topbar() {
  const title = pageMeta[currentPage]?.[0] || 'Beranda';
  return `<header class="topbar"><div class="topbar-left"><button class="icon-button mobile-menu" data-action="menu" aria-label="Buka menu">${I('menu')}</button><div><div class="eyebrow">Universitas Nusantara</div><div class="top-title">${title}</div></div></div><div class="topbar-right"><button class="icon-button ${currentPage==='notifications'?'active':''}" data-page="notifications" aria-label="Notifikasi" ${currentPage==='notifications'?'aria-current="page"':''}>${I('bell')}<span class="notification-dot"></span></button><div class="top-user"><div class="avatar ${role==='admin'?'admin':''}">${role==='admin'?userInitials(currentAdminName):userInitials(currentUser.name)}</div><div class="user-copy"><strong>${role==='admin'?escapeHTML(currentAdminName):escapeHTML(currentUser.name)}</strong><small>${role==='admin'?'Admin':'Mahasiswa'}</small></div></div></div></header>`;
}
function heading(title, desc, button = '') {
  return `<div class="page-heading"><div><h1>${title}</h1><p>${desc}</p></div>${button}</div>`;
}
function statCard(label, value, icon, color, foot) {
  return `<div class="stat-card"><div class="stat-head"><span>${label}</span><span class="stat-icon ${color}">${I(icon)}</span></div><div class="stat-value">${value}</div><div class="stat-foot">${foot}</div></div>`;
}
function reportRows(items) {
  return items.map(r => `<div class="report-row" data-report="${escapeHTML(r.id)}"><div><div class="report-title">${escapeHTML(r.title)}</div><div class="report-meta"><span>${escapeHTML(r.id)}</span><span class="meta-dot"></span><span>${escapeHTML(r.location)}</span><span class="meta-dot"></span><span>${escapeHTML(r.date)}</span></div></div><div class="report-right">${badge(r.status)}${I('arrow',15)}</div></div>`).join('');
}
function publicHeader() {
  return `<header class="public-header"><a class="public-brand" href="#" data-page="landing"><span class="public-brand-mark">${I('campus')}</span><span><strong>Ruang Lapor</strong><small>Fasilitas</small></span></a><form class="ticket-search" id="ticket-lookup"><label class="sr-only" for="ticket-id">Cari ID tiket</label>${I('search')}<input id="ticket-id" class="control" placeholder="Cari ID tiket, contoh RLF-8921" required><button type="submit" class="btn btn-primary btn-small">Lacak tiket</button></form><button class="btn btn-outline public-admin-link" data-action="admin-login">${I('shield')} Login Admin</button><button class="icon-button mobile-menu public-search-toggle" aria-label="Cari tiket" data-action="toggle-ticket-search">${I('search')}</button></header>`;
}
function publicStatus(status) {
  return `<span class="public-status ${statusClass(status)}">${escapeHTML(status)}</span>`;
}
function publicReportCard(report, index) {
  const category = report.category || report.facility || 'Fasilitas';
  const location = report.location || 'Kampus';
  const time = report.timeAgo || ['2 jam yang lalu','5 jam yang lalu','Kemarin','2 hari yang lalu'][index % 4];
  return `<article class="public-report-card" data-public-report="${escapeHTML(report.id)}" tabindex="0" role="button" aria-label="Lacak tiket ${escapeHTML(report.id)}">
    <div class="public-thumb">
      ${report.image?`<img src="${escapeHTML(report.image)}" alt="Foto ${escapeHTML(report.title)}">`:`<div class="thumb-placeholder ${category==='Kelistrikan'?'thumb-electric':category==='Furnitur'||category==='Mebel/Furniture'?'thumb-furniture':category==='Plumbing'||category==='Air & Plumbing'?'thumb-water':'thumb-general'}">${I(category==='Kelistrikan'?'wrench':category==='Furnitur'||category==='Mebel/Furniture'?'building':category==='Plumbing'||category==='Air & Plumbing'?'pin':'reports',32)}</div>`}
      <span class="category-tag">${escapeHTML(category)}</span>
    </div>
    <div class="public-report-body"><div class="public-report-title">${escapeHTML(report.title)}</div><div class="public-report-meta">${I('pin',14)}<span>${escapeHTML(location)}</span><span class="public-meta-dot">·</span><span>${escapeHTML(time)}</span></div></div>
    <footer class="public-report-footer">${publicStatus(report.status)}<span class="ticket-reference">${escapeHTML(report.id)}</span></footer>
  </article>`;
}
function landingPage() {
  const latest = [...reports].slice(0,6);
  return `<div class="public-site">${publicHeader()}<main class="public-main">
    <section class="public-hero">
      <div class="hero-copy"><span class="hero-kicker">${I('shield',15)} PELAPORAN FASILITAS KAMPUS</span><h1>Laporkan Kerusakan Fasilitas dengan Cepat &amp; Transparan</h1><p>Bantu kami menjaga kenyamanan lingkungan bersama. Tanggapan cepat, status terbuka.</p>
        <div class="hero-actions"><button class="btn btn-primary btn-hero" data-page="report">${I('plus')} Buat Laporan Sekarang</button><button class="btn btn-outline btn-hero" data-action="focus-ticket">${I('search')} Cek Status Tiket</button></div>
        <div class="hero-promise"><span>${I('check',15)} Gratis dan mudah</span><span>${I('clock',15)} Pantau setiap saat</span></div>
      </div>
      <div class="hero-aside"><div class="hero-status-card"><span class="status-card-icon">${I('reports',20)}</span><div><strong>Pelaporan terbuka</strong><small>Setiap laporan dapat dipantau sampai selesai.</small></div><span class="online-indicator"></span></div><div class="hero-aside-note"><span class="hero-note-line"></span><p>Satu laporan kecil dapat membuat ruang belajar lebih nyaman untuk semua.</p></div></div>
    </section>
    <section class="public-metrics" aria-label="Ringkasan laporan"><div class="metric-item"><strong>124</strong><span>Total Laporan Masuk</span></div><div class="metric-item"><strong>98</strong><span>Laporan Selesai</span></div><div class="metric-item"><strong>24 <small>Jam</small></strong><span>Rata-rata Penanganan</span></div></section>
    <section class="public-feed" id="laporan-terkini"><div class="feed-heading"><div><span class="section-kicker">TRANSPARANSI KAMPUS</span><h2>Laporan Terkini</h2><p>Lihat laporan fasilitas yang sedang ditangani di lingkungan kampus.</p></div><button class="btn btn-outline" data-page="report">${I('plus')} Buat laporan</button></div>
      <div class="public-report-grid">${latest.length?latest.map(publicReportCard).join(''):`<div class="public-empty"><div class="empty-illustration">${I('reports')}</div><h3>Belum ada laporan terkini</h3><p>Jadilah yang pertama melaporkan fasilitas yang perlu diperbaiki.</p></div>`}</div>
      <div class="feed-footnote">${I('shield',15)} Informasi pelapor tidak ditampilkan di halaman publik.</div>
    </section>
  </main><footer class="public-footer"><span>© 2026 Ruang Lapor Fasilitas · Universitas Nusantara</span><span>Untuk lingkungan kampus yang lebih nyaman.</span></footer></div>`;
}
function publicReportForm() {
  return `<div class="public-site">${publicHeader()}<main class="public-form-page">
    <button class="back-login" data-page="landing">${I('back')} Kembali ke beranda</button>
    <header class="public-form-heading"><span class="hero-kicker">LAPORAN FASILITAS</span><h1>Buat Laporan</h1><p>Isi informasi kerusakan dengan jelas. Tim fasilitas akan menindaklanjuti laporan Anda.</p></header>
    <form class="public-form-card" id="public-report-form">
      <section class="public-form-section"><h2><span class="form-step">01</span> Kategori &amp; Lokasi</h2>
        <div class="public-field-grid">
          <div class="field"><label for="public-category">Kategori <span class="required">*</span></label><select class="control" id="public-category" required><option value="">Pilih kategori fasilitas</option><option>Kelistrikan</option><option>Air &amp; Plumbing</option><option>Mebel/Furniture</option><option>Kebersihan</option><option>Lainnya</option></select></div>
          <div class="field"><label for="public-building">Gedung / area <span class="required">*</span></label><select class="control" id="public-building" required><option value="">Pilih gedung atau area</option><option>Gedung A</option><option>Gedung B</option><option>Gedung C</option><option>Gedung D</option><option>Area luar</option></select></div>
          <div class="field public-field-full"><label for="public-location">Detail lokasi <span class="required">*</span></label><input class="control" id="public-location" required placeholder="Contoh: Ruang Kelas 302, dekat jendela kanan"></div>
          <div class="field public-field-full"><label for="public-title">Ringkasan kerusakan <span class="required">*</span></label><input class="control" id="public-title" required maxlength="90" placeholder="Contoh: AC Gedung A mati total"></div>
        </div>
      </section>
      <section class="public-form-section"><h2><span class="form-step">02</span> Bukti Foto</h2>
        <label class="public-upload" id="public-upload-zone" for="public-photo-input">${I('upload',24)}<strong id="public-upload-title">Pilih foto atau tarik file ke sini</strong><small>Format JPG, PNG, atau WEBP · Maksimal 5 MB</small><input type="file" id="public-photo-input" accept="image/jpeg,image/png,image/webp" hidden></label>
        <div class="public-photo-preview hidden" id="public-photo-preview"><img id="public-photo-image" alt="Pratinjau foto kerusakan"><span id="public-photo-name"></span><button type="button" class="icon-button" data-action="remove-public-photo" aria-label="Hapus foto">${I('close')}</button></div>
      </section>
      <section class="public-form-section"><h2><span class="form-step">03</span> Deskripsi Kerusakan</h2><div class="field"><label for="public-description">Ceritakan masalahnya <span class="required">*</span></label><textarea class="control" id="public-description" required maxlength="1200" placeholder="Jelaskan detail kerusakan yang terjadi..."></textarea><span class="helper">Sertakan kapan kerusakan terjadi dan dampaknya bagi kegiatan kampus.</span></div></section>
      <section class="public-form-section public-privacy-section"><label class="anonymous-check"><input type="checkbox" id="anonymous-report"><span class="checkmark"></span><span><strong>Kirim sebagai Laporan Anonim</strong><small>Nama Anda tidak akan ditampilkan pada laporan.</small></span></label><div class="field" id="public-reporter-field"><label for="public-reporter">Nama pelapor <span class="required">*</span></label><input class="control" id="public-reporter" required value="${escapeHTML(currentUser.name)}" placeholder="Nama lengkap"></div></section>
      <footer class="public-form-actions"><button type="button" class="btn btn-ghost" data-page="landing">Batal</button><button type="submit" class="btn btn-primary">${I('arrow')} Kirim Laporan</button></footer>
    </form>
  </main><footer class="public-footer"><span>© 2026 Ruang Lapor Fasilitas · Universitas Nusantara</span><span>Data laporan pada prototipe disimpan di browser ini.</span></footer></div>`;
}
function trackingPage() {
  const report=selectedReport;
  const state=['Menunggu Verifikasi','Diproses','Sedang Diperbaiki','Selesai'].includes(report.status)?report.status:'Ditolak';
  const activeIndex=state==='Menunggu Verifikasi'?1:state==='Diproses'?2:state==='Sedang Diperbaiki'?3:state==='Selesai'?4:1;
  const timeline=[
    {title:'Laporan Diterima',detail:'Laporan berhasil masuk ke sistem.',status:'done'},
    {title:'Diverifikasi Admin',detail:report.history?.some(item=>item.status==='Diproses')?'Laporan valid, diteruskan ke tim teknis.':'Menunggu pemeriksaan oleh pengelola.',status:activeIndex>1?'done':activeIndex===1?'active':'pending'},
    {title:'Petugas Ditugaskan',detail:state==='Sedang Diperbaiki'||state==='Selesai'?'Petugas: Tim Fasilitas Kampus':'Petugas akan ditugaskan setelah laporan diverifikasi.',status:activeIndex>2?'done':activeIndex===2?'active':'pending'},
    {title:'Perbaikan Selesai',detail:state==='Selesai'?'Penanganan laporan telah selesai.':'Bukti perbaikan akan ditampilkan setelah pekerjaan selesai.',status:state==='Selesai'?'done':state==='Sedang Diperbaiki'?'active':'pending'}
  ];
  return `<div class="public-site">${publicHeader()}<main class="public-track-page"><button class="back-login" data-page="landing">${I('back')} Kembali ke beranda</button>
    <header class="track-heading"><div><span class="section-kicker">PELACAKAN LAPORAN</span><h1>Perkembangan Tiket</h1><p>Pantau setiap tahap penanganan laporan fasilitas Anda.</p></div>${publicStatus(report.status)}</header>
    <div class="track-ticket-meta"><span class="ticket-id-large">Tiket #${escapeHTML(report.id)}</span><span>Dikirim ${escapeHTML(report.date)}</span></div>
    <section class="track-summary"><div class="track-summary-copy"><span class="category-tag">${escapeHTML(report.category||report.facility)}</span><h2>${escapeHTML(report.title)}</h2><p>${I('pin',16)} ${escapeHTML(report.location)}</p><p class="track-description">${escapeHTML(report.description)}</p></div>${report.image?`<img class="track-photo" src="${escapeHTML(report.image)}" alt="Foto fasilitas rusak">`:`<div class="track-photo track-photo-placeholder">${I('reports',30)}<span>Foto tidak dilampirkan</span></div>`}</section>
    <section class="timeline-panel"><div class="panel-heading"><div><h2>Status Penanganan</h2><p>Progres laporan dari diterima hingga selesai</p></div></div><div class="public-timeline">${timeline.map(item=>`<div class="public-timeline-item ${item.status}"><span class="public-timeline-node">${item.status==='done'?I('check',13):''}</span><div><strong>${item.title}</strong><p>${item.detail}</p></div></div>`).join('')}</div></section>
    <div class="track-notice">${I('bell',17)} <span>Perubahan status dapat dilihat kembali menggunakan ID tiket <strong>${escapeHTML(report.id)}</strong>.</span></div>
  </main><footer class="public-footer"><span>© 2026 Ruang Lapor Fasilitas · Universitas Nusantara</span><span>Untuk lingkungan kampus yang lebih nyaman.</span></footer></div>`;
}
function studentHome() {
  const userReports = reports.filter(r => r.reporter === currentUser.name);
  const inProgress = userReports.filter(r => ['Diproses','Sedang Diperbaiki'].includes(r.status)).length;
  const completed = userReports.filter(r => r.status === 'Selesai').length;
  const waiting = userReports.filter(r => r.status === 'Menunggu Verifikasi').length;
  return `${heading(`Selamat Siang, ${escapeHTML(currentUser.name.split(/\s+/)[0])} 👋`,'Semoga harimu menyenangkan. Apa saja yang perlu dilaporkan hari ini?',`<button class="btn btn-primary" data-page="create">${I('plus')} Buat Laporan</button>`)}
    <div class="stats-grid">${statCard('Total laporan',String(userReports.length).padStart(2,'0'),'reports','',userReports.length ? 'Laporan yang Anda kirim' : 'Belum ada laporan')}${statCard('Sedang diproses',String(inProgress).padStart(2,'0'),'clock','blue','Laporan ditindaklanjuti')}${statCard('Selesai',String(completed).padStart(2,'0'),'check','green','Laporan telah selesai')}${statCard('Menunggu verifikasi',String(waiting).padStart(2,'0'),'clock','amber','Segera ditinjau tim')}</div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-heading"><div><h2>Laporan Terbaru</h2><p>Perkembangan laporan fasilitas Anda</p></div><a class="text-link" data-page="mine">Lihat semua →</a></div><div class="report-list">${userReports.length ? reportRows(userReports.slice(0,3)) : `<div class="empty-state"><div class="empty-illustration">${I('reports')}</div><h3>Belum ada laporan</h3><p>Laporkan fasilitas yang rusak agar tim kampus dapat segera menanganinya.</p><button class="btn btn-primary btn-small" data-page="create">${I('plus')} Buat Laporan</button></div>`}</div></section>
    <div><section class="panel"><div class="panel-heading"><div><h2>Ringkasan Laporan</h2><p>Berdasarkan kategori fasilitas</p></div></div><div class="category-bars">${[['Kelistrikan',72,5],['Furnitur',48,3],['Plumbing',35,2],['Elektronik',26,2]].map(([n,w,c])=>`<div><div class="bar-label"><span>${n}</span><strong>${c}</strong></div><div class="bar-track"><div class="bar-fill" style="width:${w}%"></div></div></div>`).join('')}</div></section><div class="notice-card"><div class="notice-icon">${I('bell')}</div><div><strong>Butuh perhatian?</strong><p>Laporan dengan urgensi tinggi akan diprioritaskan oleh tim fasilitas.</p></div></div></div></div>`;
}
function createReport() {
  return `${heading('Buat Laporan','Isi informasi kerusakan berikut. Tim fasilitas akan meninjau laporan Anda.')}
    <div class="form-layout"><form class="form-card" id="report-form"><div class="form-section-title"><span class="step-number">1</span> Informasi Fasilitas</div>
      <div class="form-grid">
        <div class="field"><label>Nama pelapor <span class="required">*</span></label><input class="control" id="reporter-name" required value="${escapeHTML(currentUser.name)}" placeholder="Nama lengkap"></div>
        <div class="field"><label>Lokasi fasilitas <span class="required">*</span></label><select class="control" id="report-campus-location" required><option value="">Pilih lokasi kampus</option><option>Area Kampus Utama</option><option>Area Kampus Barat</option><option>Area Kampus Timur</option></select></div>
        <div class="field"><label>Gedung / ruangan <span class="required">*</span></label><input class="control" id="report-location-detail" required placeholder="Contoh: Gedung A, Ruang 204"></div>
        <div class="field"><label>Kategori fasilitas <span class="required">*</span></label><select class="control" id="report-category" required><option value="">Pilih kategori</option><option>Kelistrikan</option><option>Furnitur</option><option>Plumbing</option><option>Elektronik</option><option>Bangunan</option><option>Area luar</option></select></div>
        <div class="field full"><label>Nama fasilitas / jenis kerusakan <span class="required">*</span></label><input class="control" id="report-title" required placeholder="Contoh: Lampu koridor mati"></div>
        <div class="field full"><label>Deskripsi kerusakan <span class="required">*</span></label><textarea class="control" id="report-description" required placeholder="Ceritakan kondisi kerusakan, sejak kapan terjadi, dan informasi lain yang membantu..."></textarea><span class="helper">Jelaskan lokasi spesifik dan kondisi kerusakan dengan singkat.</span></div>
        <div class="field full"><label>Foto kerusakan</label><label class="upload-box" for="photo-input"><div>${I('upload')}<strong id="upload-label">Klik untuk unggah atau tarik foto ke sini</strong><small>JPG atau PNG · Maksimal 5 MB</small></div><input id="photo-input" type="file" accept="image/*" hidden></label><span class="helper">Foto membantu pihak pengelola memverifikasi kondisi fasilitas dengan lebih cepat.</span></div>
        <div class="field full"><label>Tingkat urgensi <span class="required">*</span></label><div class="urgency-options"><label class="urgency-option"><input type="radio" name="urgency" value="Rendah"><span>Rendah</span></label><label class="urgency-option"><input type="radio" name="urgency" value="Sedang" checked><span>Sedang</span></label><label class="urgency-option"><input type="radio" name="urgency" value="Tinggi"><span>Tinggi</span></label></div></div>
      </div><div class="form-actions"><button type="button" class="btn btn-outline" data-page="home">Batal</button><button type="submit" class="btn btn-primary">${I('arrow')} Kirim Laporan</button></div></form>
      <aside class="info-aside"><div class="info-box"><div class="notice-icon">${I('camera')}</div><h3>Foto membantu verifikasi</h3><p>Sertakan foto yang jelas agar tim fasilitas bisa memahami kondisi kerusakan dan menyiapkan penanganan yang tepat.</p></div><div class="info-box"><div class="notice-icon">${I('clock')}</div><h3>Alur pelaporan</h3><p>Setelah dikirim, laporan akan diverifikasi dalam 1×24 jam kerja. Anda bisa memantau progresnya kapan saja.</p></div></aside></div>`;
}
function reportCard(r) {
  return `<article class="report-card"><div><div class="card-kicker">${escapeHTML(r.id)}</div><h3>${escapeHTML(r.title)}</h3><p>${escapeHTML(r.facility)} · ${escapeHTML(r.location)}</p><div class="card-details"><span>${I('calendar',13)} ${escapeHTML(r.date)}</span>${urgency(r.urgency)}</div></div><div class="report-card-actions">${badge(r.status)}<button class="btn btn-outline btn-small" data-report="${escapeHTML(r.id)}">Lihat Detail ${I('arrow',13)}</button></div></article>`;
}
function myReports() {
  const mine = reports.filter(r=>r.reporter===currentUser.name);
  return `${heading('Laporan Saya','Pantau status dan perkembangan laporan fasilitas yang Anda kirim.',`<button class="btn btn-primary" data-page="create">${I('plus')} Buat Laporan</button>`)}
    <div class="filters"><label class="search-box">${I('search')}<input class="control" id="report-search" placeholder="Cari laporan atau nomor..."></label><select class="control" id="status-filter"><option value="">Semua status</option>${['Menunggu Verifikasi','Diproses','Sedang Diperbaiki','Selesai','Ditolak'].map(x=>`<option>${x}</option>`).join('')}</select><select class="control" id="category-filter"><option value="">Semua kategori</option>${[...new Set(mine.map(r=>r.category))].map(x=>`<option>${x}</option>`).join('')}</select></div>
    <div class="report-cards" id="my-report-list">${mine.length ? mine.map(reportCard).join('') : `<section class="panel empty-state"><div class="empty-illustration">${I('reports')}</div><h3>Belum ada laporan</h3><p>Laporan yang Anda kirim akan muncul di sini dan bisa dipantau perkembangannya.</p><button class="btn btn-primary btn-small" data-page="create">${I('plus')} Buat Laporan</button></section>`}</div>`;
}
function detailPage() {
  const r = selectedReport || reports[0];
  const steps = ['Laporan Dikirim','Diverifikasi','Diproses','Diperbaiki','Selesai'];
  const current = r.status === 'Selesai' ? 5 : r.status === 'Sedang Diperbaiki' ? 3 : r.status === 'Diproses' ? 2 : 1;
  return `${heading('Detail Laporan',`Laporan ${escapeHTML(r.id)}`,`<button class="btn btn-outline" data-page="mine">${I('back')} Kembali</button>`)}
    <div class="detail-layout"><div><section class="panel"><div class="detail-photo">${selectedImage ? `<img src="${selectedImage}" alt="Foto fasilitas rusak">` : `<div class="photo-placeholder">${I('camera',22)}<br>Foto kerusakan belum tersedia</div>`}</div><div class="detail-topline"><div><h2>${escapeHTML(r.title)}</h2><p>${escapeHTML(r.facility)} · ${escapeHTML(r.id)}</p></div>${badge(r.status)}</div><div class="detail-description"><h3>Deskripsi Kerusakan</h3><p>${escapeHTML(r.description)}</p></div><div class="info-grid"><div class="info-item"><small>Lokasi</small><strong>${escapeHTML(r.location)}</strong></div><div class="info-item"><small>Tanggal laporan</small><strong>${escapeHTML(r.date)}</strong></div><div class="info-item"><small>Tingkat urgensi</small>${urgency(r.urgency)}</div><div class="info-item"><small>Pelapor</small><strong>${escapeHTML(r.reporter)}</strong></div></div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Riwayat Perubahan Status</h2><p>Catatan aktivitas laporan Anda</p></div></div>${r.history.slice().reverse().map((entry,index)=>`<div class="history-item"><span class="history-dot" ${index?'style="background:#c9c4ca"':''}></span><div><strong>${escapeHTML(entry.status)}</strong><small>${escapeHTML(entry.date)} · ${entry.status==='Laporan dikirim'?'Laporan diterima sistem':'Status diperbarui oleh pengelola'}</small></div></div>`).join('')}</section></div>
    <div><section class="panel"><div class="panel-heading"><div><h2>Progres Penanganan</h2><p>Perjalanan laporan sampai selesai</p></div></div>    <div class="timeline">${steps.map((s,i)=>`<div class="timeline-item ${i<current?'completed':i===current?'current':''}"><span class="timeline-marker"></span><div><strong>${s}</strong><small>${i<current ? (i===0?r.date:'Selesai') : i===current?'Sedang berlangsung':'Menunggu'}</small></div></div>`).join('')}</div></section><div class="notice-card"><div class="notice-icon">${I('bell')}</div><div><strong>Perubahan status?</strong><p>Kami akan memberi tahu Anda setiap kali ada perkembangan terbaru.</p></div></div></div></div>`;
}
function notificationsPage() {
  const notes = [
    ['check','Laporan berhasil dikirim','Laporan LAP-2026-084 telah diterima dan menunggu verifikasi oleh tim fasilitas.','Baru saja',true],
    ['reports','Laporan sedang diperbaiki','Laporan LAP-2026-079 · Kursi kuliah rusak kini sedang ditangani petugas.','25 Okt 2026',true],
    ['check','Perbaikan telah selesai','Laporan LAP-2026-061 · Keran wastafel bocor sudah selesai diperbaiki.','21 Okt 2026',false],
    ['reports','Laporan telah diverifikasi','Laporan LAP-2026-079 telah diverifikasi dan masuk antrean perbaikan.','20 Okt 2026',false],
    ['bell','Laporan baru diterima','Laporan LAP-2026-061 berhasil dikirim. Kami akan segera meninjaunya.','19 Okt 2026',false],
  ];
  return `${heading('Notifikasi','Tetap terhubung dengan perkembangan penanganan laporan Anda.',`<button class="btn btn-outline btn-small" data-action="read-all">Tandai semua dibaca</button>`)}<section class="panel"><div class="notification-list">${notes.map(([icon,title,text,date,unread])=>`<div class="notification-item ${unread?'unread':''}"><div class="notice-icon">${I(icon)}</div><div><strong>${title}</strong><p>${text}</p><small>${date}</small></div>${unread?'<span class="unread-dot"></span>':''}</div>`).join('')}</div></section>`;
}
function adminHome() {
  const items = [['Kelistrikan',8,78],['Furnitur',6,58],['Plumbing',5,46],['Elektronik',3,30],['Bangunan',2,20]];
  return `${heading(`Selamat datang, ${escapeHTML(currentAdminName)}`,'Berikut ringkasan laporan fasilitas kampus hari ini.',`<span class="date-pill">${I('calendar')} Rabu, 28 Oktober 2026</span>`)}
    <div class="stats-grid admin-stats-grid">${statCard('Total laporan','24','reports','','<span class="up">↑ 12%</span> dari bulan lalu')}${statCard('Laporan baru','08','bell','amber','Menunggu verifikasi')}${statCard('Sedang diproses','10','wrench','blue','Termasuk perbaikan aktif')}${statCard('Selesai','06','check','green','<span class="up">↑ 3</span> pekan ini')}${statCard('Prioritas tinggi','03','clock','amber','Perlu perhatian segera')}</div>
    <div class="admin-chart-grid"><section class="panel"><div class="panel-heading"><div><h2>Laporan per Kategori</h2><p>Distribusi laporan fasilitas</p></div><select class="control" style="width:auto;min-width:110px"><option>Bulan ini</option><option>Minggu ini</option></select></div><div class="category-bars">${items.map(([n,v,w])=>`<div><div class="bar-label"><span>${n}</span><strong>${v}</strong></div><div class="bar-track"><div class="bar-fill" style="width:${w}%"></div></div></div>`).join('')}</div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Laporan berdasarkan Status</h2><p>Ringkasan 24 laporan</p></div></div><div class="donut-wrap"><div class="donut"></div><div class="legend">${[['Menunggu', '#702c3b'],['Diproses','#a87984'],['Diperbaiki','#d2b7bd'],['Selesai','#e8dfe2'],['Ditolak','#f3eff1']].map(([n,c])=>`<div class="legend-item"><span class="legend-dot" style="background:${c}"></span>${n}</div>`).join('')}</div></div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Laporan berdasarkan Lokasi</h2><p>Lokasi dengan laporan terbanyak</p></div></div><div class="chart-area">${[['Gedung A',80],['Gedung B',55],['Gedung C',72],['Gedung D',38],['Area luar',28]].map(([n,v])=>`<div class="chart-column"><div class="chart-bar" style="height:${v}%"></div><span class="chart-label">${n}</span></div>`).join('')}</div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Perlu Perhatian</h2><p>Laporan prioritas tinggi</p></div><a class="text-link" data-page="manage">Lihat semua →</a></div><div class="priority-list">${reports.filter(r=>r.urgency==='Tinggi').map(r=>`<div class="priority-item"><div class="avatar">${r.reporter.split(' ').map(x=>x[0]).join('')}</div><div><strong>${r.title}</strong><small>${r.id} · ${r.location}</small></div>${urgency(r.urgency)}</div>`).join('')}</div></section></div>`;
}
function managementPage() {
  return `${heading('Manajemen Laporan','Tinjau, verifikasi, dan tindak lanjuti laporan fasilitas.',`<button class="btn btn-outline" data-action="export">${I('reports')} Ekspor</button>`)}
    <div class="stats-grid">${statCard('Semua laporan','24','reports','','Dari seluruh periode')}${statCard('Baru masuk','08','bell','amber','Menunggu verifikasi')}${statCard('Dalam penanganan','10','wrench','blue','Sedang dikerjakan')}${statCard('Prioritas tinggi','03','clock','','Perlu perhatian')}</div>
    <section class="panel"><div class="filters"><label class="search-box">${I('search')}<input id="admin-search" class="control" placeholder="Cari ID, pelapor, atau fasilitas..."></label><select class="control" id="admin-status"><option value="">Semua status</option>${['Menunggu Verifikasi','Diproses','Sedang Diperbaiki','Selesai','Ditolak'].map(x=>`<option>${x}</option>`).join('')}</select><select class="control" id="admin-priority"><option value="">Semua prioritas</option><option>Tinggi</option><option>Sedang</option><option>Rendah</option></select></div>
    <div class="table-wrap"><table><thead><tr><th>ID LAPORAN</th><th>PELAPOR</th><th>FASILITAS</th><th>LOKASI</th><th>TANGGAL</th><th>PRIORITAS</th><th>STATUS</th><th>AKSI</th></tr></thead><tbody id="admin-table">${reports.map(adminRow).join('')}</tbody></table></div></section>`;
}
function adminRow(r) {
  return `<tr data-admin-row="${escapeHTML(r.id)}"><td class="td-main">${escapeHTML(r.id)}</td><td>${escapeHTML(r.reporter)}</td><td><div class="td-main">${escapeHTML(r.title)}</div><div class="td-sub">${escapeHTML(r.facility)}</div></td><td>${escapeHTML(r.location)}</td><td>${escapeHTML(r.date)}</td><td>${urgency(r.urgency)}</td><td><select class="control admin-status-select" data-status-report="${escapeHTML(r.id)}" aria-label="Ubah status laporan ${escapeHTML(r.id)}">${reportStatuses.map(status=>`<option value="${status}" ${r.status===status?'selected':''}>${status}</option>`).join('')}</select></td><td><div class="table-actions"><button class="icon-button" title="Lihat detail" data-report="${escapeHTML(r.id)}">${I('eye',14)}</button><button class="icon-button" title="Detail penanganan" data-action="edit-report" data-id="${escapeHTML(r.id)}">${I('wrench',14)}</button></div></td></tr>`;
}
function handlingPage() {
  const r = selectedReport || reports[0];
  return `${heading('Detail Penanganan',r.id,`<button class="btn btn-outline" data-page="manage">${I('back')} Kembali</button>`)}
    <div class="detail-layout"><div><section class="panel"><div class="detail-photo">${selectedImage?`<img src="${selectedImage}" alt="Foto kerusakan">`:`<div class="photo-placeholder">${I('camera',22)}<br>Belum ada foto terlampir</div>`}</div><div class="detail-topline"><div><h2>${escapeHTML(r.title)}</h2><p>${escapeHTML(r.facility)} · ${escapeHTML(r.id)}</p></div>${badge(r.status)}</div><div class="detail-description"><h3>Deskripsi Kerusakan</h3><p>${escapeHTML(r.description)}</p></div><div class="info-grid"><div class="info-item"><small>Pelapor</small><strong>${escapeHTML(r.reporter)}</strong></div><div class="info-item"><small>Lokasi</small><strong>${escapeHTML(r.location)}</strong></div><div class="info-item"><small>Tanggal laporan</small><strong>${escapeHTML(r.date)}</strong></div><div class="info-item"><small>Tingkat urgensi</small>${urgency(r.urgency)}</div></div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Riwayat Status</h2><p>Perubahan status laporan ini</p></div></div>${r.history.slice().reverse().map((entry,index)=>`<div class="history-item"><span class="history-dot" ${index?'style="background:#c9c4ca"':''}></span><div><strong>${escapeHTML(entry.status)}</strong><small>${escapeHTML(entry.date)} · ${entry.status==='Laporan dikirim'?'Laporan diterima sistem':'Status diperbarui oleh pengelola'}</small></div></div>`).join('')}</section>
    <section class="panel"><div class="panel-heading"><div><h2>Catatan Penanganan</h2><p>Catatan internal dan pembaruan untuk pelapor</p></div></div><textarea class="control" id="handling-note" style="height:84px;padding:10px" placeholder="Tuliskan tindakan yang sudah atau akan dilakukan..."></textarea><button class="btn btn-primary btn-small" style="margin-top:10px" data-action="save-note">${I('check')} Simpan Catatan</button></section></div>
    <div><section class="panel"><div class="panel-heading"><div><h2>Perbarui Laporan</h2><p>Atur penanganan fasilitas</p></div></div><div class="field"><label>Status laporan</label><select class="control" id="handling-status">${['Menunggu Verifikasi','Diproses','Sedang Diperbaiki','Selesai','Ditolak'].map(s=>`<option ${r.status===s?'selected':''}>${s}</option>`).join('')}</select></div><div class="field" style="margin-top:13px"><label>Prioritas</label><select class="control" id="handling-priority">${['Rendah','Sedang','Tinggi'].map(s=>`<option ${r.urgency===s?'selected':''}>${s}</option>`).join('')}</select></div><div class="field" style="margin-top:13px"><label>Petugas yang menangani</label><select class="control"><option>Belum ditentukan</option><option selected>Admin</option><option>Budi Santoso</option><option>Tim Sarana & Prasarana</option></select></div><div class="field" style="margin-top:13px"><label>Tanggal mulai perbaikan</label><input class="control" type="date" value="2026-10-28"></div><div class="field" style="margin-top:13px"><label>Tanggal selesai</label><input class="control" type="date"></div><button class="btn btn-primary" style="width:100%;margin-top:18px" data-action="update-report">${I('check')} Simpan Perubahan</button></section></div></div>`;
}
function profilePage() {
  return `${heading('Profil Saya','Kelola informasi akun Anda.') }<div class="form-layout"><section class="form-card"><div class="form-section-title"><span class="step-number">${I('user',13)}</span> Informasi Akun</div><div class="form-grid"><div class="field"><label>Nama lengkap</label><input class="control" id="profile-name" value="${escapeHTML(currentUser.name)}" required></div><div class="field"><label>NPM</label><input class="control" id="profile-npm" value="${escapeHTML(currentUser.npm)}" required></div><div class="field"><label>Email kampus</label><input class="control" id="profile-email" type="email" value="${escapeHTML(currentUser.email)}"></div><div class="field"><label>Program studi</label><input class="control" value="Teknik Informatika"></div><div class="field"><label>Fakultas</label><input class="control" value="Teknik"></div><div class="field"><label>Angkatan</label><input class="control" value="2025"></div></div><div class="form-actions"><button class="btn btn-primary" data-action="save-profile">${I('check')} Simpan Perubahan</button></div></section><aside class="info-aside"><div class="info-box"><div class="avatar" id="profile-avatar" style="width:54px;height:54px;font-size:17px;margin-bottom:12px">${userInitials(currentUser.name)}</div><h3 id="profile-preview-name">${escapeHTML(currentUser.name)}</h3><p>Mahasiswa · Teknik Sipil<br>Universitas Nusantara</p></div></aside></div>`;
}
function shell(pageContent) {
  return `<div class="shell">${sidebar()}<div class="sidebar-overlay" id="sidebar-overlay" data-action="close-sidebar"></div><main class="main-area">${topbar()}<div class="content">${pageContent}</div></main></div>`;
}
function loginPage(adminMode = false) {
  return `<div class="login-screen">
    <section class="login-visual">
      <div class="brand"><div class="brand-mark">${I('campus',20)}</div><div><div class="brand-name">RuangLapor</div><div class="brand-caption">Pelaporan Kerusakan Fasilitas Kampus</div></div></div>
      <div class="visual-copy"><div class="overline">Universitas Nusantara</div><h1>Fasilitas baik,<br>kampus nyaman.</h1><p>Laporkan kerusakan fasilitas dengan mudah. Kami membantu menjaga ruang belajar yang aman dan nyaman untuk seluruh civitas akademika.</p><div class="visual-features"><div class="visual-feature"><span class="feature-check">✓</span> Pelaporan mudah dan transparan</div><div class="visual-feature"><span class="feature-check">✓</span> Pantau progres secara real-time</div><div class="visual-feature"><span class="feature-check">✓</span> Tindak lanjut oleh tim profesional</div></div></div>
      <div class="login-footer">© 2026 Universitas Nusantara · Layanan Sarana & Prasarana, DIBUAT OLEH REY ASELI RILL NO FEK NO TIPU  </div>
    </section>
    <section class="login-side"><div class="login-form-wrap">
      <div class="brand"><div class="brand-mark">${I('campus',20)}</div><div><div class="brand-name">RuangLapor</div><div class="brand-caption">Pelaporan Kerusakan Fasilitas Kampus</div></div></div>
      ${adminMode?`<button class="back-login" data-action="student-login">${I('back')} Kembali ke login mahasiswa</button>`:''}
      <h2>${adminMode?'Login Admin':'Pelaporan Fasilitas Kampus'}</h2>
      <p>${adminMode?'Masukkan nama dan password untuk masuk ke panel pengelola.':'Masuk untuk melaporkan dan memantau fasilitas kampus.'}</p>
      <form id="login-form" class="login-fields">
        ${adminMode?`<div class="field"><label>Nama admin</label><input class="control" id="admin-name" required placeholder="Masukkan nama"></div><div class="field"><label>Password</label><div class="password-wrap"><input class="control" id="login-password" type="password" required placeholder="Masukkan password apa saja"><button class="password-toggle" type="button" data-action="toggle-password" aria-label="Tampilkan password">${I('eye')}</button></div></div>`:`<div class="field"><label>Nama lengkap</label><input class="control" id="login-name" required placeholder="Masukkan nama lengkap"></div><div class="field"><label>NPM</label><input class="control" id="login-id" inputmode="numeric" required placeholder="Masukkan NPM"></div><div class="field"><label>Password</label><div class="password-wrap"><input class="control" id="login-password" type="password" required placeholder="Masukkan password"><button class="password-toggle" type="button" data-action="toggle-password" aria-label="Tampilkan password">${I('eye')}</button></div><div class="login-options"><label class="remember"><input type="checkbox"> Ingat saya</label><a href="#" data-action="forgot">Lupa Password?</a></div></div>`}
        <button type="submit" class="btn btn-primary login-submit">${adminMode?'Masuk':'Masuk'} ${I('arrow')}</button>
      </form>
      ${adminMode?'':`<div class="login-divider">atau</div><a href="#" class="admin-link" data-action="admin-login">Login sebagai Admin ${I('arrow',13)}</a>`}
      <div class="login-note">Dengan masuk, Anda menyetujui kebijakan penggunaan layanan<br>Universitas Nusantara.</div>
    </div></section>
  </div>`;
}
function render(animate = false) {
  const pages = { home:studentHome, create:createReport, mine:myReports, detail:detailPage, notifications:notificationsPage, adminHome, manage:managementPage, handling:handlingPage, profile:profilePage };
  const publicPages = { landing:landingPage, report:publicReportForm, track:trackingPage };
  document.getElementById('app').innerHTML = currentPage === 'login'
    ? loginPage(role==='admin')
    : publicPages[currentPage]
      ? publicPages[currentPage]()
      : shell(pages[currentPage]());
  if(animate){
    const page=document.querySelector('.content, .public-main, .public-form-page, .public-track-page, .login-form-wrap');
    page?.classList.add('page-enter');
  }
}
function showToast(message) {
  const region = document.getElementById('toast-region');
  region.innerHTML = `<div class="toast">${I('check')}<span>${message}</span></div>`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>region.innerHTML='', 3400);
}
function showModal(title, message, confirmText, onConfirm) {
  const node = document.createElement('div');
  node.className = 'modal-backdrop';
  node.innerHTML = `<section class="modal" role="dialog" aria-modal="true"><h2>${title}</h2><p>${message}</p><div class="modal-actions"><button class="btn btn-outline" data-modal-cancel>Batal</button><button class="btn btn-primary" data-modal-confirm>${confirmText}</button></div></section>`;
  document.body.appendChild(node);
  node.addEventListener('click', e => {
    if (e.target === node || e.target.closest('[data-modal-cancel]')) node.remove();
    if (e.target.closest('[data-modal-confirm]')) { node.remove(); onConfirm(); }
  });
}
function openReport(id, admin = false) {
  selectedReport = reports.find(r=>r.id===id) || reports[0];
  selectedImage = selectedReport.image || '';
  currentPage = admin ? 'handling' : 'detail';
  render(true);
}
function applyMineFilters() {
  const query = (document.getElementById('report-search')?.value || '').toLowerCase();
  const status = document.getElementById('status-filter')?.value || '';
  const category = document.getElementById('category-filter')?.value || '';
  const list = reports.filter(r=>r.reporter===currentUser.name && (!status || r.status===status) && (!category || r.category===category) && (!query || `${r.id} ${r.title} ${r.location}`.toLowerCase().includes(query)));
  const target = document.getElementById('my-report-list');
  target.innerHTML = list.length ? list.map(reportCard).join('') : `<section class="panel empty-state"><div class="empty-illustration">${I('search')}</div><h3>Laporan tidak ditemukan</h3><p>Coba ubah kata kunci atau filter yang dipilih.</p></section>`;
}
function applyAdminFilters() {
  const query=(document.getElementById('admin-search')?.value||'').toLowerCase();
  const status=document.getElementById('admin-status')?.value||'';
  const priority=document.getElementById('admin-priority')?.value||'';
  const rows=reports.filter(r=>(!status||r.status===status)&&(!priority||r.urgency===priority)&&(!query||`${r.id} ${r.reporter} ${r.title} ${r.facility} ${r.location}`.toLowerCase().includes(query)));
  document.getElementById('admin-table').innerHTML=rows.length?rows.map(adminRow).join(''):`<tr><td colspan="8"><div class="empty-state"><div class="empty-illustration">${I('search')}</div><h3>Laporan tidak ditemukan</h3><p>Coba ubah kata kunci atau filter yang dipilih.</p></div></td></tr>`;
}
document.addEventListener('click', e => {
  const publicCard=e.target.closest('[data-public-report]');
  if(publicCard){
    selectedReport=reports.find(report=>report.id===publicCard.dataset.publicReport);
    if(selectedReport){selectedImage=selectedReport.image||'';setPage('track');}
    return;
  }
  const pageButton=e.target.closest('[data-page]');
  if(pageButton){e.preventDefault();document.getElementById('sidebar')?.classList.remove('open');document.getElementById('sidebar-overlay')?.classList.remove('active');setPage(pageButton.dataset.page);return;}
  const reportButton=e.target.closest('[data-report]');
  if(reportButton){openReport(reportButton.dataset.report,role==='admin');return;}
  const action=e.target.closest('[data-action]')?.dataset.action;
  if(!action)return;
  if(action==='menu'){document.getElementById('sidebar')?.classList.toggle('open');document.getElementById('sidebar-overlay')?.classList.toggle('active');}
  if(action==='close-sidebar'){document.getElementById('sidebar')?.classList.remove('open');document.getElementById('sidebar-overlay')?.classList.remove('active');}
  if(action==='logout'){role='student';setPage('login');}
  if(action==='admin-login'){e.preventDefault();role='admin';setPage('login');}
  if(action==='student-login'){role='student';setPage('login');}
  if(action==='focus-ticket'){const search=document.querySelector('.ticket-search');search?.classList.add('search-open','search-focused');search?.scrollIntoView({behavior:'smooth',block:'center'});document.getElementById('ticket-id')?.focus();}
  if(action==='toggle-ticket-search'){document.querySelector('.ticket-search')?.classList.toggle('search-open');document.getElementById('ticket-id')?.focus();}
  if(action==='remove-public-photo'){
    selectedImage='';
    const input=document.getElementById('public-photo-input');
    if(input)input.value='';
    document.getElementById('public-photo-preview')?.classList.add('hidden');
    document.getElementById('public-upload-zone')?.classList.remove('hidden');
  }
  if(action==='toggle-password'){const field=document.getElementById('login-password');field.type=field.type==='password'?'text':'password';e.currentTarget.innerHTML=I(field.type==='password'?'eye':'eyeOff');}
  if(action==='forgot'){e.preventDefault();showToast('Silakan hubungi helpdesk kampus untuk reset password.');}
  if(action==='read-all'){document.querySelectorAll('.notification-item.unread').forEach(x=>x.classList.remove('unread'));document.querySelectorAll('.unread-dot').forEach(x=>x.remove());showToast('Semua notifikasi ditandai sudah dibaca.');}
  if(action==='export'){showToast('Data laporan siap diekspor.');}
  if(action==='edit-report'){openReport(e.target.closest('[data-id]').dataset.id,true);}
  if(action==='save-note'){const note=document.getElementById('handling-note').value.trim();if(!note){showToast('Tambahkan catatan sebelum menyimpan.');return;}showToast('Catatan penanganan berhasil disimpan.');}
  if(action==='update-report'){
    try {
      const statusChanged=updateReportStatus(selectedReport,document.getElementById('handling-status').value,document.getElementById('handling-priority').value);
      render(true);
      showToast(statusChanged?'Status laporan berhasil diperbarui.':'Perubahan laporan berhasil disimpan.');
    } catch(error) {
      showToast(error.message);
    }
  }
  if(action==='save-profile'){
    const name=document.getElementById('profile-name').value.trim();
    const npm=document.getElementById('profile-npm').value.trim();
    if(!name||!npm){showToast('Nama lengkap dan NPM wajib diisi.');return;}
    const updatedUser={...currentUser,name,npm,email:document.getElementById('profile-email').value.trim()};
    const updatedReports=reports.map(report=>report.reporter===currentUser.name?{...report,reporter:name}:report);
    if(!writeStoredValue(userStorageKey,JSON.stringify(updatedUser),'Data akun')){
      showToast('Profil belum dapat disimpan. Periksa pengaturan penyimpanan browser dan coba lagi.');
      return;
    }
    if(!writeStoredValue(reportsStorageKey,JSON.stringify(updatedReports),'Data laporan')){
      const rolledBack=writeStoredValue(userStorageKey,JSON.stringify(currentUser),'Pemulihan data akun');
      showToast(rolledBack
        ?'Perubahan profil dibatalkan karena laporan tidak dapat disimpan.'
        :'Profil dan laporan tidak tersimpan secara konsisten. Muat ulang setelah penyimpanan browser tersedia.');
      return;
    }
    currentUser=updatedUser;
    reports=updatedReports;
    render(true);
    showToast('Nama dan NPM berhasil diperbarui.');
  }
});
document.addEventListener('input',e=>{
  if(e.target.id==='report-search')applyMineFilters();
  if(e.target.id==='admin-search')applyAdminFilters();
  if(e.target.id==='profile-name'){
    const preview=document.getElementById('profile-preview-name');
    const avatar=document.getElementById('profile-avatar');
    if(preview)preview.textContent=e.target.value.trim();
    if(avatar)avatar.textContent=userInitials(e.target.value.trim());
  }
});
document.addEventListener('change',e=>{
  if(e.target.id==='anonymous-report'){
    const reporterField=document.getElementById('public-reporter-field');
    const reporterInput=document.getElementById('public-reporter');
    if(reporterField&&reporterInput){
      reporterField.classList.toggle('hidden',e.target.checked);
      reporterInput.required=!e.target.checked;
    }
  }
  if(['status-filter','category-filter'].includes(e.target.id))applyMineFilters();
  if(['admin-status','admin-priority'].includes(e.target.id))applyAdminFilters();
  if(e.target.matches('.admin-status-select')){
    const report=reports.find(item=>item.id===e.target.dataset.statusReport);
    if(!report){showToast('Laporan tidak ditemukan. Muat ulang halaman dan coba lagi.');return;}
    try {
      const changed=updateReportStatus(report,e.target.value);
      applyAdminFilters();
      showToast(changed?'Status laporan berhasil diperbarui.':'Status laporan tidak berubah.');
    } catch(error) {
      e.target.value=report.status;
      showToast(error.message);
    }
  }
  if(e.target.id==='photo-input'){
    const file=e.target.files[0];
    if(file){
      if(file.size>5*1024*1024){showToast('Ukuran foto maksimal 5 MB.');e.target.value='';return;}
      compressImageFile(file).then(imageData=>{ selectedImage=imageData; document.getElementById('upload-label').textContent=file.name; }).catch(err=>{ showToast(err.message); e.target.value=''; });

    }
  }
  if(e.target.id==='public-photo-input'){
    const file=e.target.files[0];
    if(file){
      if(file.size>5*1024*1024){showToast('Ukuran foto maksimal 5 MB.');e.target.value='';return;}
      if(!file.type.startsWith('image/')){showToast('Pilih file gambar JPG, PNG, atau WEBP.');e.target.value='';return;}
      compressImageFile(file).then(imageData=>{
        selectedImage=imageData;
        const preview=document.getElementById('public-photo-preview');
        document.getElementById('public-photo-image').src=selectedImage;
        document.getElementById('public-photo-name').textContent=file.name;
        preview.classList.remove('hidden');
        document.getElementById('public-upload-zone').classList.add('hidden');
      }).catch(error=>{
        showToast(error.message);
        e.target.value='';
      });
    }
  }
});
document.addEventListener('keydown',e=>{
  if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-public-report]')){
    e.preventDefault();
    e.target.click();
  }
});
document.addEventListener('dragover',e=>{
  if(e.target.closest('#public-upload-zone'))e.preventDefault();
});
document.addEventListener('drop',e=>{
  const zone=e.target.closest('#public-upload-zone');
  if(!zone)return;
  e.preventDefault();
  const file=e.dataTransfer.files[0];
  if(!file)return;
  const input=document.getElementById('public-photo-input');
  const transfer=new DataTransfer();
  transfer.items.add(file);
  input.files=transfer.files;
  input.dispatchEvent(new Event('change',{bubbles:true}));
});
document.addEventListener('submit',e=>{
  if(e.target.id==='ticket-lookup'){
    e.preventDefault();
    const ticketInput=document.getElementById('ticket-id');
    const ticketId=(ticketInput?.value || '').trim().toUpperCase();
    if(!ticketId){
      showToast('Masukkan ID tiket terlebih dahulu.');
      ticketInput?.focus();
      return;
    }
    const report=reports.find(item=>item.id.toUpperCase()===ticketId);
    if(!report){
      showToast('ID tiket tidak ditemukan. Periksa kembali nomor tiket Anda.');
      ticketInput?.focus();
      return;
    }
    selectedReport=report;
    selectedImage=report.image||'';
    setPage('track');
    return;
  }
  if(e.target.id==='public-report-form'){
    e.preventDefault();
    const form=e.target;
    const categorySelect=form.querySelector('#public-category');
    const category=categorySelect?.value || '';
    const buildingSelect=form.querySelector('#public-building');
    const building=buildingSelect?.value || '';
    const locationInput=form.querySelector('#public-location');
    const details=(locationInput?.value || '').trim();
    const titleInput=form.querySelector('#public-title');
    const title=(titleInput?.value || '').trim();
    const descTextarea=form.querySelector('#public-description');
    const description=(descTextarea?.value || '').trim();
    const anonymous=form.querySelector('#anonymous-report')?.checked;
    const reporterInput=form.querySelector('#public-reporter');
    const reporter=anonymous?'Anonim':(reporterInput?.value || '').trim();

    if(!category){
      showToast('Pilih kategori fasilitas terlebih dahulu.');
      categorySelect?.focus();
      return;
    }
    if(!building){
      showToast('Pilih gedung atau area lokasi fasilitas.');
      buildingSelect?.focus();
      return;
    }
    if(!details || details.length < 3){
      showToast('Isi detail lokasi dengan jelas.');
      locationInput?.focus();
      return;
    }
    if(!title || title.length < 3){
      showToast('Isi ringkasan kerusakan dengan jelas.');
      titleInput?.focus();
      return;
    }
    if(!description || description.length < 5){
      showToast('Deskripsi kerusakan harus diisi.');
      descTextarea?.focus();
      return;
    }
    if(!anonymous && (!reporter || reporter.length < 2)){
      showToast('Nama pelapor wajib diisi.');
      reporterInput?.focus();
      return;
    }

    showModal('Kirim laporan sekarang?','Pastikan lokasi dan deskripsi sudah sesuai. Setelah dikirim, simpan ID tiket untuk memantau progresnya.','Ya, kirim laporan',()=>{
      const submitButton=form.querySelector('button[type="submit"]');
      const originalLabel=submitButton ? submitButton.innerHTML : '';
      if(submitButton){
        submitButton.disabled=true;
        submitButton.setAttribute('aria-busy','true');
        submitButton.innerHTML='<span class="loading-spinner" aria-hidden="true"></span> Mengirim...';
      }
      setTimeout(()=>{
        const ticketNumber=Math.max(8920,...reports.map(report=>Number(report.id.match(/^RLF-(\d+)$/)?.[1]||0)))+1;
        const createdAt=new Date();
        const newReport={
          id:`RLF-${ticketNumber}`,
          title,
          facility:category,
          category,
          location:`${building} · ${details}`,
          date:createdAt.toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}),
          timeAgo:'Baru saja',
          status:'Menunggu Verifikasi',
          urgency:'Sedang',
          reporter,
          anonymous,
          description,
          image:selectedImage,
          history:[{status:'Laporan Diterima',date:createdAt.toLocaleString('id-ID',{dateStyle:'medium',timeStyle:'short'})}]
        };
        reports.unshift(newReport);
        try{
          saveReports();
        }catch(error){
          reports.shift();
          if(submitButton){
            submitButton.disabled=false;
            submitButton.removeAttribute('aria-busy');
            submitButton.innerHTML=originalLabel;
          }
          showToast('Laporan belum dapat disimpan di browser ini.');
          return;
        }
        selectedReport=newReport;
        selectedImage=newReport.image||'';
        setPage('track');
        showToast(`Laporan terkirim. Simpan tiket #${newReport.id} untuk melacaknya.`);
      },250);
    });
    return;
  }
  if(e.target.id==='login-form'){
    e.preventDefault();
    let userSaved=true;
    if(role==='admin'){
      const adminInput=document.getElementById('admin-name');
      const passInput=document.getElementById('login-password');
      const name=(adminInput?.value || '').trim();
      const pass=(passInput?.value || '').trim();
      if(!name){
        showToast('Nama admin wajib diisi.');
        adminInput?.focus();
        return;
      }
      if(!pass){
        showToast('Password wajib diisi.');
        passInput?.focus();
        return;
      }
      currentAdminName=name;
    } else {
      const nameInput=document.getElementById('login-name');
      const npmInput=document.getElementById('login-id');
      const passInput=document.getElementById('login-password');
      const name=(nameInput?.value || '').trim();
      const npm=(npmInput?.value || '').trim();
      const pass=(passInput?.value || '').trim();
      if(!name){
        showToast('Nama lengkap wajib diisi.');
        nameInput?.focus();
        return;
      }
      if(!npm){
        showToast('NPM wajib diisi.');
        npmInput?.focus();
        return;
      }
      if(!pass){
        showToast('Password wajib diisi.');
        passInput?.focus();
        return;
      }
      const email=name===currentUser.name&&npm===currentUser.npm?currentUser.email:'';
      const nextUser={...currentUser,name,npm,email};
      userSaved=writeStoredValue(userStorageKey,JSON.stringify(nextUser),'Data akun');
      currentUser=nextUser;
    }
    currentPage=role==='admin'?'adminHome':'home';
    render(true);
    showToast(role==='student'&&!userSaved
      ?'Login berhasil, tetapi data akun tidak tersimpan di browser ini.'
      :`Selamat datang, ${role==='admin'?currentAdminName:currentUser.name}!`);
  }
  if(e.target.id==='report-form'){
    e.preventDefault();
    const form=e.target;
    const reporterInput=form.querySelector('#reporter-name');
    const reporter=(reporterInput?.value || '').trim();
    const campusSelect=form.querySelector('#report-campus-location');
    const campusLoc=campusSelect?.value || '';
    const roomInput=form.querySelector('#report-location-detail') || form.querySelector('input[placeholder^="Contoh: Gedung"]');
    const roomLoc=(roomInput?.value || '').trim();
    const catSelect=form.querySelector('#report-category') || form.querySelectorAll('select')[1];
    const cat=catSelect?.value || '';
    const titleInput=form.querySelector('#report-title') || form.querySelector('input[placeholder^="Contoh: Lampu"]');
    const title=(titleInput?.value || '').trim();
    const descTextarea=form.querySelector('#report-description') || form.querySelector('textarea');
    const descVal=(descTextarea?.value || '').trim();

    if(!reporter){
      showToast('Nama pelapor wajib diisi.');
      reporterInput?.focus();
      return;
    }
    if(!campusLoc){
      showToast('Pilih lokasi kampus fasilitas.');
      campusSelect?.focus();
      return;
    }
    if(!roomLoc){
      showToast('Gedung / ruangan wajib diisi.');
      roomInput?.focus();
      return;
    }
    if(!cat){
      showToast('Pilih kategori fasilitas.');
      catSelect?.focus();
      return;
    }
    if(!title){
      showToast('Nama fasilitas / jenis kerusakan wajib diisi.');
      titleInput?.focus();
      return;
    }
    if(!descVal){
      showToast('Deskripsi kerusakan wajib diisi.');
      descTextarea?.focus();
      return;
    }

    showModal('Kirim laporan sekarang?','Pastikan informasi dan lokasi kerusakan sudah benar. Laporan akan dikirim ke tim fasilitas untuk diverifikasi.','Ya, kirim laporan',()=>{
      const submitButton=form.querySelector('button[type="submit"]');
      const originalLabel=submitButton?submitButton.innerHTML:'';
      if(submitButton){
        submitButton.disabled=true;
        submitButton.setAttribute('aria-busy','true');
        submitButton.innerHTML='<span class="loading-spinner" aria-hidden="true"></span> Mengirim...';
      }
      setTimeout(()=>{
        const location=campusLoc?`${campusLoc} · ${roomLoc}`:roomLoc;
        const lapMatches=reports.map(r=>Number(r.id.match(/^LAP-\d+-(\d+)$/)?.[1]||0));
        const nextId=(lapMatches.length?Math.max(84,...lapMatches):84)+1;
        const now=new Date();
        const dateStr=now.toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'});
        const newReport={
          id:`LAP-2026-${String(nextId).padStart(3,'0')}`,
          title,
          facility:cat,
          location,
          date:dateStr,
          status:'Menunggu Verifikasi',
          urgency:form.querySelector('input[name="urgency"]:checked')?.value||'Sedang',
          reporter,
          category:cat,
          description:descVal,
          image:selectedImage,
          history:[{status:'Laporan dikirim',date:dateStr}]
        };
        reports.unshift(newReport);
        try{
          saveReports();
        }catch(error){
          reports.shift();
          if(submitButton){
            submitButton.disabled=false;
            submitButton.removeAttribute('aria-busy');
            submitButton.innerHTML=originalLabel;
          }
          showToast('Laporan belum dapat disimpan di browser. Coba lagi.');
          return;
        }
        selectedReport=newReport;
        currentUser.name=reporter;
        selectedImage=selectedReport.image||'';
        currentPage='detail';
        render(true);
        showToast('Laporan berhasil dikirim! Kami akan memberi kabar saat status diperbarui.');
      },250);
    });
  }
});
document.addEventListener('click',e=>{if(e.target.closest('[data-page="create"]')&&currentPage==='create')return;});
window.addEventListener('popstate',()=>{
  if(history.state?.role==='student'||history.state?.role==='admin')role=history.state.role;
  const route=location.hash.match(/^#\/track\/(.+)$/);
  if(route){
    let report;
    try {
      const reportId=decodeURIComponent(route[1]);
      report=reports.find(item=>item.id===reportId);
    } catch(error) {
      console.warn('ID tiket pada URL tidak valid.',error);
    }
    if(report){selectedReport=report;selectedImage=report.image||'';currentPage='track';}
    else currentPage='landing';
  }else if(location.hash==='#/report')currentPage='report';
  else if(['home','create','mine','detail','notifications','adminHome','manage','handling','profile','login'].includes(history.state?.page)){
    currentPage=history.state.page;
  }else currentPage='login';
  render(true);
});
const initialTrack=location.hash.match(/^#\/track\/(.+)$/);
if(initialTrack){
  let report;
  try {
    const reportId=decodeURIComponent(initialTrack[1]);
    report=reports.find(item=>item.id===reportId);
  } catch(error) {
    console.warn('ID tiket pada URL tidak valid.',error);
  }
  if(report){selectedReport=report;selectedImage=report.image||'';currentPage='track';}
}else if(location.hash==='#/report')currentPage='report';
if(!history.state?.page)history.replaceState({page:currentPage,role},'',location.href);
render();
if(storageWarning)showToast('Sebagian data browser tidak dapat dibaca atau disimpan. Aplikasi tetap dapat digunakan, tetapi perubahan mungkin tidak tersimpan.');
