import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

// Tempel URL Web App Google Apps Script di sini setelah melakukan deployment.
// Contoh: https://script.google.com/macros/s/AKfycb.../exec
const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxnip6Py6MdlpAzQzVEIwIo0a7Aia_T1ACKmehHgtr9BxhE1pPkV_aoV0IuSZANuCdH/exec';

const questions = [
  {
    question: 'Pasanganmu tampak diam setelah hari yang berat. Langkah pertama yang paling peka?',
    options: ['Langsung memberi banyak saran agar masalahnya selesai.', 'Bertanya dengan lembut apakah ia ingin didengar, ditemani, atau diberi ruang.', 'Membiarkannya tanpa kabar sampai ia kembali ceria.', 'Menceritakan masalahmu agar suasana lebih seimbang.'],
    answer: 1,
  },
  {
    question: 'Kalian berjanji bertemu pukul 19.00, tetapi kamu akan terlambat 30 menit. Apa yang paling tepat?',
    options: ['Datang saja; setengah jam bukan masalah besar.', 'Mengabari sebelum waktu janji, meminta maaf, dan memberi perkiraan waktu baru.', 'Menunggu pasangan bertanya lebih dulu.', 'Mengirim pesan setelah tiba supaya tidak mengganggu.'],
    answer: 1,
  },
  {
    question: 'Saat berbeda pendapat tentang rencana akhir pekan, tujuan percakapan yang sehat adalah…',
    options: ['Membuktikan pilihanmu paling masuk akal.', 'Mencari pilihan yang memenuhi kebutuhan kalian berdua.', 'Mengalah sepenuhnya agar diskusi cepat selesai.', 'Mendiamkan topik itu hingga salah satu menyerah.'],
    answer: 1,
  },
  {
    question: 'Pasangan lupa hari penting yang sempat kalian bicarakan. Respons paling membangun?',
    options: ['Memberi hukuman diam beberapa hari.', 'Mengatakan perasaanmu dan menjelaskan mengapa hari itu berarti bagimu.', 'Mengunggah sindiran agar ia merasa bersalah.', 'Berpura-pura tidak apa-apa lalu menyimpannya sendiri.'],
    answer: 1,
  },
  {
    question: 'Kalian memiliki anggaran terbatas, tetapi sama-sama ingin memberi hadiah. Solusi paling kreatif dan adil?',
    options: ['Salah satu harus membeli hadiah paling mahal.', 'Menyepakati batas biaya dan memilih sesuatu yang personal atau pengalaman bersama.', 'Berutang demi hadiah yang mengesankan.', 'Meniadakan perhatian agar tidak membahas uang.'],
    answer: 1,
  },
  {
    question: 'Ketika pasangan menerima kritik dari keluargamu, sikapmu yang paling suportif adalah…',
    options: ['Ikut diam karena itu urusan keluargamu.', 'Mendengar pengalamannya, memvalidasi perasaannya, lalu membahas batas yang tepat bersama.', 'Memintanya agar lebih kuat dan tidak sensitif.', 'Menceritakan ulang kritik itu kepada teman-teman.'],
    answer: 1,
  },
  {
    question: 'Kamu merasa cemburu pada teman dekat pasangan. Informasi paling penting sebelum menyimpulkan?',
    options: ['Membuka ponselnya saat ia tidur.', 'Memeriksa fakta dan menyampaikan rasa tidak aman tanpa menuduh.', 'Meminta ia memutus semua pertemanan.', 'Membuatnya cemburu balik.'],
    answer: 1,
  },
  {
    question: 'Satu orang ingin cepat menyelesaikan konflik, yang lain butuh waktu tenang. Kesepakatan terbaik?',
    options: ['Yang cepat harus selalu menang karena masalah tidak boleh ditunda.', 'Menentukan jeda dan waktu pasti untuk kembali membicarakannya.', 'Tidak membicarakan konflik sampai lupa sendiri.', 'Mengirim paragraf panjang saat emosi masih tinggi.'],
    answer: 1,
  },
  {
    question: 'Kalian punya bahasa cinta berbeda: satu suka kata-kata, satu suka bantuan nyata. Cara merawatnya?',
    options: ['Memberi yang kamu sendiri paling suka saja.', 'Mempelajari bentuk perhatian yang terasa bermakna bagi masing-masing dan mempraktikkannya.', 'Menyimpulkan kalian tidak cocok.', 'Menuntut pasangan menebak kebutuhanmu.'],
    answer: 1,
  },
  {
    question: 'Pasangan membatalkan kencan karena urusan keluarga mendadak. Apa langkah yang matang?',
    options: ['Menganggapnya tidak menghargai hubungan.', 'Menunjukkan pengertian, lalu menyusun waktu pengganti ketika situasi memungkinkan.', 'Menghilang agar ia mengejarmu.', 'Meminta bukti bahwa alasannya benar.'],
    answer: 1,
  },
  {
    question: 'Saat bercanda, kamu tanpa sengaja menyinggung pasangan di depan teman. Setelah itu kamu sebaiknya…',
    options: ['Bilang ia terlalu baper.', 'Meminta maaf secara spesifik tanpa alasan pembenaran dan memperbaiki sikap.', 'Menunggu ia lupa dengan sendirinya.', 'Menyalahkan teman yang ikut tertawa.'],
    answer: 1,
  },
  {
    question: 'Kalian sedang sibuk dan frekuensi chat berkurang. Cara menjaga kedekatan tanpa memberi tekanan?',
    options: ['Menagih balasan setiap beberapa menit.', 'Menyepakati pola kabar singkat yang realistis dan menghormati waktu masing-masing.', 'Menganggap hubungan pasti membosankan.', 'Berhenti mengabari tanpa penjelasan.'],
    answer: 1,
  },
  {
    question: 'Sebelum mengambil keputusan besar bersama, pertanyaan logis yang paling penting adalah…',
    options: ['Siapa yang paling keras mempertahankan pendapatnya?', 'Apa kebutuhan, risiko, batas, dan konsekuensi bagi kami berdua?', 'Bagaimana agar terlihat hebat di media sosial?', 'Apa kata orang lain yang belum tentu mengenal kami?'],
    answer: 1,
  },
  {
    question: 'Pasangan merayakan pencapaian kecilmu dengan antusias. Respons yang menguatkan hubungan?',
    options: ['Menganggapnya biasa saja supaya tidak berlebihan.', 'Mengucapkan terima kasih dan ikut merayakan keberadaannya dalam prosesmu.', 'Mengganti topik ke pencapaian yang lebih besar.', 'Membandingkan dengan prestasi orang lain.'],
    answer: 1,
  },
  {
    question: 'Kalian sepakat menyimpan rahasia pribadi masing-masing. Jika teman bertanya, kamu akan…',
    options: ['Menceritakannya sedikit agar percakapan seru.', 'Menjaga kepercayaan dan menjawab tanpa membuka hal privat.', 'Membagikan bila teman berjanji tidak memberi tahu siapa pun.', 'Mengirim tangkapan layar percakapan sebagai bukti.'],
    answer: 1,
  },
  {
    question: 'Dalam diskusi, pasangan berkata, “Aku merasa tidak didengar.” Respons paling logis sebelum membela diri?',
    options: ['Mengulang mengapa pendapatmu tetap benar.', 'Merangkum apa yang kamu pahami dan menanyakan bagian yang belum kamu tangkap.', 'Mengingatkannya semua kesalahan masa lalu.', 'Mengakhiri pembicaraan saat itu juga.'],
    answer: 1,
  },
  {
    question: 'Kamu membutuhkan waktu sendiri untuk mengisi energi. Cara menyampaikannya dengan aman?',
    options: ['Menghilang seharian tanpa kabar.', 'Mengatakan kebutuhanmu, meyakinkan itu bukan penolakan, dan memberi kabar kapan kembali terhubung.', 'Memaksa diri terus hadir hingga kesal.', 'Menguji apakah pasangan akan mengejarmu.'],
    answer: 1,
  },
  {
    question: 'Setelah menyelesaikan konflik, kebiasaan kecil yang paling membantu hubungan bertumbuh adalah…',
    options: ['Mengungkit konflik itu saat bertengkar lagi.', 'Mengecek apa yang bisa dipelajari dan membuat satu perubahan kecil bersama.', 'Berjanji tidak akan pernah berbeda pendapat lagi.', 'Menyimpan catatan kesalahan pasangan.'],
    answer: 1,
  },
];

