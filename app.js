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
let reportCategories = null;
let reportCategoriesPromise = null;
let reportFacilities = null;
let reportFacilitiesPromise = null;
let storageWarning = false;
let loginMode = 'student';
let passwordResetRequestRequired = false;
let authSyncRevision = 0;
let authSyncInFlight = null;
let authTransitionRevision = 0;
let authMutationQueue = Promise.resolve();
let authInitializationPending = true;
let adminReports = [];
let adminReportsLoading = false;
let adminReportsError = '';
let adminReportsLoadedFor = '';
let adminReportsLoadPromise = null;
let authorizedTrackingTicket = '';
const authCallbackParams = new URLSearchParams(
  `${window.location.search}&${window.location.hash.slice(1)}`
);
const authEmailRedirectUrl = 'https://reycardolionelalfaroyamlean1-prog.github.io/RuangLaporFasilitas/';
let passwordRecoveryRequired = window.supabaseRecoveryCallback === true ||
  authCallbackParams.get('type') === 'recovery';
let passwordSetupRequired = window.supabaseInviteCallback === true ||
  authCallbackParams.get('type') === 'invite' ||
  passwordRecoveryRequired;
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
  const handlingNotes = Array.isArray(report.handlingNotes)
    ? report.handlingNotes.filter(entry => entry && typeof entry.note === 'string' && typeof entry.date === 'string')
      .map(entry => ({ note: entry.note, date: entry.date }))
    : [];
  return {
    ...report,
    image: typeof report.image === 'string' ? report.image : '',
    timeAgo: typeof report.timeAgo === 'string' ? report.timeAgo : '',
    urgency: ['Rendah','Sedang','Tinggi'].includes(report.urgency) ? report.urgency : 'Sedang',
    status: reportStatuses.includes(report.status) ? report.status : 'Menunggu Verifikasi',
    history,
    handlingNotes,
    assignedTo: typeof report.assignedTo === 'string' ? report.assignedTo : 'Belum ditentukan',
    repairStartedAt: typeof report.repairStartedAt === 'string' ? report.repairStartedAt : '',
    repairCompletedAt: typeof report.repairCompletedAt === 'string' ? report.repairCompletedAt : '',
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
  id: null,
  name: '',
  npm: '',
  email: '',
  role: '',
};
let currentUser = { ...defaultUser };

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const userInitials = name => name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'M';
function saveReports() {
  if (!writeStoredValue(reportsStorageKey, JSON.stringify(reports), 'Data laporan')) {
    throw new Error('Perubahan laporan tidak dapat disimpan di browser ini.');
  }
}
function databaseIdString(value) {
  const id = typeof value === 'string'
    ? value.trim()
    : typeof value === 'number' && Number.isSafeInteger(value)
      ? String(value)
      : '';
  if (!/^[1-9]\d{0,18}$/.test(id)) return '';
  return BigInt(id) <= 9223372036854775807n ? id : '';
}
function setReportCategoryOptions(state, categories = []) {
  const selects = document.querySelectorAll('#public-category, #report-category');
  for (const select of selects) {
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = state === 'loading'
      ? 'Memuat kategori...'
      : state === 'error'
        ? 'Kategori gagal dimuat. Muat ulang halaman.'
        : state === 'empty'
          ? 'Belum ada kategori tersedia.'
          : select.id === 'public-category'
            ? 'Pilih kategori fasilitas'
            : 'Pilih kategori';
    placeholder.disabled = state === 'loading' || state === 'empty';
    select.replaceChildren(placeholder);
    select.disabled = state === 'loading' || state === 'empty';

    if (state === 'loaded') {
      for (const category of categories) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.categoryName;
        select.append(option);
      }
    }
  }
}
async function loadReportCategories() {
  const selects = document.querySelectorAll('#public-category, #report-category');
  if (!selects.length) return;

  if (reportCategories !== null) {
    setReportCategoryOptions(reportCategories.length ? 'loaded' : 'empty', reportCategories);
    return;
  }

  setReportCategoryOptions('loading');
  try {
    if (!reportCategoriesPromise) {
      reportCategoriesPromise = (async () => {
        if (!window.supabaseClient) {
          throw new Error('Supabase client belum tersedia.');
        }

        const { data, error } = await window.supabaseClient
          .from('categories')
          .select('id, category_name')
          .order('category_name', { ascending: true });

        if (error) throw error;

        return (Array.isArray(data) ? data : [])
          .map(row => ({
            id: databaseIdString(row.id),
            categoryName: typeof row.category_name === 'string' ? row.category_name.trim() : '',
          }))
          .filter(category => category.id && category.categoryName);
      })();
    }

    reportCategories = await reportCategoriesPromise;
    setReportCategoryOptions(reportCategories.length ? 'loaded' : 'empty', reportCategories);
  } catch (error) {
    reportCategoriesPromise = null;
    console.error('Kategori laporan gagal dimuat.', { code: error?.code || 'unknown' });
    setReportCategoryOptions('error');
  }
}
function setReportFacilityOptions(state, facilities = []) {
  const selects = document.querySelectorAll('#public-facility, #report-facility');
  for (const select of selects) {
    const disabled = state === 'loading' || state === 'error' || state === 'empty';
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = state === 'loading'
      ? 'Memuat fasilitas...'
      : state === 'error'
        ? 'Fasilitas gagal dimuat. Muat ulang halaman.'
        : state === 'empty'
          ? 'Belum ada fasilitas tersedia.'
          : 'Pilih fasilitas';
    placeholder.disabled = disabled;
    select.replaceChildren(placeholder);

    if (state === 'loaded') {
      for (const facility of facilities) {
        const option = document.createElement('option');
        option.value = facility.id;
        option.textContent = facility.facilityName;
        select.append(option);
      }
    }

    select.disabled = disabled;
  }
}
async function loadReportFacilities() {
  const selects = document.querySelectorAll('#public-facility, #report-facility');
  if (!selects.length) return;

  if (reportFacilities !== null) {
    setReportFacilityOptions(reportFacilities.length ? 'loaded' : 'empty', reportFacilities);
    return;
  }

  setReportFacilityOptions('loading');
  try {
    if (!reportFacilitiesPromise) {
      reportFacilitiesPromise = (async () => {
        if (!window.supabaseClient) {
          throw new Error('Supabase client belum tersedia.');
        }

        const { data, error } = await window.supabaseClient
          .from('facilities')
          .select('id, facility_name')
          .order('facility_name', { ascending: true });

        if (error) throw error;

        return (Array.isArray(data) ? data : [])
          .map(row => ({
            id: databaseIdString(row.id),
            facilityName: typeof row.facility_name === 'string' ? row.facility_name.trim() : '',
          }))
          .filter(facility => facility.id && facility.facilityName);
      })();
    }

    reportFacilities = await reportFacilitiesPromise;
    setReportFacilityOptions(reportFacilities.length ? 'loaded' : 'empty', reportFacilities);
  } catch (error) {
    reportFacilitiesPromise = null;
    console.error('Fasilitas laporan gagal dimuat.', { code: error?.code || 'unknown' });
    setReportFacilityOptions('error');
  }
}
function reportCategoryName(categoryId) {
  return reportCategories?.find(category => category.id === categoryId)?.categoryName || '';
}
function reportFacilityName(facilityId) {
  return reportFacilities?.find(facility => facility.id === facilityId)?.facilityName || '';
}
const reportSubmitErrorMessages = {
  invalid_content_type: 'Format permintaan tidak valid. Muat ulang halaman dan coba lagi.',
  invalid_json: 'Data laporan tidak terbaca. Periksa isian dan coba lagi.',
  invalid_request: 'Data laporan tidak valid. Periksa isian dan coba lagi.',
  unexpected_field: 'Data laporan mengandung field yang tidak didukung. Muat ulang halaman.',
  invalid_category_id: 'Kategori tidak tersedia. Pilih kategori kembali.',
  invalid_facility_id: 'Fasilitas tidak tersedia. Pilih fasilitas kembali.',
  reference_lookup_failed: 'Kategori atau fasilitas belum dapat diverifikasi. Coba lagi nanti.',
  invalid_title: 'Judul laporan harus diisi dengan benar.',
  invalid_description: 'Deskripsi laporan harus diisi dengan benar.',
  invalid_location_detail: 'Detail lokasi harus diisi dengan benar.',
  report_status_unavailable: 'Status awal laporan belum tersedia. Silakan hubungi pengelola.',
  ticket_generation_failed: 'Nomor tiket belum dapat dibuat. Coba lagi.',
  submission_failed: 'Laporan belum dapat disimpan. Periksa koneksi dan coba lagi.',
  payload_too_large: 'Data laporan terlalu besar. Kurangi panjang isian dan coba lagi.',
};
async function submitReportToSupabase(payload) {
  if (!window.supabaseClient) {
    throw new Error('Koneksi Supabase belum tersedia. Muat ulang halaman dan coba lagi.');
  }

  const { data, error } = await window.supabaseClient.functions.invoke('submit-report', { body: payload });
  if (error) {
    let errorCode = '';
    if (error.context instanceof Response) {
      try {
        const responseBody = await error.context.clone().json();
        if (typeof responseBody?.error === 'string') errorCode = responseBody.error;
      } catch {
        errorCode = '';
      }
    }
    const errorMessage = Object.prototype.hasOwnProperty.call(reportSubmitErrorMessages, errorCode)
      ? reportSubmitErrorMessages[errorCode]
      : 'Laporan belum dapat dikirim ke server. Coba lagi.';
    throw new Error(errorMessage);
  }

  const createdAt = typeof data?.created_at === 'string' ? new Date(data.created_at) : null;
  if (
    typeof data?.ticket_number !== 'string' ||
    !/^RLF-\d{10}$/.test(data.ticket_number) ||
    typeof data?.tracking_token !== 'string' ||
    !/^[a-f0-9]{64}$/i.test(data.tracking_token) ||
    data.status !== 'Menunggu Verifikasi' ||
    !createdAt ||
    !Number.isFinite(createdAt.getTime())
  ) {
    throw new Error('Respons server belum berisi nomor tiket dan kunci pelacakan yang valid. Laporan mungkin sudah diterima; hubungi pengelola sebelum mencoba ulang.');
  }

  return {
    ticketNumber: data.ticket_number,
    trackingToken: data.tracking_token,
    status: data.status,
    createdAt,
  };
}
function submitReportForm(form, payload, createLocalReport, openReportPage) {
  if (form.dataset.submissionPending === 'true') return;
  form.dataset.submissionPending = 'true';
  const notice = [
    'Laporan tahap ini dikirim secara anonim. Nama pelapor tidak disimpan di Supabase.',
    selectedImage ? 'Foto yang dipilih belum disimpan di Supabase.' : '',
  ].filter(Boolean).join(' ');

  showModal('Kirim laporan sekarang?', notice, 'Ya, kirim laporan', async () => {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalLabel = submitButton ? submitButton.innerHTML : '';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute('aria-busy', 'true');
      submitButton.innerHTML = '<span class="loading-spinner" aria-hidden="true"></span> Mengirim...';
    }

    let savedReport;
    try {
      savedReport = await submitReportToSupabase(payload);
    } catch (error) {
      form.dataset.submissionPending = 'false';
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.removeAttribute('aria-busy');
        submitButton.innerHTML = originalLabel;
      }
      showToast(error.message);
      return;
    }

    const localReport = createLocalReport(savedReport);
    reports.unshift(localReport);
    let cacheSaved = true;
    try {
      saveReports();
    } catch (error) {
      cacheSaved = false;
      console.warn('Laporan sudah tersimpan di Supabase, tetapi salinan lokal tidak dapat diperbarui.', error);
    }

    selectedReport = localReport;
    selectedImage = localReport.image || '';
    openReportPage();
    const trackingMessage = [
      `Laporan tersimpan di Supabase dengan tiket <strong>${escapeHTML(savedReport.ticketNumber)}</strong>.`,
      '<br>Simpan kunci rahasia ini. Kunci tidak dapat ditampilkan kembali:',
      `<br><code>${escapeHTML(savedReport.trackingToken)}</code>`,
      '<br>Untuk melacak, masukkan nomor tiket dan kunci tersebut.',
      selectedImage ? '<br>Foto belum tersimpan di Supabase.' : '',
      cacheSaved ? '' : '<br>Salinan lokal tidak tersimpan.',
    ].filter(Boolean).join('');
    form.dataset.submissionPending = 'false';
    showModal('Simpan kunci pelacakan', trackingMessage, 'Saya sudah menyimpannya', () => {});
  }, () => {
    form.dataset.submissionPending = 'false';
  });
}
async function trackReportFromSupabase(ticketNumber, trackingToken) {
  if (!window.supabaseClient) {
    throw new Error('Koneksi Supabase belum tersedia. Muat ulang halaman dan coba lagi.');
  }
  const { data, error } = await window.supabaseClient.functions.invoke('track-report', {
    body: { ticket_number: ticketNumber, tracking_token: trackingToken },
  });
  if (error || !data?.report) {
    console.error('Pelacakan laporan gagal.', {
      code: error?.code,
      status: error?.status,
      responseError: data?.error,
    });
    throw new Error('Laporan tidak ditemukan atau kunci pelacakan tidak sesuai.');
  }
  const row = data.report;
  const createdAt = new Date(row.created_at);
  if (
    row.ticket_number !== ticketNumber ||
    !reportStatuses.includes(row.status) ||
    typeof row.title !== 'string' ||
    typeof row.description !== 'string' ||
    typeof row.location_detail !== 'string' ||
    !Number.isFinite(createdAt.getTime())
  ) {
    throw new Error('Data pelacakan belum dapat dibaca. Coba lagi nanti.');
  }
  selectedReport = {
    id: row.ticket_number,
    title: row.title,
    category: row.category || '',
    facility: row.facility || row.category || 'Fasilitas',
    location: row.location_detail,
    date: createdAt.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
    status: row.status,
    reporter: 'Anonim',
    description: row.description,
    image: '',
    history: [{
      status: row.status,
      date: createdAt.toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
    }],
  };
  selectedImage = '';
  authorizedTrackingTicket = ticketNumber;
  setPage('track');
}
function mapAdminReport(row) {
  const createdAt = new Date(row.created_at);
  const date = Number.isFinite(createdAt.getTime())
    ? createdAt.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
    : '';
  return {
    id: row.ticket_number,
    title: row.title,
    facility: row.facility || row.category || 'Fasilitas',
    category: row.category || '',
    location: row.location_detail || '',
    date,
    status: row.status,
    urgency: '',
    reporter: 'Anonim',
    description: row.description || '',
    image: row.photo_url || '',
    statusId: row.status_id,
    history: [{
      status: row.status,
      date: Number.isFinite(createdAt.getTime())
        ? createdAt.toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })
        : date,
    }],
  };
}
async function loadAdminReports(force = false) {
  const userId = currentUser.id;
  if (!userId || role !== 'admin') return false;
  if (!force && adminReportsLoadedFor === userId) return true;
  if (adminReportsLoadPromise) return adminReportsLoadPromise;

  adminReportsLoading = true;
  adminReportsError = '';
  render(true);
  const promise = (async () => {
    const { data, error } = await window.supabaseClient.functions.invoke('admin-reports', {
      body: { action: 'list' },
    });
    if (error || !Array.isArray(data?.reports)) {
      console.error('Laporan Admin gagal dimuat.', {
        code: error?.code,
        status: error?.status,
        responseError: data?.error,
      });
      throw new Error('Laporan Supabase belum dapat dimuat.');
    }
    if (role !== 'admin' || currentUser.id !== userId) return false;
    adminReports = data.reports.map(mapAdminReport);
    adminReportsLoadedFor = userId;
    return true;
  })();
  adminReportsLoadPromise = promise;
  try {
    return await promise;
  } catch (error) {
    if (role === 'admin' && currentUser.id === userId) {
      adminReportsError = error.message;
    }
    return false;
  } finally {
    if (adminReportsLoadPromise === promise) {
      adminReportsLoadPromise = null;
      adminReportsLoading = false;
      render(true);
    }
  }
}
async function persistAdminReportStatus(report, status) {
  if (!currentUser.id || role !== 'admin') {
    throw new Error('Sesi Admin tidak valid. Silakan masuk kembali.');
  }
  const { data, error } = await window.supabaseClient.functions.invoke('admin-reports', {
    body: { action: 'update_status', ticket_number: report.id, status },
  });
  if (error || data?.report?.status !== status) {
    console.error('Status laporan gagal disimpan.', {
      code: error?.code,
      status: error?.status,
      responseError: data?.error,
    });
    throw new Error('Status laporan belum dapat disimpan ke Supabase.');
  }
  report.status = data.report.status;
  report.statusId = data.report.status_id;
}
function adminReportsNotice() {
  if (adminReportsLoading) {
    return '<section class="panel"><p>Memuat laporan dari Supabase...</p></section>';
  }
  if (adminReportsError) {
    return `<section class="panel"><p>${escapeHTML(adminReportsError)}</p><button class="btn btn-outline btn-small" data-action="reload-admin-reports">Muat ulang</button></section>`;
  }
  return '';
}
function authorizedPage(page) {
  const publicPages = ['landing', 'report', 'track'];
  const adminPages = ['adminHome', 'manage', 'handling'];
  const studentPages = ['home', 'create', 'mine', 'detail', 'profile'];
  if (page === 'login' && currentUser.id) {
    page = role === 'admin' ? 'adminHome' : 'home';
  } else if (publicPages.includes(page) || page === 'login') {
    return page;
  } else if (!currentUser.id) {
    page = 'login';
  } else if (adminPages.includes(page) && role !== 'admin') {
    page = 'home';
  } else if (studentPages.includes(page) && role !== 'student') {
    page = 'adminHome';
  } else if (page === 'notifications' && !['student', 'admin'].includes(role)) {
    page = 'login';
  } else if (![...adminPages, ...studentPages, 'notifications'].includes(page)) {
    page = role === 'admin' ? 'adminHome' : 'home';
  }
  return page;
}
function setPage(page) {
  page = authorizedPage(page);
  currentPage = page;
  if (page === 'create' || page === 'report') selectedImage = '';
  if (page === 'track' && selectedReport) {
    history.pushState({ page, reportId:selectedReport.id }, '', `#/track/${encodeURIComponent(selectedReport.id)}`);
  } else {
    history.pushState({ page }, '', page === 'landing' ? `${location.pathname}${location.search}` : `#/${page}`);
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
  return `<header class="topbar"><div class="topbar-left"><button class="icon-button mobile-menu" data-action="menu" aria-label="Buka menu">${I('menu')}</button><div><div class="eyebrow">Universitas Musamus</div><div class="top-title">${title}</div></div></div><div class="topbar-right"><button class="icon-button ${currentPage==='notifications'?'active':''}" data-page="notifications" aria-label="Notifikasi" ${currentPage==='notifications'?'aria-current="page"':''}>${I('bell')}<span class="notification-dot"></span></button><div class="top-user"><div class="avatar ${role==='admin'?'admin':''}">${role==='admin'?userInitials(currentAdminName):userInitials(currentUser.name)}</div><div class="user-copy"><strong>${role==='admin'?escapeHTML(currentAdminName):escapeHTML(currentUser.name)}</strong><small>${role==='admin'?'Admin':'Mahasiswa'}</small></div></div></div></header>`;
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
  return `<header class="public-header"><a class="public-brand" href="#" data-page="landing"><span class="public-brand-mark">${I('campus')}</span><span><strong>Ruang Lapor</strong><small>Fasilitas</small></span></a><form class="ticket-search" id="ticket-lookup"><label class="sr-only" for="ticket-id">Nomor tiket</label>${I('search')}<input id="ticket-id" class="control" placeholder="Nomor tiket" required autocomplete="off"><label class="sr-only" for="tracking-token">Kunci pelacakan</label><input id="tracking-token" class="control" type="password" placeholder="Kunci pelacakan" required autocomplete="off"><button type="submit" class="btn btn-primary btn-small">Lacak</button></form><button class="btn btn-outline public-admin-link" data-action="admin-login">${I('shield')} Login Admin</button><button class="icon-button mobile-menu public-search-toggle" aria-label="Cari tiket" data-action="toggle-ticket-search">${I('search')}</button></header>`;
}
function publicStatus(status) {
  return `<span class="public-status ${statusClass(status)}">${escapeHTML(status)}</span>`;
}
function publicReportCard(report, index) {
  const category = report.category || report.facility || 'Fasilitas';
  const location = report.location || 'Kampus';
  const time = report.timeAgo || ['2 jam yang lalu','5 jam yang lalu','Kemarin','2 hari yang lalu'][index % 4];
  return `<article class="public-report-card">
    <div class="public-thumb">
      ${report.image?`<img src="${escapeHTML(report.image)}" alt="Foto ${escapeHTML(report.title)}">`:`<div class="thumb-placeholder ${category==='Kelistrikan'?'thumb-electric':category==='Furnitur'||category==='Mebel/Furniture'?'thumb-furniture':category==='Plumbing'||category==='Air & Plumbing'?'thumb-water':'thumb-general'}">${I(category==='Kelistrikan'?'wrench':category==='Furnitur'||category==='Mebel/Furniture'?'building':category==='Plumbing'||category==='Air & Plumbing'?'pin':'reports',32)}</div>`}
      <span class="category-tag">${escapeHTML(category)}</span>
    </div>
    <div class="public-report-body"><div class="public-report-title">${escapeHTML(report.title)}</div><div class="public-report-meta">${I('pin',14)}<span>${escapeHTML(location)}</span><span class="public-meta-dot">·</span><span>${escapeHTML(time)}</span></div></div>
    <footer class="public-report-footer">${publicStatus(report.status)}<span class="ticket-reference">${escapeHTML(report.id)}</span></footer>
  </article>`;
}
function landingPage() {
  const latest = [];
  return `<div class="public-site">${publicHeader()}<main class="public-main">
    <section class="public-hero">
      <div class="hero-copy"><span class="hero-kicker">${I('shield',15)} PELAPORAN FASILITAS KAMPUS</span><h1>Laporkan Kerusakan Fasilitas dengan Cepat &amp; Transparan</h1><p>Bantu kami menjaga kenyamanan lingkungan bersama. Tanggapan cepat, status terbuka.</p>
        <div class="hero-actions"><button class="btn btn-primary btn-hero" data-page="report">${I('plus')} Buat Laporan Sekarang</button><button class="btn btn-outline btn-hero" data-action="focus-ticket">${I('search')} Cek Status Tiket</button></div>
        <div class="hero-promise"><span>${I('check',15)} Gratis dan mudah</span><span>${I('clock',15)} Pantau setiap saat</span></div>
      </div>
      <div class="hero-aside"><div class="hero-status-card"><span class="status-card-icon">${I('reports',20)}</span><div><strong>Pelaporan terbuka</strong><small>Setiap laporan dapat dipantau sampai selesai.</small></div><span class="online-indicator"></span></div><div class="hero-aside-note"><span class="hero-note-line"></span><p>Satu laporan kecil dapat membuat ruang belajar lebih nyaman untuk semua.</p></div></div>
    </section>
    <section class="public-metrics" aria-label="Ringkasan laporan"><div class="metric-item"><strong>—</strong><span>Total Laporan Masuk</span></div><div class="metric-item"><strong>—</strong><span>Laporan Selesai</span></div><div class="metric-item"><strong>—</strong><span>Rata-rata Penanganan</span></div></section>
    <section class="public-feed" id="laporan-terkini"><div class="feed-heading"><div><span class="section-kicker">TRANSPARANSI KAMPUS</span><h2>Laporan Terkini</h2><p>Laporan hanya dapat dilihat setelah nomor tiket dan kunci pelacakan diverifikasi.</p></div><button class="btn btn-outline" data-page="report">${I('plus')} Buat laporan</button></div>
      <div class="public-report-grid">${latest.length?latest.map(publicReportCard).join(''):`<div class="public-empty"><div class="empty-illustration">${I('reports')}</div><h3>Ringkasan publik tidak tersedia</h3><p>Masukkan nomor tiket dan kunci pelacakan untuk melihat laporan Anda.</p></div>`}</div>
      <div class="feed-footnote">${I('shield',15)} Informasi pelapor tidak ditampilkan di halaman publik.</div>
    </section>
  </main><footer class="public-footer"><span>© 2026 Ruang Lapor Fasilitas · Universitas Musamus</span><span>Untuk lingkungan kampus yang lebih nyaman.</span></footer></div>`;
}
function publicReportForm() {
  return `<div class="public-site">${publicHeader()}<main class="public-form-page">
    <button class="back-login" data-page="landing">${I('back')} Kembali ke beranda</button>
    <header class="public-form-heading"><span class="hero-kicker">LAPORAN FASILITAS</span><h1>Buat Laporan</h1><p>Isi informasi kerusakan dengan jelas. Tim fasilitas akan menindaklanjuti laporan Anda.</p></header>
    <form class="public-form-card" id="public-report-form">
      <section class="public-form-section"><h2><span class="form-step">01</span> Kategori &amp; Lokasi</h2>
        <div class="public-field-grid">
          <div class="field"><label for="public-category">Kategori <span class="required">*</span></label><select class="control" id="public-category" required><option value="">Memuat kategori...</option></select></div>
          <div class="field"><label for="public-facility">Fasilitas</label><select class="control" id="public-facility"><option value="">Memuat fasilitas...</option></select></div>
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
  </main><footer class="public-footer"><span>© 2026 Ruang Lapor Fasilitas · Universitas Musamus</span><span>Kunci pelacakan hanya ditampilkan setelah laporan berhasil dikirim.</span></footer></div>`;
}
function trackingPage() {
  const report=selectedReport;
  if (!report || report.id !== authorizedTrackingTicket) {
    return `<div class="public-site">${publicHeader()}<main class="public-track-page"><section class="panel empty-state"><h2>Pelacakan memerlukan verifikasi</h2><p>Masukkan nomor tiket dan kunci pelacakan yang diberikan saat laporan dikirim.</p></section></main></div>`;
  }
  const state=['Menunggu Verifikasi','Diproses','Sedang Diperbaiki','Selesai'].includes(report.status)?report.status:'Ditolak';
  const activeIndex=state==='Menunggu Verifikasi'?1:state==='Diproses'?2:state==='Sedang Diperbaiki'?3:state==='Selesai'?4:1;
  const verified=['Diproses','Sedang Diperbaiki','Selesai'].includes(report.status);
  const timeline=[
    {title:'Laporan Diterima',detail:'Laporan berhasil masuk ke sistem.',status:'done'},
    {title:'Diverifikasi Admin',detail:report.status==='Ditolak'?'Laporan ditolak oleh pengelola.':verified?'Laporan valid, diteruskan ke tim teknis.':'Menunggu pemeriksaan oleh pengelola.',status:activeIndex>1?'done':activeIndex===1?'active':'pending'},
    {title:'Petugas Ditugaskan',detail:state==='Sedang Diperbaiki'||state==='Selesai'?'Petugas: Tim Fasilitas Kampus':'Petugas akan ditugaskan setelah laporan diverifikasi.',status:activeIndex>2?'done':activeIndex===2?'active':'pending'},
    {title:'Perbaikan Selesai',detail:state==='Selesai'?'Penanganan laporan telah selesai.':'Bukti perbaikan akan ditampilkan setelah pekerjaan selesai.',status:state==='Selesai'?'done':state==='Sedang Diperbaiki'?'active':'pending'}
  ];
  return `<div class="public-site">${publicHeader()}<main class="public-track-page"><button class="back-login" data-page="landing">${I('back')} Kembali ke beranda</button>
    <header class="track-heading"><div><span class="section-kicker">PELACAKAN LAPORAN</span><h1>Perkembangan Tiket</h1><p>Pantau setiap tahap penanganan laporan fasilitas Anda.</p></div>${publicStatus(report.status)}</header>
    <div class="track-ticket-meta"><span class="ticket-id-large">Tiket #${escapeHTML(report.id)}</span><span>Dikirim ${escapeHTML(report.date)}</span></div>
    <section class="track-summary"><div class="track-summary-copy"><span class="category-tag">${escapeHTML(report.category||report.facility)}</span><h2>${escapeHTML(report.title)}</h2><p>${I('pin',16)} ${escapeHTML(report.location)}</p><p class="track-description">${escapeHTML(report.description)}</p></div>${report.image?`<img class="track-photo" src="${escapeHTML(report.image)}" alt="Foto fasilitas rusak">`:`<div class="track-photo track-photo-placeholder">${I('reports',30)}<span>Foto tidak dilampirkan</span></div>`}</section>
    <section class="timeline-panel"><div class="panel-heading"><div><h2>Status Penanganan</h2><p>Progres laporan dari diterima hingga selesai</p></div></div><div class="public-timeline">${timeline.map(item=>`<div class="public-timeline-item ${item.status}"><span class="public-timeline-node">${item.status==='done'?I('check',13):''}</span><div><strong>${item.title}</strong><p>${item.detail}</p></div></div>`).join('')}</div></section>
    <div class="track-notice">${I('bell',17)} <span>Perubahan status dapat dilihat kembali menggunakan ID tiket <strong>${escapeHTML(report.id)}</strong>.</span></div>
  </main><footer class="public-footer"><span>© 2026 Ruang Lapor Fasilitas · Universitas Musamus</span><span>Untuk lingkungan kampus yang lebih nyaman.</span></footer></div>`;
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
        <div class="field"><label>Kategori fasilitas <span class="required">*</span></label><select class="control" id="report-category" required><option value="">Memuat kategori...</option></select></div>
        <div class="field"><label for="report-facility">Fasilitas</label><select class="control" id="report-facility"><option value="">Memuat fasilitas...</option></select></div>
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
function getAdminReportCounts() {
  const count = status => adminReports.filter(report => report.status === status).length;
  return {
    total: adminReports.length,
    waiting: count('Menunggu Verifikasi'),
    processing: count('Diproses') + count('Sedang Diperbaiki'),
    completed: count('Selesai'),
    rejected: count('Ditolak'),
  };
}
function adminHome() {
  const counts = getAdminReportCounts();
  const categories = new Map();
  const locations = new Map();
  for (const report of adminReports) {
    const category = report.category || 'Kategori lain';
    const location = report.location.split('·')[0].trim() || 'Lokasi lain';
    categories.set(category, (categories.get(category) || 0) + 1);
    locations.set(location, (locations.get(location) || 0) + 1);
  }
  const categoryItems = [...categories.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  const locationItems = [...locations.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  const maxCategory = Math.max(1, ...categoryItems.map(([, count]) => count));
  const maxLocation = Math.max(1, ...locationItems.map(([, count]) => count));
  const statusColors = ['#475569', '#365314', '#65A30D', '#94A3B8', '#CBD5E1'];
  let statusOffset = 0;
  const statusSegments = reportStatuses.map((status, index) => {
    const count = adminReports.filter(report => report.status === status).length;
    const end = statusOffset + (counts.total ? count / counts.total * 100 : 100);
    const segment = `${statusColors[index]} ${statusOffset}% ${end}%`;
    statusOffset = end;
    return segment;
  });
  const donutStyle = counts.total
    ? `conic-gradient(${statusSegments.join(',')})`
    : 'conic-gradient(#e2e8f0 0% 100%)';
  const waitingReports = adminReports.filter(report => report.status === 'Menunggu Verifikasi').slice(0, 5);
  const today = new Date().toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  return `${heading(`Selamat datang, ${escapeHTML(currentAdminName)}`,'Berikut ringkasan laporan fasilitas kampus hari ini.',`<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span class="date-pill">${I('calendar')} ${escapeHTML(today)}</span><button class="btn btn-primary" data-action="add-student">${I('plus')} Tambah Mahasiswa</button></div>`)}
    ${adminReportsNotice()}
    <div class="stats-grid admin-stats-grid">${statCard('Total laporan',String(counts.total),'reports','','Dari Supabase')}${statCard('Menunggu verifikasi',String(counts.waiting),'bell','amber','Status laporan')}${statCard('Dalam penanganan',String(counts.processing),'wrench','blue','Status laporan')}${statCard('Selesai',String(counts.completed),'check','green','Status laporan')}${statCard('Ditolak',String(counts.rejected),'clock','amber','Status laporan')}</div>
    <div class="admin-chart-grid"><section class="panel"><div class="panel-heading"><div><h2>Laporan per Kategori</h2><p>Distribusi laporan dari Supabase</p></div></div><div class="category-bars">${categoryItems.length ? categoryItems.map(([name,count])=>`<div><div class="bar-label"><span>${escapeHTML(name)}</span><strong>${count}</strong></div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(4,count/maxCategory*100)}%"></div></div></div>`).join('') : '<p>Belum ada data kategori.</p>'}</div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Laporan berdasarkan Status</h2><p>Ringkasan dari Supabase</p></div></div><div class="donut-wrap"><div class="donut" style="background:${donutStyle}"></div><div class="legend">${reportStatuses.map((status,index)=>`<div class="legend-item"><span class="legend-dot" style="background:${statusColors[index]}"></span>${escapeHTML(status)} (${adminReports.filter(report=>report.status===status).length})</div>`).join('')}</div></div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Laporan berdasarkan Lokasi</h2><p>Lokasi dengan laporan terbanyak</p></div></div><div class="chart-area">${locationItems.length ? locationItems.map(([name,count])=>`<div class="chart-column"><div class="chart-bar" style="height:${Math.max(8,count/maxLocation*100)}%"></div><span class="chart-label">${escapeHTML(name)}</span></div>`).join('') : '<p>Belum ada data lokasi.</p>'}</div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Perlu Perhatian</h2><p>Laporan menunggu verifikasi</p></div><a class="text-link" data-page="manage">Lihat semua →</a></div><div class="priority-list">${waitingReports.length ? waitingReports.map(report=>`<div class="priority-item"><div class="avatar">A</div><div><strong>${escapeHTML(report.title)}</strong><small>${escapeHTML(report.id)} · ${escapeHTML(report.location)}</small></div>${badge(report.status)}</div>`).join('') : '<p>Tidak ada laporan yang menunggu verifikasi.</p>'}</div></section></div>`;
}
function managementPage() {
  const counts = getAdminReportCounts();
  return `${heading('Manajemen Laporan','Tinjau, verifikasi, dan tindak lanjuti laporan fasilitas.',`<button class="btn btn-outline" data-action="export">${I('reports')} Ekspor</button>`)}
    ${adminReportsNotice()}
    <div class="stats-grid">${statCard('Semua laporan',String(counts.total),'reports','','Dari Supabase')}${statCard('Menunggu verifikasi',String(counts.waiting),'bell','amber','Status laporan')}${statCard('Dalam penanganan',String(counts.processing),'wrench','blue','Status laporan')}${statCard('Selesai',String(counts.completed),'check','green','Status laporan')}</div>
    <section class="panel"><div class="filters"><label class="search-box">${I('search')}<input id="admin-search" class="control" placeholder="Cari ID, pelapor, atau fasilitas..."></label><select class="control" id="admin-status"><option value="">Semua status</option>${reportStatuses.map(x=>`<option>${x}</option>`).join('')}</select><select class="control" id="admin-priority" disabled><option value="">Prioritas belum tercatat</option></select></div>
    <div class="table-wrap"><table><thead><tr><th>ID LAPORAN</th><th>PELAPOR</th><th>FASILITAS</th><th>LOKASI</th><th>TANGGAL</th><th>PRIORITAS</th><th>STATUS</th><th>AKSI</th></tr></thead><tbody id="admin-table">${adminReports.length ? adminReports.map(adminRow).join('') : '<tr><td colspan="8"><div class="empty-state"><h3>Belum ada laporan Supabase</h3></div></td></tr>'}</tbody></table></div></section>`;
}
function adminRow(r) {
  return `<tr data-admin-row="${escapeHTML(r.id)}"><td class="td-main">${escapeHTML(r.id)}</td><td>${escapeHTML(r.reporter)}</td><td><div class="td-main">${escapeHTML(r.title)}</div><div class="td-sub">${escapeHTML(r.facility)}</div></td><td>${escapeHTML(r.location)}</td><td>${escapeHTML(r.date)}</td><td>${r.urgency?urgency(r.urgency):'—'}</td><td><select class="control admin-status-select" data-status-report="${escapeHTML(r.id)}" aria-label="Ubah status laporan ${escapeHTML(r.id)}">${reportStatuses.map(status=>`<option value="${status}" ${r.status===status?'selected':''}>${status}</option>`).join('')}</select></td><td><div class="table-actions"><button class="icon-button" title="Lihat detail" data-report="${escapeHTML(r.id)}">${I('eye',14)}</button><button class="icon-button" title="Detail penanganan" data-action="edit-report" data-id="${escapeHTML(r.id)}">${I('wrench',14)}</button></div></td></tr>`;
}
function handlingPage() {
  const r = selectedReport;
  if (!r) return '<section class="panel"><p>Laporan tidak ditemukan.</p></section>';
  return `${heading('Detail Penanganan',r.id,`<button class="btn btn-outline" data-page="manage">${I('back')} Kembali</button>`)}
    <div class="detail-layout"><div><section class="panel"><div class="detail-photo">${selectedImage?`<img src="${escapeHTML(selectedImage)}" alt="Foto kerusakan">`:`<div class="photo-placeholder">${I('camera',22)}<br>Belum ada foto terlampir</div>`}</div><div class="detail-topline"><div><h2>${escapeHTML(r.title)}</h2><p>${escapeHTML(r.facility)} · ${escapeHTML(r.id)}</p></div>${badge(r.status)}</div><div class="detail-description"><h3>Deskripsi Kerusakan</h3><p>${escapeHTML(r.description)}</p></div><div class="info-grid"><div class="info-item"><small>Pelapor</small><strong>${escapeHTML(r.reporter)}</strong></div><div class="info-item"><small>Lokasi</small><strong>${escapeHTML(r.location)}</strong></div><div class="info-item"><small>Tanggal laporan</small><strong>${escapeHTML(r.date)}</strong></div></div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Status Saat Ini</h2><p>Status laporan yang terakhir tersimpan di Supabase</p></div></div><div class="history-item"><span class="history-dot"></span><div><strong>${escapeHTML(r.status)}</strong><small>${escapeHTML(r.date)}</small></div></div></section></div>
    <div><section class="panel"><div class="panel-heading"><div><h2>Perbarui Status</h2><p>Perubahan disimpan ke Supabase.</p></div></div><div class="field"><label for="handling-status">Status laporan</label><select class="control" id="handling-status">${reportStatuses.map(status=>`<option ${r.status===status?'selected':''}>${status}</option>`).join('')}</select></div><button class="btn btn-primary" style="width:100%;margin-top:18px" data-action="update-report">${I('check')} Simpan Status</button></section></div></div>`;
}
function profilePage() {
  return `${heading('Profil Saya','Kelola informasi akun Anda.') }<div class="form-layout"><section class="form-card"><div class="form-section-title"><span class="step-number">${I('user',13)}</span> Informasi Akun</div><div class="form-grid"><div class="field"><label>Nama lengkap</label><input class="control" id="profile-name" value="${escapeHTML(currentUser.name)}" required></div><div class="field"><label>NPM</label><input class="control" id="profile-npm" value="${escapeHTML(currentUser.npm)}" required></div><div class="field"><label>Email kampus</label><input class="control" id="profile-email" type="email" value="${escapeHTML(currentUser.email)}"></div><div class="field"><label>Program studi</label><input class="control" value="Teknik Informatika"></div><div class="field"><label>Fakultas</label><input class="control" value="Teknik"></div><div class="field"><label>Angkatan</label><input class="control" value="2025"></div></div><div class="form-actions"><button class="btn btn-primary" data-action="save-profile">${I('check')} Simpan Perubahan</button></div></section><aside class="info-aside"><div class="info-box"><div class="avatar" id="profile-avatar" style="width:54px;height:54px;font-size:17px;margin-bottom:12px">${userInitials(currentUser.name)}</div><h3 id="profile-preview-name">${escapeHTML(currentUser.name)}</h3><p>Mahasiswa · Teknik Sipil<br>Universitas Musamus</p></div></aside></div>`;
}
function shell(pageContent) {
  return `<div class="shell">${sidebar()}<div class="sidebar-overlay" id="sidebar-overlay" data-action="close-sidebar"></div><main class="main-area">${topbar()}<div class="content">${pageContent}</div></main></div>`;
}
function loginPage(adminMode = false, setPasswordMode = false, recoveryMode = false, resetRequestMode = false) {
  const passwordFormMode = setPasswordMode || recoveryMode;
  return `<div class="login-screen">
    <section class="login-visual">
      <div class="brand"><div class="brand-mark">${I('campus',20)}</div><div><div class="brand-name">RuangLapor</div><div class="brand-caption">Pelaporan Kerusakan Fasilitas Kampus</div></div></div>
      <div class="visual-copy"><div class="overline">Universitas Musamus</div><h1>Fasilitas baik,<br>kampus nyaman.</h1><p>Laporkan kerusakan fasilitas dengan mudah. Kami membantu menjaga ruang belajar yang aman dan nyaman untuk seluruh civitas akademika.</p><div class="visual-features"><div class="visual-feature"><span class="feature-check">✓</span> Pelaporan mudah dan transparan</div><div class="visual-feature"><span class="feature-check">✓</span> Pantau progres secara real-time</div><div class="visual-feature"><span class="feature-check">✓</span> Tindak lanjut oleh tim profesional</div></div></div>
      <div class="login-footer">© 2026 Universitas Musamus · Layanan Sarana & Prasarana </div>
    </section>
    <section class="login-side"><div class="login-form-wrap">
      <div class="brand"><div class="brand-mark">${I('campus',20)}</div><div><div class="brand-name">RuangLapor</div><div class="brand-caption">Pelaporan Kerusakan Fasilitas Kampus</div></div></div>
      ${resetRequestMode?`<button class="back-login" data-action="back-to-login">${I('back')} Kembali ke login mahasiswa</button>`:adminMode&&!passwordFormMode?`<button class="back-login" data-action="student-login">${I('back')} Kembali ke login mahasiswa</button>`:''}
      <h2>${passwordFormMode?(recoveryMode?'Atur Ulang Password':'Buat Password Akun'):resetRequestMode?'Reset Password':adminMode?'Login Admin':'Pelaporan Fasilitas Kampus'}</h2>
      <p>${passwordFormMode?(recoveryMode?'Buat password baru untuk akun Anda.':'Buat password untuk menyelesaikan undangan akun mahasiswa.'):resetRequestMode?'Masukkan email mahasiswa untuk menerima tautan reset password.':adminMode?'Masuk dengan email dan password admin.':'Masuk untuk melaporkan dan memantau fasilitas kampus.'}</p>
      <form id="login-form" class="login-fields">
        ${passwordFormMode?`<div class="field"><label>Password baru</label><div class="password-wrap"><input class="control" id="login-password" type="password" required autocomplete="new-password" placeholder="Buat password"><button class="password-toggle" type="button" data-action="toggle-password" aria-label="Tampilkan password">${I('eye')}</button></div></div><div class="field"><label>Ulangi password</label><input class="control" id="login-password-confirm" type="password" required autocomplete="new-password" placeholder="Ulangi password"></div>`:resetRequestMode?`<div class="field"><label for="login-email">Email mahasiswa</label><input class="control" id="login-email" type="email" autocomplete="email" required placeholder="Masukkan email mahasiswa"></div>`:`<div class="field"><label>Email kampus</label><input class="control" id="login-email" type="email" autocomplete="username" required placeholder="Masukkan email kampus"></div><div class="field"><label>Password</label><div class="password-wrap"><input class="control" id="login-password" type="password" autocomplete="current-password" required placeholder="Masukkan password"><button class="password-toggle" type="button" data-action="toggle-password" aria-label="Tampilkan password">${I('eye')}</button></div>${adminMode?'':`<div class="login-options"><label class="remember"><input type="checkbox"> Ingat saya</label><a href="#" data-action="forgot">Lupa Password?</a></div>`}</div>`}
        <button type="submit" class="btn btn-primary login-submit">${passwordFormMode?'Simpan Password':resetRequestMode?'Kirim Tautan Reset':'Masuk'} ${I('arrow')}</button>
      </form>
      ${adminMode||passwordFormMode||resetRequestMode?'':`<div class="login-divider">atau</div><a href="#" class="admin-link" data-action="admin-login">Login sebagai Admin ${I('arrow',13)}</a>`}
      <div class="login-note">Dengan masuk, Anda menyetujui kebijakan penggunaan layanan<br>Universitas Musamus.</div>
    </div></section>
  </div>`;
}
function render(animate = false) {
  const appRoot = document.getElementById('app');
  if (authInitializationPending && currentPage === 'login') {
    appRoot.setAttribute('aria-busy', 'true');
    return;
  }
  appRoot.removeAttribute('aria-busy');
  const pages = { home:studentHome, create:createReport, mine:myReports, detail:detailPage, notifications:notificationsPage, adminHome, manage:managementPage, handling:handlingPage, profile:profilePage };
  const publicPages = { landing:landingPage, report:publicReportForm, track:trackingPage };
  appRoot.innerHTML = currentPage === 'login'
    ? loginPage(loginMode==='admin', passwordSetupRequired, passwordRecoveryRequired, passwordResetRequestRequired)
    : publicPages[currentPage]
      ? publicPages[currentPage]()
      : shell(pages[currentPage]());
  loadReportCategories();
  loadReportFacilities();
  if(animate){
    const page=document.querySelector('.content, .public-main, .public-form-page, .public-track-page, .login-form-wrap');
    page?.classList.add('page-enter');
  }
}
function showToast(message) {
  const region = document.getElementById('toast-region');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = I('check');
  const text = document.createElement('span');
  text.textContent = message;
  toast.append(text);
  region.replaceChildren(toast);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>region.innerHTML='', 3400);
}
function clearAuthCallbackUrl() {
  history.replaceState(history.state, '', window.location.pathname);
}
function beginAuthTransition() {
  authTransitionRevision += 1;
  authSyncRevision += 1;
  authSyncInFlight = null;
  return authTransitionRevision;
}
function queueAuthMutation(operation) {
  const operationPromise = authMutationQueue.then(operation, operation);
  authMutationQueue = operationPromise.then(() => undefined, () => undefined);
  return operationPromise;
}
function sameAuthSession(left, right) {
  return Boolean(left?.user?.id && left.user.id === right?.user?.id &&
    typeof left.access_token === 'string' && left.access_token === right.access_token);
}
function clearAuthenticatedUser(forceLogin = false, expectedTransitionRevision) {
  if (expectedTransitionRevision !== undefined &&
      expectedTransitionRevision !== authTransitionRevision) return false;
  authTransitionRevision += 1;
  authSyncRevision += 1;
  authSyncInFlight = null;
  const hadAuthenticatedUser = Boolean(currentUser.id);
  const wasInitializing = authInitializationPending;
  authInitializationPending = false;
  currentUser = { ...defaultUser };
  role = 'student';
  currentAdminName = 'Admin';
  adminReports = [];
  adminReportsLoading = false;
  adminReportsError = '';
  adminReportsLoadedFor = '';
  adminReportsLoadPromise = null;
  if (forceLogin || hadAuthenticatedUser) {
    loginMode = 'student';
    currentPage = 'login';
  }
  if (forceLogin || hadAuthenticatedUser || wasInitializing) {
    render(true);
  }
  return true;
}
async function rejectAuthSession(message, session, transitionRevision, syncRevision) {
  if (transitionRevision !== authTransitionRevision || syncRevision !== authSyncRevision) {
    return false;
  }
  return queueAuthMutation(async () => {
    if (transitionRevision !== authTransitionRevision || syncRevision !== authSyncRevision) {
      return false;
    }

    let currentSession;
    try {
      const { data, error } = await window.supabaseClient.auth.getSession();
      if (error) {
        console.error('Sesi Auth gagal diverifikasi sebelum ditolak.', { code: error.code });
        if (transitionRevision === authTransitionRevision &&
            syncRevision === authSyncRevision) {
          showToast('Sesi Auth belum dapat diverifikasi. Silakan coba masuk kembali.');
        }
        return false;
      }
      currentSession = data.session;
    } catch (error) {
      console.error('Sesi Auth gagal diverifikasi sebelum ditolak.', { message: error?.message });
      if (transitionRevision === authTransitionRevision &&
          syncRevision === authSyncRevision) {
        showToast('Sesi Auth belum dapat diverifikasi. Silakan coba masuk kembali.');
      }
      return false;
    }

    if (transitionRevision !== authTransitionRevision ||
        syncRevision !== authSyncRevision ||
        !sameAuthSession(currentSession, session)) {
      return false;
    }

    let signOutError;
    try {
      ({ error: signOutError } = await window.supabaseClient.auth.signOut({ scope: 'local' }));
    } catch (error) {
      signOutError = error;
    }
    if (transitionRevision !== authTransitionRevision || syncRevision !== authSyncRevision) {
      return false;
    }
    if (signOutError) {
      console.error('Sesi Auth tidak valid gagal diakhiri.', { message: signOutError?.message });
    }
    if (passwordSetupRequired) {
      passwordSetupRequired = false;
      passwordRecoveryRequired = false;
      clearAuthCallbackUrl();
    }
    if (!clearAuthenticatedUser(true, transitionRevision)) return false;
    showToast(message);
    return false;
  });
}
function completeAuthenticatedRoute() {
  const wasInitializing = authInitializationPending;
  authInitializationPending = false;
  const nextPage = passwordSetupRequired
    ? 'login'
    : role === 'admin'
      ? 'adminHome'
      : 'home';
  if (passwordSetupRequired) {
    loginMode = role;
  }
  if (currentPage !== nextPage || wasInitializing) {
    currentPage = nextPage;
    render(true);
  }
}
async function syncAuthSession(session, transitionRevision = authTransitionRevision) {
  if (transitionRevision !== authTransitionRevision) return false;
  const authUserId = session?.user?.id;
  if (typeof authUserId !== 'string' || !authUserId) {
    clearAuthenticatedUser(false, transitionRevision);
    return false;
  }
  if (currentUser.id === authUserId) {
    completeAuthenticatedRoute();
    return true;
  }
  if (authSyncInFlight?.userId === authUserId &&
      authSyncInFlight.transitionRevision === transitionRevision &&
      sameAuthSession(authSyncInFlight.session, session)) {
    return authSyncInFlight.promise;
  }

  const revision = ++authSyncRevision;
  const promise = (async () => {
    const { data: profile, error } = await window.supabaseClient
      .from('users')
      .select('id, full_name, email, role, npm')
      .eq('id', authUserId)
      .maybeSingle();
    if (revision !== authSyncRevision || transitionRevision !== authTransitionRevision) {
      return false;
    }
    if (error) {
      console.error('Profil Auth gagal diverifikasi.', { code: error.code });
      await rejectAuthSession(
        'Profil akun tidak dapat diverifikasi. Hubungi administrator.',
        session,
        transitionRevision,
        revision,
      );
      return false;
    }

    const profileEmail = typeof profile?.email === 'string' ? profile.email.trim() : '';
    const authEmail = typeof session.user.email === 'string' ? session.user.email.trim() : '';
    const profileChecks = {
      profileFound: Boolean(profile),
      idMatchesAuth: profile?.id === authUserId,
      fullNameValid: typeof profile?.full_name === 'string' && profile.full_name.trim().length > 0,
      profileEmailPresent: profileEmail.length > 0,
      authEmailPresent: authEmail.length > 0,
      emailsMatch: profileEmail.length > 0 && authEmail.length > 0 &&
        profileEmail.toLowerCase() === authEmail.toLowerCase(),
      roleAllowed: ['student', 'admin'].includes(profile?.role),
      studentNpmValid: profile?.role !== 'student' ||
        (typeof profile.npm === 'string' && profile.npm.trim().length > 0),
      studentNpmType: profile?.role === 'student' ? typeof profile.npm : 'not_applicable',
    };
    const profileIsValid = profileChecks.profileFound &&
      profileChecks.idMatchesAuth &&
      profileChecks.fullNameValid &&
      profileChecks.profileEmailPresent &&
      profileChecks.authEmailPresent &&
      profileChecks.emailsMatch &&
      profileChecks.roleAllowed &&
      profileChecks.studentNpmValid;
    if (!profileIsValid) {
      console.warn('Profil Auth ditolak oleh pemeriksaan frontend.', profileChecks);
      await rejectAuthSession(
        'Profil akun tidak lengkap atau role tidak valid. Hubungi administrator.',
        session,
        transitionRevision,
        revision,
      );
      return false;
    }

    currentUser = {
      id: profile.id,
      name: profile.full_name.trim(),
      npm: typeof profile.npm === 'string' ? profile.npm : '',
      email: profileEmail,
      role: profile.role,
    };
    role = profile.role;
    currentAdminName = profile.full_name.trim();
    completeAuthenticatedRoute();
    if (role === 'admin') void loadAdminReports();
    return true;
  })();
  authSyncInFlight = { userId: authUserId, transitionRevision, session, promise };
  try {
    return await promise;
  } finally {
    if (authSyncInFlight?.promise === promise) authSyncInFlight = null;
  }
}
function initializeAuthSession() {
  window.supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === 'INITIAL_SESSION') return;
    if (event === 'PASSWORD_RECOVERY') {
      passwordRecoveryRequired = true;
      passwordSetupRequired = true;
      passwordResetRequestRequired = false;
      loginMode = 'student';
      currentPage = 'login';
      render(true);
    }
    if (event === 'SIGNED_OUT') {
      const transitionRevision = authTransitionRevision;
      void queueAuthMutation(async () => {
        const { data, error } = await window.supabaseClient.auth.getSession();
        if (error) {
          console.error('Sesi Auth gagal diperiksa setelah logout.', { code: error.code });
          return;
        }
        if (data.session) {
          const currentRevision = authTransitionRevision;
          queueMicrotask(() => { void syncAuthSession(data.session, currentRevision); });
          return;
        }
        clearAuthenticatedUser(true, transitionRevision);
      }).catch(error => {
        console.error('Sesi Auth gagal diperiksa setelah logout.', { message: error?.message });
      });
      return;
    }
    if (session) {
      const transitionRevision = beginAuthTransition();
      queueMicrotask(() => { void syncAuthSession(session, transitionRevision); });
    }
  });
  const initializationRevision = authTransitionRevision;
  window.supabaseClient.auth.getSession().then(({ data, error }) => {
    if (initializationRevision !== authTransitionRevision) return;
    if (error) {
      authInitializationPending = false;
      console.error('Sesi Auth gagal dipulihkan.', { code: error.code });
      render(true);
      showToast('Sesi tidak dapat dipulihkan. Silakan masuk kembali.');
      return;
    }
    return syncAuthSession(data.session, initializationRevision);
  }).catch(error => {
    if (initializationRevision !== authTransitionRevision) return;
    authInitializationPending = false;
    console.error('Sesi Auth gagal dipulihkan.', { message: error?.message });
    render(true);
    showToast('Sesi tidak dapat dipulihkan. Silakan masuk kembali.');
  });
}
function showModal(title, message, confirmText, onConfirm, onCancel = () => {}) {
  const node = document.createElement('div');
  node.className = 'modal-backdrop';
  node.innerHTML = `<section class="modal" role="dialog" aria-modal="true"><h2>${title}</h2><p>${message}</p><div class="modal-actions"><button class="btn btn-outline" data-modal-cancel>Batal</button><button class="btn btn-primary" data-modal-confirm>${confirmText}</button></div></section>`;
  document.body.appendChild(node);
  node.addEventListener('click', e => {
    if (e.target === node || e.target.closest('[data-modal-cancel]')) {
      node.remove();
      onCancel();
      return;
    }
    if (e.target.closest('[data-modal-confirm]')) { node.remove(); onConfirm(); }
  });
}
function openAddStudentModal() {
  if (!currentUser.id || role !== 'admin') {
    showToast('Sesi Admin tidak valid. Silakan masuk kembali.');
    return;
  }
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="add-student-title">
    <h2 id="add-student-title">Tambah Mahasiswa</h2>
    <p>Undangan untuk membuat password akan dikirim ke email mahasiswa.</p>
    <form id="add-student-form">
      <div class="field"><label for="student-full-name">Nama lengkap</label><input class="control" id="student-full-name" name="full_name" required minlength="2" maxlength="120" autocomplete="name"></div>
      <div class="field"><label for="student-npm">NPM</label><input class="control" id="student-npm" name="npm" required inputmode="numeric" pattern="[0-9]{1,32}" maxlength="32" autocomplete="off"></div>
      <div class="field"><label for="student-email">Email</label><input class="control" id="student-email" name="email" type="email" required maxlength="254" autocomplete="email"></div>
      <p id="add-student-error" role="alert" aria-live="polite" style="color:#b91c1c;margin:10px 0 0"></p>
      <div class="modal-actions"><button class="btn btn-outline" type="button" data-student-modal-close>Batal</button><button class="btn btn-primary" type="submit">Kirim Undangan</button></div>
    </form>
  </section>`;
  document.body.appendChild(backdrop);
  backdrop.querySelector('#student-full-name').focus();
  backdrop.addEventListener('click', event => {
    if ((event.target === backdrop || event.target.closest('[data-student-modal-close]')) && backdrop.dataset.pending !== 'true') {
      backdrop.remove();
    }
  });
}
async function studentInvitationErrorMessage(error) {
  const messages = {
    method_not_allowed: 'Permintaan tidak sesuai dengan metode yang didukung oleh fungsi.',
    invalid_content_type: 'Permintaan tidak dapat dibaca oleh fungsi. Muat ulang halaman dan coba lagi.',
    unauthorized: 'Sesi Admin tidak valid atau telah kedaluwarsa. Masuk kembali lalu coba lagi.',
    authorization_check_failed: 'Profil Admin gagal diverifikasi. Hubungi administrator.',
    forbidden: 'Akun yang digunakan tidak memiliki akses Admin.',
    invalid_json: 'Data formulir tidak dapat dibaca. Periksa isian lalu coba lagi.',
    invalid_request: 'Format data formulir tidak valid.',
    unexpected_field: 'Format permintaan tidak cocok dengan fungsi. Hubungi administrator.',
    invalid_full_name: 'Nama lengkap harus berisi 2–120 karakter yang valid.',
    invalid_npm: 'NPM harus berisi 1–32 angka.',
    invalid_email: 'Alamat email tidak valid.',
    account_check_failed: 'Pemeriksaan duplikasi akun gagal. Coba lagi nanti atau hubungi administrator.',
    student_already_exists: 'NPM atau email tersebut sudah terdaftar.',
    invitation_failed: 'Supabase Auth gagal membuat undangan. Periksa log Edge Function dan konfigurasi email.',
    profile_verification_failed: 'Undangan dibuat, tetapi verifikasi profil mahasiswa gagal. Periksa log Edge Function sebelum mencoba lagi.',
    profile_sync_incomplete: 'Undangan mungkin sudah dibuat, tetapi profil mahasiswa belum terverifikasi. Periksa data dan log Edge Function sebelum mencoba lagi.',
  };
  const response = error?.context && typeof error.context.clone === 'function'
    ? error.context.clone()
    : null;
  if (response) {
    try {
      const body = await response.json();
      if (typeof body?.error === 'string' && messages[body.error]) return messages[body.error];
    } catch {
      // The response body may not be JSON; do not expose its contents.
    }
    return `Fungsi menolak atau gagal memproses permintaan (HTTP ${response.status}). Periksa log Edge Function.`;
  }
  if (error?.name === 'FunctionsFetchError') {
    return 'Tidak dapat menghubungi Edge Function. Periksa koneksi lalu coba lagi.';
  }
  return 'Undangan gagal diproses. Periksa log Edge Function untuk mengetahui penyebabnya.';
}
async function submitStudentInvitation(form) {
  if (form.dataset.pending === 'true') return;
  form.dataset.pending = 'true';
  const submitButton = form.querySelector('button[type="submit"]');
  const closeButton = form.querySelector('[data-student-modal-close]');
  const errorMessage = form.querySelector('#add-student-error');
  const originalButtonText = submitButton.textContent;
  submitButton.disabled = true;
  closeButton.disabled = true;
  submitButton.textContent = 'Mengirim...';
  errorMessage.textContent = '';
  try {
    if (!currentUser.id || role !== 'admin') {
      throw new Error('admin_session_invalid');
    }
    const fullName = form.elements.full_name.value.trim().replace(/\s+/g, ' ');
    const npm = form.elements.npm.value.trim();
    const email = form.elements.email.value.trim().toLowerCase();
    if (fullName.length < 2 || fullName.length > 120 || /[\u0000-\u001f\u007f]/.test(fullName)) {
      errorMessage.textContent = 'Nama lengkap harus berisi 2–120 karakter yang valid.';
      form.elements.full_name.focus();
      return;
    }
    if (!/^\d{1,32}$/.test(npm)) {
      errorMessage.textContent = 'NPM harus berisi 1–32 angka.';
      form.elements.npm.focus();
      return;
    }
    const { data: sessionData, error: sessionError } = await window.supabaseClient.auth.getSession();
    if (sessionError || sessionData.session?.user?.id !== currentUser.id) {
      throw new Error('admin_session_invalid');
    }
    const { data, error } = await window.supabaseClient.functions.invoke('admin-create-student', {
      body: { full_name: fullName, npm, email },
    });
    if (error) {
      console.error('Undangan mahasiswa gagal dikirim.', {
        errorType: error.name || 'unknown',
        status: error.context?.status,
      });
      errorMessage.textContent = await studentInvitationErrorMessage(error);
      return;
    }
    if (data?.success !== 'invitation_sent') {
      errorMessage.textContent = 'Respons Edge Function tidak sesuai. Periksa log Edge Function sebelum mencoba lagi.';
      return;
    }
    form.closest('.modal-backdrop')?.remove();
    showToast('Undangan berhasil dikirim ke email mahasiswa.');
  } catch (error) {
    console.error('Undangan mahasiswa gagal dikirim.', { code: error?.message });
    errorMessage.textContent = error?.message === 'admin_session_invalid'
      ? 'Sesi Admin tidak valid atau telah berakhir. Silakan masuk kembali.'
      : 'Undangan gagal dikirim. Pastikan fungsi tersedia dan coba lagi.';
  } finally {
    form.dataset.pending = 'false';
    if (submitButton.isConnected) {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
    if (closeButton.isConnected) closeButton.disabled = false;
  }
}
function openReport(id, admin = false) {
  if (!currentUser.id || (admin && role !== 'admin') || (!admin && role !== 'student')) {
    showToast('Sesi akun tidak valid. Silakan masuk kembali.');
    return;
  }
  selectedReport = (admin ? adminReports : reports).find(r=>r.id===id);
  if (!selectedReport) {
    showToast('Laporan tidak ditemukan. Muat ulang halaman dan coba lagi.');
    return;
  }
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
  const rows=adminReports.filter(r=>(!status||r.status===status)&&(!query||`${r.id} ${r.reporter} ${r.title} ${r.facility} ${r.location}`.toLowerCase().includes(query)));
  document.getElementById('admin-table').innerHTML=rows.length?rows.map(adminRow).join(''):`<tr><td colspan="8"><div class="empty-state"><div class="empty-illustration">${I('search')}</div><h3>Laporan tidak ditemukan</h3><p>Coba ubah kata kunci atau filter yang dipilih.</p></div></td></tr>`;
}
function refreshAdminManagementPage() {
  const query = document.getElementById('admin-search')?.value || '';
  const status = document.getElementById('admin-status')?.value || '';
  render(true);
  const searchInput = document.getElementById('admin-search');
  const statusSelect = document.getElementById('admin-status');
  if (searchInput) searchInput.value = query;
  if (statusSelect) statusSelect.value = status;
  applyAdminFilters();
}
function exportReports() {
  if (!adminReports.length) {
    showToast('Tidak ada laporan untuk diekspor.');
    return;
  }
  const columns = ['ID Laporan','Judul','Kategori','Lokasi','Pelapor','Tanggal','Status','Prioritas','Deskripsi'];
  const csvCell = value => {
    const text = String(value ?? '');
    const safeText = /^[\t\r\n ]*[=+\-@]/.test(text) ? `'${text}` : text;
    return `"${safeText.replace(/"/g,'""')}"`;
  };
  const csv = '\uFEFF' + [
    columns,
    ...adminReports.map(report => [
      report.id,report.title,report.category,report.location,report.reporter,
      report.date,report.status,report.urgency,report.description
    ])
  ].map(row => row.map(csvCell).join(',')).join('\r\n');
  try {
    const url = URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = `laporan-fasilitas-${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url),0);
    showToast('File laporan berhasil diunduh.');
  } catch (error) {
    console.error('Data laporan gagal diekspor.',error);
    showToast('Laporan gagal diekspor. Coba lagi.');
  }
}
document.addEventListener('click', e => {
  const pageButton=e.target.closest('[data-page]');
  if(pageButton){e.preventDefault();if(pageButton.dataset.page===currentPage)return;document.getElementById('sidebar')?.classList.remove('open');document.getElementById('sidebar-overlay')?.classList.remove('active');setPage(pageButton.dataset.page);return;}
  const reportButton=e.target.closest('[data-report]');
  if(reportButton){openReport(reportButton.dataset.report,role==='admin');return;}
  const action=e.target.closest('[data-action]')?.dataset.action;
  if(!action)return;
  if(action==='add-student'){openAddStudentModal();return;}
  if(action==='reload-admin-reports'){void loadAdminReports(true);return;}
  if(action==='menu'){document.getElementById('sidebar')?.classList.toggle('open');document.getElementById('sidebar-overlay')?.classList.toggle('active');}
  if(action==='close-sidebar'){document.getElementById('sidebar')?.classList.remove('open');document.getElementById('sidebar-overlay')?.classList.remove('active');}
  if(action==='logout'){
    e.preventDefault();
    beginAuthTransition();
    queueAuthMutation(() => window.supabaseClient.auth.signOut()).then(({ error }) => {
      if (error) {
        console.error('Logout Supabase Auth gagal.', { code: error.code });
        showToast('Logout gagal. Periksa koneksi dan coba lagi.');
        return;
      }
      showToast('Anda berhasil keluar.');
    }).catch(error => {
      console.error('Logout Supabase Auth gagal.', { message: error?.message });
      showToast('Logout gagal. Periksa koneksi dan coba lagi.');
    });
  }
  if(action==='admin-login'){e.preventDefault();loginMode='admin';setPage('login');}
  if(action==='student-login'){loginMode='student';setPage('login');}
  if(action==='back-to-login'){
    e.preventDefault();
    passwordResetRequestRequired=false;
    loginMode='student';
    setPage('login');
    return;
  }
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
  if(action==='forgot'){
    e.preventDefault();
    passwordResetRequestRequired=true;
    loginMode='student';
    render(true);
    return;
  }
  if(action==='read-all'){document.querySelectorAll('.notification-item.unread').forEach(x=>x.classList.remove('unread'));document.querySelectorAll('.unread-dot').forEach(x=>x.remove());showToast('Semua notifikasi ditandai sudah dibaca.');}
  if(action==='export')exportReports();
  if(action==='edit-report'){openReport(e.target.closest('[data-id]').dataset.id,true);}
  if(action==='update-report'){
    const statusSelect=document.getElementById('handling-status');
    const button=e.target.closest('[data-action="update-report"]');
    if(!selectedReport||!statusSelect||!button)return;
    const previousStatus=selectedReport.status;
    const status=statusSelect.value;
    if(status===previousStatus){showToast('Status laporan tidak berubah.');return;}
    button.disabled=true;
    void persistAdminReportStatus(selectedReport,status).then(()=>{
      render(true);
      showToast('Status laporan berhasil disimpan ke Supabase.');
    }).catch(error=>{
      statusSelect.value=previousStatus;
      showToast(error.message);
    }).finally(()=>{
      if(button.isConnected)button.disabled=false;
    });
  }
  if(action==='save-profile'){
    const name=document.getElementById('profile-name').value.trim();
    const npm=document.getElementById('profile-npm').value.trim();
    if(!name||!npm){showToast('Nama lengkap dan NPM wajib diisi.');return;}
    const updatedUser={...currentUser,name,npm,email:document.getElementById('profile-email').value.trim()};
    const updatedReports=reports.map(report=>report.reporter===currentUser.name?{...report,reporter:name}:report);
    const cachedProfile={name:updatedUser.name,npm:updatedUser.npm,email:updatedUser.email};
    if(!writeStoredValue(userStorageKey,JSON.stringify(cachedProfile),'Data akun')){
      showToast('Profil belum dapat disimpan. Periksa pengaturan penyimpanan browser dan coba lagi.');
      return;
    }
    if(!writeStoredValue(reportsStorageKey,JSON.stringify(updatedReports),'Data laporan')){
      const rolledBack=writeStoredValue(userStorageKey,JSON.stringify({
        name:currentUser.name,
        npm:currentUser.npm,
        email:currentUser.email,
      }),'Pemulihan data akun');
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
    const report=adminReports.find(item=>item.id===e.target.dataset.statusReport);
    if(!report){showToast('Laporan tidak ditemukan. Muat ulang halaman dan coba lagi.');return;}
    const select=e.target;
    const previousStatus=report.status;
    const status=select.value;
    if(status===previousStatus)return;
    select.disabled=true;
    void persistAdminReportStatus(report,status).then(()=>{
      refreshAdminManagementPage();
      showToast('Status laporan berhasil disimpan ke Supabase.');
    }).catch(error=>{
      select.value=previousStatus;
      showToast(error.message);
    }).finally(()=>{
      if(select.isConnected)select.disabled=false;
    });
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
  if(e.target.id==='add-student-form'){
    e.preventDefault();
    const form=e.target;
    if(!form.reportValidity())return;
    void submitStudentInvitation(form);
    return;
  }
  if(e.target.id==='ticket-lookup'){
    e.preventDefault();
    const ticketInput=document.getElementById('ticket-id');
    const trackingTokenInput=document.getElementById('tracking-token');
    const ticketId=(ticketInput?.value || '').trim().toUpperCase();
    const trackingToken=(trackingTokenInput?.value || '').trim();
    if(!/^RLF-\d{10}$/.test(ticketId)||!/^[a-f0-9]{64}$/i.test(trackingToken)){
      showToast('Masukkan nomor tiket dan kunci pelacakan yang valid.');
      ticketInput?.focus();
      return;
    }
    const button=e.target.querySelector('button[type="submit"]');
    if(button)button.disabled=true;
    void trackReportFromSupabase(ticketId,trackingToken).catch(error=>showToast(error.message)).finally(()=>{
      if(button?.isConnected)button.disabled=false;
    });
    return;
  }
  if(e.target.id==='public-report-form'){
    e.preventDefault();
    const form=e.target;
    const categorySelect=form.querySelector('#public-category');
    const categoryId=categorySelect?.value || '';
    const category=reportCategoryName(categoryId);
    const facilitySelect=form.querySelector('#public-facility');
    const facilityId=facilitySelect?.value || null;
    const facility=facilityId ? reportFacilityName(facilityId) : '';
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

    if(!categoryId || !category){
      showToast('Pilih kategori fasilitas terlebih dahulu.');
      categorySelect?.focus();
      return;
    }
    if(facilityId && !facility){
      showToast('Fasilitas tidak tersedia. Pilih fasilitas kembali.');
      facilitySelect?.focus();
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

    const locationDetail=`${building} · ${details}`;
    submitReportForm(form, {
      category_id:categoryId,
      facility_id:facilityId,
      title,
      description,
      location_detail:locationDetail,
    }, savedReport => ({
      id:savedReport.ticketNumber,
      title,
      facility:facility || category,
      category,
      location:locationDetail,
      date:savedReport.createdAt.toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}),
      timeAgo:'Baru saja',
      status:savedReport.status,
      urgency:'Sedang',
      reporter:'Anonim',
      description,
      image:selectedImage,
      history:[{
        status:'Laporan Diterima',
        date:savedReport.createdAt.toLocaleString('id-ID',{dateStyle:'medium',timeStyle:'short'})
      }]
    }), () => setPage('landing'));
    return;
  }
  if(e.target.id==='login-form'){
    e.preventDefault();
    const form=e.target;
    if(form.dataset.authPending==='true')return;
    form.dataset.authPending='true';
    const submitButton=form.querySelector('button[type="submit"]');
    const originalButtonContent=submitButton?.innerHTML;
    if(submitButton){
      submitButton.disabled=true;
      submitButton.textContent=passwordSetupRequired
        ?'Menyimpan...'
        :passwordResetRequestRequired?'Mengirim...':'Memverifikasi...';
    }
    (async()=>{
      const passwordInput=form.querySelector('#login-password');
      const password=passwordInput?.value || '';
      if(passwordSetupRequired){
        const confirmInput=form.querySelector('#login-password-confirm');
        if(!password || password!==confirmInput?.value){
          showToast('Password wajib diisi dan harus sama pada kedua kolom.');
          (password?confirmInput:passwordInput)?.focus();
          return;
        }
        const {data:sessionData,error:sessionError}=await window.supabaseClient.auth.getSession();
        if(sessionError){
          console.error('Sesi undangan gagal diperiksa.',{code:sessionError.code});
          showToast('Sesi undangan tidak dapat diverifikasi. Buka kembali tautan undangan.');
          return;
        }
        if(!sessionData.session){
          showToast('Tautan undangan tidak valid atau sudah kedaluwarsa. Minta admin mengirim ulang.');
          return;
        }
        beginAuthTransition();
        const {error:updateError}=await queueAuthMutation(
          () => window.supabaseClient.auth.updateUser({password})
        );
        if(updateError){
          showToast('Password belum dapat disimpan. Periksa persyaratan password dan coba lagi.');
          return;
        }
        const isRecovery = passwordRecoveryRequired;
        passwordSetupRequired=false;
        passwordRecoveryRequired=false;
        clearAuthCallbackUrl();
        if(isRecovery){
          let signOutError;
          const recoveryRevision=beginAuthTransition();
          try{
            ({error:signOutError}=await queueAuthMutation(
              () => window.supabaseClient.auth.signOut({scope:'local'})
            ));
          }catch(error){
            signOutError=error;
          }
          if(signOutError){
            console.error('Sesi recovery gagal diakhiri.',{
              code:typeof signOutError?.code==='string'?signOutError.code:undefined,
            });
          }
          if(recoveryRevision===authTransitionRevision){
            clearAuthenticatedUser(true,recoveryRevision);
          }
          showToast(signOutError
            ?'Password berhasil diperbarui, tetapi sesi belum berakhir. Silakan keluar dan masuk kembali.'
            :'Password berhasil diperbarui. Silakan masuk dengan password baru.');
          return;
        }
        const {data:updatedSessionData,error:updatedSessionError}=await window.supabaseClient.auth.getSession();
        if(updatedSessionError){
          console.error('Sesi undangan gagal diperiksa setelah password dibuat.',{code:updatedSessionError.code});
          showToast('Sesi akun belum dapat diverifikasi. Silakan masuk kembali.');
          return;
        }
        if(!updatedSessionData.session){
          showToast('Sesi akun berakhir setelah password dibuat. Silakan masuk kembali.');
          return;
        }
        if(!await syncAuthSession(updatedSessionData.session))return;
        showToast(`Password berhasil dibuat. Selamat datang, ${currentUser.name}!`);
        return;
      }

      if(passwordResetRequestRequired){
        const emailInput=form.querySelector('#login-email');
        const email=(emailInput?.value || '').trim().toLowerCase();
        if(email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
          showToast('Masukkan alamat email yang valid.');
          emailInput?.focus();
          return;
        }
        const {error:resetError}=await window.supabaseClient.auth.resetPasswordForEmail(email,{
          redirectTo:authEmailRedirectUrl,
        });
        if(resetError){
          console.error('Permintaan reset password gagal.',{code:resetError.code});
          showToast('Tautan reset belum dapat dikirim. Coba lagi beberapa saat.');
          return;
        }
        passwordResetRequestRequired=false;
        loginMode='student';
        currentPage='login';
        render(true);
        showToast('Jika email tersebut terdaftar, tautan reset password akan dikirim.');
        return;
      }

      const emailInput=form.querySelector('#login-email');
      const email=(emailInput?.value || '').trim().toLowerCase();
      if(!email){
        showToast('Email kampus wajib diisi.');
        emailInput?.focus();
        return;
      }
      if(!password){
        showToast('Password wajib diisi.');
        passwordInput?.focus();
        return;
      }
      beginAuthTransition();
      const {data,error}=await queueAuthMutation(
        () => window.supabaseClient.auth.signInWithPassword({email,password})
      );
      if(error){
        console.warn('Supabase Auth menolak login.',{
          code:typeof error.code==='string'?error.code:undefined,
          status:Number.isInteger(error.status)?error.status:undefined,
        });
        showToast('Email atau password tidak sesuai. Periksa kembali kredensial Anda.');
        return;
      }
      if(!data?.session){
        console.error('Supabase Auth tidak mengembalikan sesi setelah login.');
        showToast('Login belum menghasilkan sesi. Coba lagi.');
        return;
      }
      const {data:currentSessionData,error:currentSessionError}=await window.supabaseClient.auth.getSession();
      if(currentSessionError){
        console.error('Sesi login gagal diverifikasi.',{code:currentSessionError.code});
        showToast('Sesi login belum dapat diverifikasi. Silakan coba lagi.');
        return;
      }
      if(!currentSessionData.session){
        showToast('Sesi login berakhir sebelum profil dimuat. Silakan coba lagi.');
        return;
      }
      if(!await syncAuthSession(currentSessionData.session))return;
      showToast(`Selamat datang, ${currentUser.name}!`);
    })().catch(error=>{
      console.error('Proses autentikasi gagal.',{message:error?.message});
      showToast('Proses autentikasi gagal. Periksa koneksi dan coba lagi.');
    }).finally(()=>{
      form.dataset.authPending='false';
      if(submitButton?.isConnected){
        submitButton.disabled=false;
        submitButton.innerHTML=originalButtonContent;
      }
    });
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
    const categoryId=catSelect?.value || '';
    const cat=reportCategoryName(categoryId);
    const facilitySelect=form.querySelector('#report-facility');
    const facilityId=facilitySelect?.value || null;
    const facility=facilityId ? reportFacilityName(facilityId) : '';
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
    if(!categoryId || !cat){
      showToast('Pilih kategori fasilitas.');
      catSelect?.focus();
      return;
    }
    if(facilityId && !facility){
      showToast('Fasilitas tidak tersedia. Pilih fasilitas kembali.');
      facilitySelect?.focus();
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

    const locationDetail=campusLoc?`${campusLoc} · ${roomLoc}`:roomLoc;
    submitReportForm(form, {
      category_id:categoryId,
      facility_id:facilityId,
      title,
      description:descVal,
      location_detail:locationDetail,
    }, savedReport => ({
      id:savedReport.ticketNumber,
      title,
      facility:facility || cat,
      location:locationDetail,
      date:savedReport.createdAt.toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}),
      status:savedReport.status,
      urgency:form.querySelector('input[name="urgency"]:checked')?.value||'Sedang',
      reporter:'Anonim',
      category:cat,
      description:descVal,
      image:selectedImage,
      history:[{
        status:'Laporan diterima',
        date:savedReport.createdAt.toLocaleString('id-ID',{dateStyle:'medium',timeStyle:'short'})
      }]
    }), () => setPage('landing'));
  }
});
window.addEventListener('popstate',()=>{
  const route=location.hash.match(/^#\/track\/(.+)$/);
  if(route){
    let reportId;
    try {
      reportId=decodeURIComponent(route[1]);
    } catch(error) {
      console.warn('ID tiket pada URL tidak valid.',error);
    }
    if(reportId&&reportId===authorizedTrackingTicket&&selectedReport?.id===reportId)currentPage='track';
    else currentPage='landing';
  }else if(location.hash==='#/landing')currentPage='landing';
  else if(location.hash==='#/report')currentPage='report';
  else if(['landing','report','track'].includes(history.state?.page))currentPage=history.state.page;
  else if(['home','create','mine','detail','notifications','adminHome','manage','handling','profile','login'].includes(history.state?.page)){
    currentPage=history.state.page;
  }else currentPage='login';
  currentPage=authorizedPage(currentPage);
  if(currentPage==='create'||currentPage==='report')selectedImage='';
  render(true);
});
const initialTrack=location.hash.match(/^#\/track\/(.+)$/);
if(initialTrack){
  currentPage='landing';
}else if(location.hash==='#/landing')currentPage='landing';
else if(location.hash==='#/report')currentPage='report';
else if(['landing','report','track'].includes(history.state?.page))currentPage=history.state.page;
if(!history.state?.page)history.replaceState({page:currentPage},'',location.href);
render();
initializeAuthSession();
if(storageWarning)showToast('Sebagian data browser tidak dapat dibaca atau disimpan. Aplikasi tetap dapat digunakan, tetapi perubahan mungkin tidak tersimpan.');
