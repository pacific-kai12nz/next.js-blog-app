import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const ArticleList = () => {
  return (
    <div>
        <article className='shadow my-4 flex flex-col'>
            <Link href="#" className='hover:opacity-75'>            
            <Image 
            src="/images/mathias-reding-M3vE8oBz1ic-unsplash.jpg" 
            alt="グラフィティの画像" 
            width={1000}
            height={300}
            />
            </Link>
            <div className='bg-white flex flex-col justify-start p-6'>
                <Link href="#" className='text-blue-700 pd-4 font-bold'>
                Tecnology
                </Link>
                <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pd-4'>
                Next.js勉強中
                </Link>
                <p className='text-sm pd-3 text-slate-900'>
                    publish on 2025/05/20
                    </p>
                    <Link href="#" className='text-slate-900 pd-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum vero ad pariatur quis iure explicabo voluptas nobis exercitationem libero distinctio fugit minus, eaque debitis odit ducimus? Labore, tenetur beatae.
                </Link>
                <Link href="#" className='text-pink-800 hover:text-black'>
                続きを読む
                </Link>
            </div>
        </article>
        <article className='shadow my-4 flex flex-col'>
            <Link href="#" className='hover:opacity-75'>            
            <Image 
            src="/images/mathias-reding-M3vE8oBz1ic-unsplash.jpg" 
            alt="グラフィティの画像" 
            width={1000}
            height={300}
            />
            </Link>
            <div className='bg-white flex flex-col justify-start p-6'>
                <Link href="#" className='text-blue-700 pd-4 font-bold'>
                Tecnology
                </Link>
                <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pd-4'>
                Next.js勉強中
                </Link>
                <p className='text-sm pd-3 text-slate-900'>
                    publish on 2025/05/20
                    </p>
                    <Link href="#" className='text-slate-900 pd-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum vero ad pariatur quis iure explicabo voluptas nobis exercitationem libero distinctio fugit minus, eaque debitis odit ducimus? Labore, tenetur beatae.
                </Link>
                <Link href="#" className='text-pink-800 hover:text-black'>
                続きを読む
                </Link>
            </div>
        </article>
    </div>
    
  );
};

export default ArticleList;
