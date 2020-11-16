export class ProdutoModel{
    id: number;
    title: string;
    description: string;
    price: number;
    categoryId: number;
    category: {
        categoryId: null;
        title: null;
    }
}