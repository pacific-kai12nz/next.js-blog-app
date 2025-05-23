import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

type ArticleListProps = {
  articles : Article[];

};

const ArticleList = ({ articles }: ArticleListProps) => {
  if (!articles || articles.length === 0) {
    return <div>記事がありません</div>;
  }

  return (
    <div>
      {articles.map((article) => (
        <article key={article.id} className='shadow my-4 flex flex-col'>
          <Link href={`/articles/${article.id}`} className='hover:opacity-75'>
            <Image 
              src="/images/mathias-reding-M3vE8oBz1ic-unsplash.jpg" 
              alt={article.title}
              width={1000}
              height={300}
              className="w-full h-auto"
            />
          </Link>
          <div className='bg-white flex flex-col justify-start p-6'>
              <Link 
              href={`/categories/${article.category || 'uncategorized'}`} 
              className='text-blue-700 p-4 font-bold block hover:underline'
              >
              {article.category || '未分類'}
              </Link>
            <Link 
              href={`/articles/${article.id}`}
              className='text-slate-900 text-3xl font-bold hover:text-gray-700 p-4 block hover:underline'
            >
              {article.title}
            </Link>
            <p className='text-sm p-3 text-slate-500'>
              公開日: {new Date(article.createdAt).toLocaleDateString('ja-JP')}
            </p>
            <p className='text-slate-900 p-6'>
              {article.content.length > 100 
                ? `${article.content.substring(0, 100)}...`
                : article.content}
            </p>
            <Link 
              href={`/articles/${article.id}`}
              className='text-pink-800 hover:text-black block font-medium hover:underline text-right p-4'
            >
              続きを読む →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
