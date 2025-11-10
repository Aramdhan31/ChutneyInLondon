type InstagramFeedProps = {
  username: string;
  className?: string;
};

export function InstagramFeed({ username, className }: InstagramFeedProps) {
  const profileEmbedUrl = `https://www.instagram.com/${username}/embed`;

  return (
    <div className={className}>
      <iframe
        title={`${username} Instagram feed`}
        src={profileEmbedUrl}
        loading="lazy"
        className="h-[520px] w-full rounded-[2rem] border border-white/10 bg-white sm:h-[640px]"
        frameBorder="0"
        allowTransparency
      />
    </div>
  );
}

