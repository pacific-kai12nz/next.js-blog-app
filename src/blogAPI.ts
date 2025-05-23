"use client";
import { Article } from "./types";

// ダミーデータ
const dummyArticles: Article[] = [
  {
    id: '1',
    title: 'Next.jsの基本',
    content: 'Next.jsの基本的な使い方について解説します。Next.jsはReactベースのフレームワークで、サーバーサイドレンダリングや静的サイト生成などの機能を簡単に実装できます。',
    category: 'フロントエンド',
    createdAt: '2025-05-20T00:00:00Z',
    imageUrl: '/images/nextjs.jpg'
  },
  {
    id: '2',
    title: 'TypeScript入門',
    content: 'TypeScriptの基本的な型の使い方について説明します。TypeScriptはJavaScriptに静的型付けを追加した言語で、大規模なアプリケーションの開発に適しています。',
    category: 'プログラミング言語',
    createdAt: '2025-05-21T00:00:00Z',
    imageUrl: '/images/typescript.jpg'
  }
];

export const getAllArticles = async (): Promise<Response> => {
  // 常にダミーデータを返す
  return new Response(JSON.stringify(dummyArticles), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};