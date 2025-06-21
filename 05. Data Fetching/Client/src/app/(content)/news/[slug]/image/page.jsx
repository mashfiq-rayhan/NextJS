import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

export default async function Image({ params }) {
  const { slug: newsItemSlug } = await params;

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound(); // Handle case where news is not found
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
