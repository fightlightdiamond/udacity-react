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