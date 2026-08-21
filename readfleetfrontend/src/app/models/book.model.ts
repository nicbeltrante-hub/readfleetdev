export type ReadStatus = 'reading' | 'completed' | 'want-to-read';

export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    totalPages: number;
    pagesRead: number;
    status: ReadStatus;
    coverColor: string;
    startDate?: string;
    endDate?: string;
    rating?: number;
}

export interface BookRequest {
    title: string;
    author: string;
    genre: string;
    totalPages: number;
    status: ReadStatus;
    coverColor: string;
}

export interface BookUpdateRequest {
    pagesRead: number;
    status: ReadStatus;
    rating?: number | null;
}