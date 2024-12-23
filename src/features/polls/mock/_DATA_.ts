import {faker} from "@faker-js/faker";
import {
    TCatePolls,
    TFullStatistics,
    TOverallStatistics,
    TPoll,
    TSaveQuestion,
    TSaveQuestionAnswer,
    TUserPoll, TUserStatistic
} from "../types";
import {users} from "../../auth/mock/_DATA_";

const voteFor = (numberSelected: number, p: TPoll) => {
    return numberSelected === 1 ? {
        voted1: p.voted1 + 1
    } : {voted2: p.voted2 + 1}
}

export let polls: TPoll[] = Array.from({length: 15})
    .map((_, index) => {
        const authorId = faker.number.int({min: 0, max: 7});
        const author = users.find((u) => u.id === authorId)

        return {
            id: index,
            authorId: authorId,
            author: author,
            title: faker.lorem.paragraphs(),
            option1: faker.book.title(),
            option2: faker.book.title(),
            voted: false,
            voted1: 0,
            voted2: 0,
            createdAt: faker.date.anytime().toLocaleString()
        }
    });

export let userPolls: TUserPoll[] = Array.from({length: 15})
    .map((_, index) => {
        const pollId = faker.number.int({min: 0, max: 14});
        const numberSelected = faker.number.int({min: 1, max: 2})
        polls = polls.map((p) => p.id === pollId ? {...p, voted: true, ...voteFor(numberSelected, p)} : p)
        return {
            id: index,
            userId: faker.number.int({min: 0, max: 7}),
            pollId: pollId,
            numberSelected,
        }
    });

export function _saveQuestion(body: TSaveQuestion): Promise<TPoll> {
    const id = polls.length + 1;
    const author = users.find((u) => u.id === body.authorId)
    const poll = {
        id, ...body,
        voted: false,
        author,
        createdAt: faker.date.anytime().toLocaleString(),
        voted1: 0,
        voted2: 0,
    }
    polls.push(poll)
    return Promise.resolve(poll);
}

export function _saveQuestionAnswer(body: TSaveQuestionAnswer): Promise<TUserPoll> {
    const id = userPolls.length + 1;

    const userPoll = {id, ...body}
    userPolls = [...userPolls, userPoll]
    polls = polls.map((p) => p.id === body.pollId ? {...p, voted: true, ...voteFor(body.numberSelected, p)} : p)
    return Promise.resolve(userPoll);
}

export function _getPoll(pollId: number): Promise<TPoll | undefined> {
    const poll = polls.find((p) => p.id === pollId);

    return Promise.resolve(poll);
}

export function _getPolls(): Promise<TPoll[]> {
    return Promise.resolve(polls);
}

export function _getUserPolls(): Promise<TUserPoll[]> {
    return Promise.resolve(userPolls);
}

export const _getOverallStatistics = (): Promise<TOverallStatistics> => {
    const pollsByAuthor = polls.reduce<Record<number, number>>((acc, poll) => {
        acc[poll.authorId] = (acc[poll.authorId] || 0) + 1;
        return acc;
    }, {});

    const votesByUser = userPolls.reduce<Record<number, number>>((acc, vote) => {
        acc[vote.userId] = (acc[vote.userId] || 0) + 1;
        return acc;
    }, {});

    return Promise.resolve({
        pollsByAuthor,
        votesByUser,
    })
};

export const _categorizePolls = (): Promise<TCatePolls> => {
    const votedPolls = polls.filter(poll => poll.voted);
    const notVotedPolls = polls.filter(poll => !poll.voted);

    return Promise.resolve({
        votedPolls,
        notVotedPolls,
    });
};

export const _getUserStatistics = (): Promise<TUserStatistic[]> => {
    const baseData: TFullStatistics = {};

    for (const u of users) {
        baseData[u.id] = {
            user: u,
            created: 0,
            voted: 0
        };
    }
    const createdStatistics = polls.reduce<TFullStatistics>(
        (_, poll) => {
            baseData[poll.authorId].created += 1;
            return baseData;
        },
        {}
    );

    const data =  userPolls.reduce<TFullStatistics>(
        (_, userPoll) => {
            baseData[userPoll.userId].voted += 1;
            return baseData;
        },
        createdStatistics
    );

    const items = Object.entries(data).map(([, item], key) => item);

    return Promise.resolve(items.sort((a, b) => (b.created + b.voted) - (a.created + a.voted)));
};

export const _getUserVoteStatistic = (userId: number): Promise<TCatePolls> => {
    const votedPollIds = userPolls
        .filter((userPoll) => userPoll.userId === userId)
        .map((userPoll) => userPoll.pollId);

    const votedPolls: TPoll[] = polls.filter((poll) => votedPollIds.includes(poll.id));
    const notVotedPolls: TPoll[] = polls.filter((poll) => !votedPollIds.includes(poll.id));
    return Promise.resolve({
        votedPolls,
        notVotedPolls,
    });
};