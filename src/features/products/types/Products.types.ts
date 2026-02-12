export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface ProductCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  _id: string;
  title:string;
  name: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  priceAfterDiscount?: number;
  sold: number;
  images: string[];
  imageCover: string;
  category: ProductCategory;
  subcategories: Subcategory[];
  brand: Brand;
  createdAt: string;
  updatedAt: string;
  ratingsAverage: number;
  ratingsQuantity: number;
}

export interface ProductsMetadata {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
}

export interface ProductsResponse {
  results: number;
  data: Product[];
  metadata: ProductsMetadata;
}


export interface SingleProductResponse{
  status: string;
  message?: string;
    data:Product;
}