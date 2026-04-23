// =====================
// LocalStorage 进度管理
// =====================
const STORAGE_KEY = 'rc_progress_v1';

function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { mastered: [], visited: [] };
  } catch(e) {
    console.warn('读取进度失败:', e);
    return { mastered: [], visited: [] };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch(e) {
    console.warn('保存进度失败:', e);
  }
}

function markMastered(id) {
  const p = getProgress();
  if (!p.mastered.includes(id)) {
    p.mastered.push(id);
    saveProgress(p);
  }
}

function unmarkMastered(id) {
  const p = getProgress();
  p.mastered = p.mastered.filter(x => x !== id);
  saveProgress(p);
}

function markVisited(id) {
  const p = getProgress();
  if (!p.visited.includes(id)) {
    p.visited.push(id);
    saveProgress(p);
  }
}

function isMastered(id) {
  return getProgress().mastered.includes(id);
}

function clearProgress() {
  try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
}
