export type Article = {
    id: string;
    title: string;
    content: string;
    category?: string; // オプショナルなプロパティに変更
    createdAt: string;
    imageUrl?: string; // オプショナルなプロパティを追加
};