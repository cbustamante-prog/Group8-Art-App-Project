const KEYS = {
  guestbook: "art_music_guestbook",
  poll: "art_music_poll",
  feedback: "art_music_feedback",
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

export function getGuestbookEntries(kind) {
  return readList(KEYS.guestbook)
    .filter((entry) => entry.kind === kind)
    .slice(0, 20);
}

export function addGuestbookEntry(entry) {
  return writeRecord(KEYS.guestbook, entry);
}

export function getPollState() {
  const stored = localStorage.getItem(KEYS.poll);
  if (!stored) return { votes: [], hasVoted: false };

  const value = JSON.parse(stored);
  if (!value || !Array.isArray(value.votes) || typeof value.hasVoted !== "boolean") {
    throw new Error("Saved poll data is invalid.");
  }
  return value;
}

export function addPollVote(vote) {
  const state = getPollState();
  if (state.hasVoted) {
    throw new Error("A vote has already been saved in this browser.");
  }

  const record = {
    ...vote,
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    created_date: new Date().toISOString(),
  };
  const nextState = { votes: [record, ...state.votes], hasVoted: true };
  localStorage.setItem(KEYS.poll, JSON.stringify(nextState));
  return nextState;
}

export function addFeedback(feedback) {
  return writeRecord(KEYS.feedback, feedback);
}

export function addContactMessage(message) {
  return writeRecord(KEYS.contact, message);
}
