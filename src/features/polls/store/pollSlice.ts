import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../../app/stores";
import {
    categorizePolls,
    fetchPoll,
    getUserPolls, getUserStatistics, getUserVoteStatistic,
    saveQuestion,
    saveQuestionAnswer
} from "./pollsAPI";
import { TPollsState} from "../types";

const initialState: TPollsState = {
    polls: [],
    userPolls: [],
    poll: null,
    statistics: [],
    catePolls: {
        votedPolls: [], notVotedPolls: []
    },
    error: null,
    status: "idle",
};

export const pollsSlice = createSlice({
    name: "polls",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPoll.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(fetchPoll.fulfilled,
            (state, { payload }) => {
                state.poll = payload;
                state.status = "idle";
            });
        builder.addCase(fetchPoll.rejected,
            (state, { payload }) => {
                state.status = "failed";
            });

        builder.addCase(saveQuestionAnswer.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(saveQuestionAnswer.fulfilled,
            (state, { payload }) => {
                state.userPolls.push(payload);
                state.status = "idle";
            });
        builder.addCase(saveQuestionAnswer.rejected,
            (state, { payload }) => {
                state.status = "failed";
            });

        builder.addCase(saveQuestion.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(saveQuestion.fulfilled,
            (state, { payload }) => {
                state.polls.push(payload);
                state.status = "idle";
            });
        builder.addCase(saveQuestion.rejected,
            (state, { payload }) => {
                state.status = "failed";
            });

        builder.addCase(categorizePolls.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(categorizePolls.fulfilled,
            (state, { payload }) => {
                state.catePolls = payload;
                state.status = "idle";
            });
        builder.addCase(categorizePolls.rejected,
            (state, { payload }) => {
                state.status = "failed";
            });

        builder.addCase(getUserVoteStatistic.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(getUserVoteStatistic.fulfilled,
            (state, { payload }) => {
                state.catePolls = payload;
                state.status = "idle";
            });
        builder.addCase(getUserVoteStatistic.rejected,
            (state, { payload }) => {
                state.status = "failed";
            });

        // builder.addCase(getOverallStatistics.pending, (state) => {
        //     state.status = "loading";
        //     state.error = null;
        // });
        // builder.addCase(getOverallStatistics.fulfilled,
        //     (state, { payload }) => {
        //         state.statistics = payload;
        //         state.status = "idle";
        //     });
        // builder.addCase(getOverallStatistics.rejected,
        //     (state, { payload }) => {
        //         state.status = "failed";
        //     });

        builder.addCase(getUserPolls.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(getUserPolls.fulfilled,
            (state, { payload }) => {
                state.userPolls = payload;
                state.status = "idle";
            });
        builder.addCase(getUserPolls.rejected,
            (state, { payload }) => {
                state.status = "failed";
            });

        builder.addCase(getUserStatistics.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(getUserStatistics.fulfilled,
            (state, { payload }) => {
                state.statistics = payload;
                state.status = "idle";
            });
        builder.addCase(getUserStatistics.rejected,
            (state, { payload }) => {
                state.status = "failed";
            });
    },
});

export const selectStatus = (state: RootState) => state.polls.status;
export const selectError = (state: RootState) => state.polls.error;
export const selectPolls = (state: RootState) => state.polls.polls;
export const selectUserPolls = (state: RootState) => state.polls.userPolls;
export const selectPoll = (state: RootState) => state.polls.poll;
export const selectPollFetchStatus = (state: RootState) => state.polls.status
export const selectCatePolls = (state: RootState) => state.polls.catePolls
export const selectPollStatistics = (state: RootState) => state.polls.statistics

export default pollsSlice.reducer;