// Urutan jawaban diacak secara tetap per soal agar pilihan paling sehat
// tidak selalu berada pada huruf yang sama, tetapi jawaban yang dipilih tetap
// bisa ditinjau kembali saat pengguna menekan tombol Kembali.
const displayOrders = questions.map((_, questionIndex) => {
  const order = [0, 1, 2, 3];
  let seed = (questionIndex + 1) * 9301 + 49297;
  for (let index = order.length - 1; index > 0; index -= 1) {
    seed = (seed * 9301 + 49297) % 233280;
    const swapIndex = seed % (index + 1);
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }
  return order;
});

const screens = {
  login: document.querySelector('#login-screen'),
  quiz: document.querySelector('#quiz-screen'),
  result: document.querySelector('#result-screen'),
};
const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginError = document.querySelector('#login-error');
const questionText = document.querySelector('#question-text');
const questionNumber = document.querySelector('#question-number');
const answerList = document.querySelector('#answer-list');
const nextButton = document.querySelector('#next-button');
const backButton = document.querySelector('#back-button');
const progressText = document.querySelector('#progress-text');
const progressPercent = document.querySelector('#progress-percent');
const progressBar = document.querySelector('#progress-bar');
const logoutButton = document.querySelector('#logout-button');
const resultLogoutButton = document.querySelector('#result-logout-button');
const replayButton = document.querySelector('#replay-button');

