import SectionHead from "@/components/nexora/SectionHead";
import Guestbook from "@/components/nexora/community/Guestbook";
import Poll from "@/components/nexora/community/Poll";
import FeedbackForm from "@/components/nexora/community/FeedbackForm";

export default function Community() {
  return (
    <section id="community" className="px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHead label="Community" title="Add your voice.">Comment, vote, share a few lines of your own lyrics, and tell us what you think. Everything here is saved by the site.</SectionHead>
        <div className="grid gap-6 lg:grid-cols-2">
          <Guestbook kind="comment" title="Community wall" prompt="What does music mean to you? Leave a comment." placeholder="Music reminds me of…" button="Post comment" />
          <Poll />
          <Guestbook kind="lyrics" title="Creative challenge: write a verse" prompt="Write 2–4 lines of a song about student life, in English, Tagalog or any Filipino language. Think of a theme, keep a steady rhythm, and make the last words of lines rhyme if you like." placeholder="Early alarm, a cup of coffee…" button="Share my verse" />
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
}