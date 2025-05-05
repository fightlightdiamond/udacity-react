import {faker} from "@faker-js/faker";
import {
    TBestService,
} from "../types";

export let bestServices: TBestService[] = Array.from({length: 15})
    .map((_, index) => {
        const authorId = faker.number.int({min: 0, max: 7});

        return {
            id: index,
            image: `/Genshin/Hinh-nen-Genshin-Impact (${index+2}).jpg`,
            title: faker.book.title(),
            createdAt: faker.date.anytime().toLocaleString()
        }
    });

export function _getBestService(bestServiceId: number): Promise<TBestService | undefined> {
    const bestService = bestServices.find((p) => p.id === bestServiceId);

    return Promise.resolve(bestService);
}

export function _getBestServices(): Promise<TBestService[]> {
    return Promise.resolve(bestServices);
}
