import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/redux/blog';

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export default function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
    >
      <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[#2563eb] transition-colors">
          {post.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm font-semibold text-[#2563eb] group-hover:text-[#1d4ed8] transition-colors">
            Learn more →
          </span>
          <span className="text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>
    </Link>
  );
}

