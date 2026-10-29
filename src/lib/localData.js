const KEYS = {
  contact: "art_music_contact",
};

function readList(key) {
  const stored = localStorage.getItem(key);
  if (!stored) return [];

  const value = JSON.parse(stored);
  if (!Array.isArray(value)) {
    throw new Error(`Saved data for "${key}" is invalid.`);
  }
  return value;
}

function writeRecord(key, data) {
  const record = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    created_date: new Date().toISOString(),
  };
  localStorage.setItem(key, JSON.stringify([record, ...readList(key)]));
  return record;
}

export function addContactMessage(message) {
  return writeRecord(KEYS.contact, message);
}