let player = '';
let currentQuestion = 0;
let answers = Array(questions.length).fill(null);

function switchScreen(name) {
  Object.entries(screens).forEach(([key, element]) => {
    const active = key === name;
    element.hidden = !active;
    element.classList.toggle('active', active);
  });
}

function renderQuestion() {
  const item = questions[currentQuestion];
  const displayedNumber = currentQuestion + 1;
  const progress = Math.round((displayedNumber / questions.length) * 100);
  questionNumber.textContent = String(displayedNumber).padStart(2, '0');
  questionText.textContent = item.question;
  progressText.textContent = `Pertanyaan ${displayedNumber} dari ${questions.length}`;
  progressPercent.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;
  backButton.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
  nextButton.textContent = currentQuestion === questions.length - 1 ? 'Lihat hasil ♥' : 'Berikutnya →';
  nextButton.disabled = answers[currentQuestion] === null;

  answerList.innerHTML = '';
  displayOrders[currentQuestion].forEach((optionIndex, displayIndex) => {
    const option = item.options[optionIndex];
    const answer = document.createElement('button');
    const checked = answers[currentQuestion] === optionIndex;
    answer.type = 'button';
    answer.className = 'answer';
    answer.setAttribute('role', 'radio');
    answer.setAttribute('aria-checked', String(checked));
    answer.innerHTML = `<span class="choice-letter">${String.fromCharCode(65 + displayIndex)}</span><span>${option}</span>`;
    answer.addEventListener('click', () => selectAnswer(optionIndex));
    answerList.append(answer);
  });
}

function selectAnswer(index) {
  answers[currentQuestion] = index;
  [...answerList.children].forEach((button, displayedIndex) => {
    button.setAttribute('aria-checked', String(displayOrders[currentQuestion][displayedIndex] === index));
  });
  nextButton.disabled = false;
}

function getResultCopy(score) {
  if (score >= 89) return { title: 'Dua hati, satu arah.', copy: 'Kalian sangat selaras dalam komunikasi, empati, dan cara merawat rasa aman. Pertahankan kebiasaan kecil yang membuat satu sama lain merasa dipilih.' };
  if (score >= 67) return { title: 'Hangat dan bertumbuh.', copy: 'Fondasi kalian sudah manis. Ada beberapa ruang untuk lebih terbuka, tetapi niat memahami satu sama lain terlihat kuat.' };
  if (score >= 45) return { title: 'Sedang belajar berirama.', copy: 'Setiap hubungan punya tempo. Gunakan hasil ini sebagai undangan untuk membicarakan kebutuhan, batas, dan perhatian kecil yang berarti.' };
  return { title: 'Mari saling mendengar lagi.', copy: 'Hasil ini bukan vonis—melainkan titik mulai. Hubungan yang hangat tumbuh dari rasa ingin tahu, kejujuran, dan pilihan untuk belajar bersama.' };
}

function showResult() {
  const correct = answers.reduce((total, answer, index) => total + Number(answer === questions[index].answer), 0);
  const score = Math.round((correct / questions.length) * 100);
  const result = getResultCopy(score);
  document.querySelector('#result-greeting').textContent = `Untuk ${player}, inilah cerita selarasmu.`;
  document.querySelector('#score-percent').textContent = `${score}%`;
  document.querySelector('#correct-count').textContent = correct;
  document.querySelector('#result-title').textContent = result.title;
  document.querySelector('#result-copy').textContent = result.copy;
  const circumference = 2 * Math.PI * 68;
  const ring = document.querySelector('#score-ring');
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;
  switchScreen('result');
  requestAnimationFrame(() => { ring.style.strokeDashoffset = circumference * (1 - score / 100); });
  saveResult({ score, correct });
}

