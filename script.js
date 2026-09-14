const CONFIG = {
  name: "Fer",
  signature: "Juan",
  starMessages: [
    "Me encanta la paz que siento cuando estoy contigo.",
    "Gracias por dejarme conocer cada día un poquito más de ti.",
    "Me haces querer cuidar los detalles, por contigo todo me importa.",
    "Tu forma de ser hace que incluso los días pesados se sientan más bonitos.",
    "Contigo quiero vivir todo.",
    "Hay personas que llegan haciendo ruido. Tú llegaste dando paz.",
    "Mi lugar favorito últimamente se parece mucho a estar contigo."
  ],
  captions: [
    "Donde todo empezó a sentirse especial.",
    "Contigo, hasta lo cotidiano se siente bonito.",
    "Y quiero seguir haciendo recuerdos contigo."
  ]
};

const screens = {
  hero: document.getElementById('hero'),
  garden: document.getElementById('garden'),
  memories: document.getElementById('memories'),
  poem: document.getElementById('poemSection'),
  final: document.getElementById('final')
};

const startBtn = document.getElementById('startBtn');
const starBtn = document.getElementById('starBtn');
const kissBtn = document.getElementById('kissBtn');
const memoriesBtn = document.getElementById('memoriesBtn');
const poemBtn = document.getElementById('poemBtn');
const finalBtn = document.getElementById('finalBtn');
const replayBtn = document.getElementById('replayBtn');
const flowers = document.getElementById('flowers');
const skyStars = document.getElementById('skyStars');
const messageBox = document.getElementById('messageBox');
const kissLayer = document.getElementById('kissLayer');

let messageIndex = 0;

function goTo(name) {
  Object.values(screens).forEach(el => el.classList.add('hidden'));
  screens[name].classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function makeStars(count = 64) {
  skyStars.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--dur', `${1.4 + Math.random() * 2.8}s`);
    star.style.setProperty('--op', `${0.25 + Math.random() * 0.65}`);
    skyStars.appendChild(star);
  }
}

function bouquetScale() {
  const w = Math.min(window.innerWidth || 390, 900);
  if (w <= 380) return 0.72;
  if (w <= 430) return 0.78;
  if (w <= 520) return 0.84;
  if (w <= 720) return 0.92;
  return 1;
}

function baseFlower({ type, left, size, height, tilt, delay, color, light, spray }) {
  const scale = bouquetScale();
  const flower = document.createElement('div');
  flower.className = `flower ${type}`;
  flower.style.setProperty('--left', `${left}%`);
  flower.style.setProperty('--bloom-size', `${Math.round(size * scale)}px`);
  flower.style.setProperty('--height', `${Math.round(height * scale)}px`);
  flower.style.setProperty('--tilt', `${tilt}deg`);
  flower.style.setProperty('--delay', `${delay}s`);
  flower.style.setProperty('--petal', color || '#ffd533');
  flower.style.setProperty('--petal-light', light || '#fff4a8');
  flower.style.setProperty('--spray', spray || '#fff1ac');

  const stem = document.createElement('div');
  stem.className = 'stem';
  if (type === 'spray') stem.style.setProperty('--stem-width', '3px');
  flower.appendChild(stem);

  const leafCount = type === 'spray' ? 1 : 2;
  for (let l = 0; l < leafCount; l++) {
    const leaf = document.createElement('div');
    leaf.className = `leaf ${l === 0 ? 'left' : ''}`;
    leaf.style.setProperty('--leaf-bottom', `${27 + l * 20}%`);
    leaf.style.setProperty('--leaf-rot', `${16 + l * 9}deg`);
    flower.appendChild(leaf);
  }

  const bloom = document.createElement('div');
  bloom.className = 'bloom';

  if (type === 'sunflower') {
    for (let i = 0; i < 20; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      petal.style.setProperty('--r', `${i * 18}deg`);
      bloom.appendChild(petal);
    }
    const center = document.createElement('span');
    center.className = 'center';
    bloom.appendChild(center);
  }

  if (type === 'daisy') {
    const petals = size < 52 ? 12 : 14;
    for (let i = 0; i < petals; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      petal.style.setProperty('--r', `${i * (360 / petals)}deg`);
      bloom.appendChild(petal);
    }
    const center = document.createElement('span');
    center.className = 'center';
    bloom.appendChild(center);
  }

  if (type === 'spray') {
    const dots = [
      [47, 15, 12], [25, 30, 9], [69, 31, 8], [39, 48, 10], [61, 55, 7],
      [17, 60, 7], [79, 66, 8], [48, 75, 6], [31, 82, 6], [70, 86, 5]
    ];
    dots.forEach(([x, y, d], idx) => {
      const dot = document.createElement('span');
      dot.className = 'spray-dot';
      dot.style.left = `${x}%`;
      dot.style.top = `${y}%`;
      dot.style.setProperty('--dot', `${Math.max(4, Math.round(d * scale))}px`);
      dot.style.opacity = `${0.72 + (idx % 3) * .1}`;
      bloom.appendChild(dot);
    });
  }

  flower.appendChild(bloom);
  flowers.appendChild(flower);
}

