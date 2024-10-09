export type Image = {
    id: number;
    urls: {
        small: string;
        regular: string;
    };
    description: string;
    likes: number;
    user: {
        name: string;
    }
}