async function saveResult({ score, correct }) {
  const status = document.querySelector('#sheet-status');
  const payload = { username: player, score, correctAnswers: correct, totalQuestions: questions.length, completedAt: new Date().toISOString() };
  if (!APP_SCRIPT_URL) {
    status.textContent = 'Google Sheets belum dihubungkan';
    return;
  }
  try {
    await fetch(APP_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });
    status.textContent = 'Hasil tersimpan di Google Sheets ♥';
  } catch (error) {
    console.error('Tidak dapat menyimpan hasil:', error);
    status.textContent = 'Hasil belum dapat dikirim ke Sheets';
  }
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = usernameInput.value.trim();
  if (name.length < 2) {
    loginError.textContent = 'Masukkan nama panggilan minimal 2 karakter.';
    usernameInput.focus();
    return;
  }
  if (passwordInput.value.length < 4) {
    loginError.textContent = 'Kode rahasia minimal 4 karakter.';
    passwordInput.focus();
    return;
  }
  player = name;
  loginError.textContent = '';
  answers = Array(questions.length).fill(null);
  currentQuestion = 0;
  renderQuestion();
  switchScreen('quiz');
});

nextButton.addEventListener('click', () => {
  if (answers[currentQuestion] === null) return;
  if (currentQuestion === questions.length - 1) showResult();
  else { currentQuestion += 1; renderQuestion(); }
});
backButton.addEventListener('click', () => { if (currentQuestion > 0) { currentQuestion -= 1; renderQuestion(); } });
replayButton.addEventListener('click', () => { answers = Array(questions.length).fill(null); currentQuestion = 0; renderQuestion(); switchScreen('quiz'); });
function logOut() { player = ''; answers = Array(questions.length).fill(null); passwordInput.value = ''; loginForm.reset(); switchScreen('login'); usernameInput.focus(); }
logoutButton.addEventListener('click', logOut);
resultLogoutButton.addEventListener('click', logOut);

// Latar Three.js: hati-hati yang melayang pelan di ruang malam.
const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, .1, 100);
camera.position.z = 12;

const heartShape = new THREE.Shape();
heartShape.moveTo(0, -.35);
heartShape.bezierCurveTo(-1.15, -1.2, -1.85, .28, 0, 1.7);
heartShape.bezierCurveTo(1.85, .28, 1.15, -1.2, 0, -.35);
const heartGeometry = new THREE.ExtrudeGeometry(heartShape, { depth: .09, bevelEnabled: true, bevelThickness: .04, bevelSize: .04, bevelSegments: 2 });
heartGeometry.center();
const colors = [0xff668d, 0xff9eb6, 0xc58cff, 0xffcad9];
const hearts = [];
for (let index = 0; index < 32; index += 1) {
  const material = new THREE.MeshBasicMaterial({ color: colors[index % colors.length], transparent: true, opacity: .36 + Math.random() * .35, side: THREE.DoubleSide });
  const heart = new THREE.Mesh(heartGeometry, material);
  const distance = 5 + Math.random() * 10;
  heart.position.set((Math.random() - .5) * 19, (Math.random() - .5) * 13, -distance + 5);
  const scale = .06 + Math.random() * .18;
  heart.scale.setScalar(scale);
  heart.rotation.set((Math.random() - .5) * .7, (Math.random() - .5) * .7, Math.random() * Math.PI);
  heart.userData = { speed: .00022 + Math.random() * .0005, drift: .0002 + Math.random() * .0003, startY: heart.position.y, phase: Math.random() * Math.PI * 2 };
  scene.add(heart);
  hearts.push(heart);
}

const starGeometry = new THREE.BufferGeometry();
const starPositions = [];
for (let index = 0; index < 170; index += 1) starPositions.push((Math.random() - .5) * 26, (Math.random() - .5) * 18, -4 - Math.random() * 14);
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
scene.add(new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xffd8e5, size: .034, transparent: true, opacity: .65 })));

function resizeScene() {
  const { innerWidth: width, innerHeight: height } = window;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}
function animate(time) {
  hearts.forEach((heart) => {
    heart.position.y = heart.userData.startY + Math.sin(time * heart.userData.speed + heart.userData.phase) * .55;
    heart.position.x += Math.sin(time * .00035 + heart.userData.phase) * heart.userData.drift;
    heart.rotation.z += .002;
  });
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
window.addEventListener('resize', resizeScene);
resizeScene();
animate(0);