function buildWildBouquet() {
  flowers.innerHTML = '';

  // Capa trasera: flores pequeñas y ramas para que parezca un ramo silvestre,
  // no una fila de girasoles perfectos.
  const wild = [
    ['spray', 7, 62, 300, -14, .02, null, null, '#fff4c4'],
    ['daisy', 12, 42, 270, -11, .06, '#f7ca2a', '#fff0a1'],
    ['spray', 17, 72, 350, -10, .10, null, null, '#ffe06a'],
    ['daisy', 22, 48, 315, -8, .14, '#fff0ad', '#fffdf0'],
    ['spray', 27, 66, 390, -7, .18, null, null, '#fff0a8'],
    ['daisy', 32, 44, 285, -5, .22, '#f6d032', '#fff2a0'],
    ['spray', 37, 76, 365, -4, .26, null, null, '#f4d65f'],
    ['daisy', 42, 52, 330, -2, .30, '#fff5c6', '#ffffff'],
    ['spray', 47, 68, 405, -1, .34, null, null, '#ffe68c'],
    ['daisy', 52, 46, 300, 1, .38, '#f8cc27', '#fff2a4'],
    ['spray', 57, 78, 385, 3, .42, null, null, '#fff3bd'],
    ['daisy', 62, 54, 335, 4, .46, '#fff0a0', '#ffffff'],
    ['spray', 67, 70, 400, 5, .50, null, null, '#f5d75f'],
    ['daisy', 72, 46, 295, 7, .54, '#ffd83f', '#fff3aa'],
    ['spray', 77, 78, 365, 8, .58, null, null, '#ffe998'],
    ['daisy', 82, 50, 325, 9, .62, '#fff5c8', '#ffffff'],
    ['spray', 87, 68, 345, 11, .66, null, null, '#f7d95f'],
    ['daisy', 92, 42, 275, 12, .70, '#f7c92c', '#fff0a0'],
    ['spray', 96, 58, 305, 14, .74, null, null, '#fff3bd'],
  ];
  wild.forEach(s => baseFlower({ type:s[0], left:s[1], size:s[2], height:s[3], tilt:s[4], delay:s[5], color:s[6], light:s[7], spray:s[8] }));

  // Capa media: flores de jardín de distintos tamaños y alturas.
  const gardenFlowers = [
    [15, 58, 315, -10, .24, '#ffd943', '#fff2a6'],
    [25, 64, 350, -7, .31, '#fff1ad', '#fffef3'],
    [35, 56, 300, -4, .38, '#f6cc31', '#fff1a0'],
    [45, 68, 370, -1, .45, '#fff4c3', '#ffffff'],
    [55, 58, 310, 2, .52, '#ffd43a', '#fff1a0'],
    [65, 64, 360, 5, .59, '#fff0a8', '#fffdf0'],
    [75, 56, 315, 7, .66, '#f7c92c', '#fff0a0'],
    [85, 62, 345, 10, .73, '#fff5c9', '#ffffff'],
  ];
  gardenFlowers.forEach(s => baseFlower({ type:'daisy', left:s[0], size:s[1], height:s[2], tilt:s[3], delay:s[4], color:s[5], light:s[6] }));

  // Protagonistas. Los exteriores son más pequeños para que el ramo no se corte en móvil.
  const sunflowers = [
    [12, 72, 310, -11, .40, '#ffd633'],
    [22, 90, 365, -8, .48, '#ffca24'],
    [34, 104, 410, -5, .56, '#ffe05d'],
    [46, 116, 445, -2, .64, '#ffc928'],
    [58, 108, 420, 2, .72, '#ffd940'],
    [70, 96, 385, 5, .80, '#ffca22'],
    [81, 86, 350, 8, .88, '#ffe057'],
    [90, 70, 305, 11, .96, '#ffc51c'],
  ];
  sunflowers.forEach(s => baseFlower({ type:'sunflower', left:s[0], size:s[1], height:s[2], tilt:s[3], delay:s[4], color:s[5] }));
}

function showMessage(text) {
  messageBox.textContent = text;
  messageBox.classList.remove('hidden');
}

function releaseKisses() {
  kissLayer.innerHTML = '';
  for (let i = 0; i < 37; i++) {
    const kiss = document.createElement('span');
    kiss.className = 'kiss';
    kiss.textContent = i % 5 === 0 ? '❤️' : '💋';
    kiss.style.setProperty('--x', `${Math.random() * 96}%`);
    kiss.style.setProperty('--dx', `${-90 + Math.random() * 180}px`);
    kiss.style.setProperty('--rot', `${-60 + Math.random() * 120}deg`);
    kiss.style.animationDelay = `${Math.random() * .8}s`;
    kissLayer.appendChild(kiss);
  }
  showMessage('37 besos para ti Fer. ❤️');
}

function applyCaptions() {
  document.getElementById('caption1').textContent = CONFIG.captions[0];
  document.getElementById('caption2').textContent = CONFIG.captions[1];
  document.getElementById('caption3').textContent = CONFIG.captions[2];
}

startBtn.addEventListener('click', () => {
  messageIndex = 0;
  messageBox.classList.add('hidden');
  buildWildBouquet();
  goTo('garden');
});

starBtn.addEventListener('click', () => {
  showMessage(CONFIG.starMessages[messageIndex % CONFIG.starMessages.length]);
  messageIndex++;
});

kissBtn.addEventListener('click', releaseKisses);
memoriesBtn.addEventListener('click', () => goTo('memories'));
poemBtn.addEventListener('click', () => goTo('poem'));
finalBtn.addEventListener('click', () => goTo('final'));
replayBtn.addEventListener('click', () => {
  messageIndex = 0;
  buildWildBouquet();
  goTo('garden');
});

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (!screens.garden.classList.contains('hidden')) buildWildBouquet();
  }, 180);
});

makeStars();
applyCaptions();
