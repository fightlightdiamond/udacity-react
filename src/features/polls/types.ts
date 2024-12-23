import {TUser} from "../../common/abstracts/types";

export type TPoll = {
    id: number,
    authorId: number,
    author: TUser | undefined,
    title: string,
    option1: string,
    option2: string,
    voted: boolean,
    voted1: number,
    voted2: number,
    createdAt: string
}

export type TUserPoll = {
    id: number,
    userId: number,
    pollId: number,
    numberSelected: number,
}

export type TOverallStatistics = {
    pollsByAuthor: Record<number, number>; // authorId => số polls
    votesByUser: Record<number, number>; // userId => số votes
};

export type TCatePolls = {votedPolls: TPoll[], notVotedPolls: TPoll[]}

export type PollsError = {
    message: string;
};

export type TPollsState = {
    status: "loading" | "idle" | "failed" | "succeeded";
    error: string | null;
    polls: TPoll[];
    userPolls: TUserPoll[];
    poll: TPoll | null;
    statistics: TUserStatistic[];
    catePolls: TCatePolls;
};

export type TSaveQuestionAnswer = {
    pollId: number,
    userId: number,
    numberSelected: number
}

export type TSaveQuestion = {
    authorId: number,
    title: string,
    option1: string,
    option2: string
}

export type TUserStatistic = {
    user: TUser,
    created: number;
    voted: number;
};

export type TFullStatistics = Record<number, TUserStatistic>;