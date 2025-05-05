import {faker} from "@faker-js/faker";
import {
    TBestService, TDoctor,
} from "../types";
import {DoctorSpecialty} from "../enum";

export const bestServices: TBestService[] = Array.from({length: 15})
    .map((_, index) => {
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

function getRandomDoctorSpecialty(): DoctorSpecialty {
    const values = Object.values(DoctorSpecialty);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex] as DoctorSpecialty;
}


export const doctors: TDoctor[] = Array.from({length: 111})
    .map((_, index) => {
        const authorId = faker.number.int({min: 0, max: 7});
        const experienceYear = faker.number.int({min: 1, max: 7});
        const rating = faker.number.int({min: 1, max: 5});

        return {
            id: index,
            userId: authorId,
            experienceYear: experienceYear,
            rating: rating,
            specialty: getRandomDoctorSpecialty(),
            createdAt: faker.date.anytime().toLocaleString()
        }
    })

export function _findDoctors(specialty: DoctorSpecialty): Promise<TDoctor[]> {
    return Promise.resolve(doctors.filter(_ => _.specialty === specialty));
}