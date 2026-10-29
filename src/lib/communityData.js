import { getSupabaseClient } from "@/lib/supabase";

const POLL_VOTED_KEY = "art_music_poll_voted";

export async function getGuestbookEntries(kind) {
  const { data, error } = await getSupabaseClient()
    .from("community_posts")
    .select("id, kind, name, message, created_at")
    .eq("kind", kind)
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) throw error;
  return data;
}

export async function addGuestbookEntry(entry) {
  const { error } = await getSupabaseClient()
    .from("community_posts")
    .insert({
      ...entry,
      status: entry.kind === "comment" ? "approved" : "pending",
    });

  if (error) throw error;
}

export async function getPollState() {
  const { data, error } = await getSupabaseClient().rpc("get_poll_results");
  if (error) throw error;

  const counts = Object.fromEntries(
    data.map(({ choice, vote_count }) => [choice, Number(vote_count)]),
  );

  return {
    counts,
    hasVoted: localStorage.getItem(POLL_VOTED_KEY) === "true",
  };
}

export async function addPollVote(vote) {
  if (localStorage.getItem(POLL_VOTED_KEY) === "true") {
    throw new Error("A vote has already been submitted from this browser.");
  }

  const { error } = await getSupabaseClient()
    .from("poll_votes")
    .insert(vote);

  if (error) throw error;
  localStorage.setItem(POLL_VOTED_KEY, "true");
}

export async function addFeedback(feedback) {
  const { error } = await getSupabaseClient()
    .from("community_feedback")
    .insert(feedback);

  if (error) throw error;
}
