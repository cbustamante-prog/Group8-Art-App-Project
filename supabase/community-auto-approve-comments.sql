drop policy if exists "Visitors can submit posts for review"
on public.community_posts;

create policy "Visitors can submit community posts"
on public.community_posts
for insert
to anon, authenticated
with check (
  (kind = 'comment' and status = 'approved')
  or (kind = 'lyrics' and status = 'pending')
);
