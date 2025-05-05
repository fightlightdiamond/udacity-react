import {DoctorSpecialty} from "./enum";

export type TDoctor = {
    id: number,
    userId: number,
    experienceYear: number,
    rating: number,
    specialty: DoctorSpecialty,
    createdAt: string
}


export type TReview = {
    id: number,
    userId: number,
    review: number,
    rating: number,
    createdAt: string
}

export type TBestService = {
    id: number,
    title: string,
    image: string,
    createdAt: string
}

export type BestServicesError = {
    message: string;
};

export type TBestServicesState = {
    status: "loading" | "idle" | "failed" | "succeeded";
    error: string | null;
    bestServices: TBestService[];
    bestService: TBestService | null;
};