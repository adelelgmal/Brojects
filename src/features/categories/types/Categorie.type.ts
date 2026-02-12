import { date } from "zod";

// Category Item Type
export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}


export interface CategoriesMetadta{
    currentPage: number;
    numberOfPages: number;
    limit: number;
}

export interface CategoriesResponse{
    results: number;
    metadata: CategoriesMetadta;
    data: Category[];
}





