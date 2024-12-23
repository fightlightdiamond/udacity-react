import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    TPoll,
    PollsError,
    TUserPoll,
    TSaveQuestionAnswer,
    TSaveQuestion,
    TCatePolls,
    TOverallStatistics, TUserStatistic
} from "../types";
import {
    _categorizePolls,
    _getOverallStatistics,
    _getPoll,
    _getPolls, _getUserPolls, _getUserStatistics, _getUserVoteStatistic,
    _saveQuestion,
    _saveQuestionAnswer
} from "../mock/_DATA_";

export const fetchPoll = createAsyncThunk<
    TPoll,
    number,
    { rejectValue: PollsError }
>(
    "poll/fetch",
    async (id: number, thunkApi) => {
        const response = await _getPoll(id)

        // Check if status is not okay:
        if (!response) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to fetch polls."
            });
        }

        return response
    }
);

export const fetchPolls = createAsyncThunk<
    TPoll[],
    number,
    { rejectValue: PollsError }
>(
    "polls/fetch",
    async (limit: number, thunkApi) => {
        const response = await _getPolls()

        // Check if status is not okay:
        if (!response) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to fetch polls."
            });
        }

        return response
    }
);

export const saveQuestionAnswer = createAsyncThunk<
    TUserPoll,
    TSaveQuestionAnswer,
    { rejectValue: PollsError }
>(
    "polls/createUserPoll",
    async (body: TSaveQuestionAnswer, thunkApi) => {
        const response = await _saveQuestionAnswer(body)

        // Check if status is not okay:
        if (!response) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to save question answer."
            });
        }

        return response
    }
);

export const saveQuestion = createAsyncThunk<
    TPoll,
    TSaveQuestion,
    { rejectValue: PollsError }
>(
    "polls/saveQuestion",
    async (body: TSaveQuestion, thunkApi) => {
        const response = await _saveQuestion(body)

        // Check if status is not okay:
        if (!response) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to save question."
            });
        }

        return response
    }
);

export const categorizePolls = createAsyncThunk<
    TCatePolls,
    void,
    { rejectValue: PollsError }
>(
    "polls/categorizePolls",
    async (_, thunkApi) => {
        const response = await _categorizePolls()

        // Check if status is not okay:
        if (!response) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to get categorize Polls."
            });
        }

        return response
    }
);

export const getOverallStatistics = createAsyncThunk<
    TOverallStatistics,
    void,
    { rejectValue: PollsError }
>(
    "polls/_getOverallStatistics",
    async (_, thunkApi) => {
        const response = await _getOverallStatistics()

        // Check if status is not okay:
        if (!response) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to get Overall Statistics."
            });
        }

        return response
    }
);

export const getUserPolls = createAsyncThunk<
    TUserPoll[],
    void,
    { rejectValue: PollsError }
>(
    "polls/_getUserPolls",
    async (_, thunkApi) => {
        const response = await _getUserPolls()

        // Check if status is not okay:
        if (!response) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to get User poll"
            });
        }

        return response
    }
);

export const getUserStatistics = createAsyncThunk<
    TUserStatistic[],
    void,
    { rejectValue: PollsError }
>(
    "polls/_getUserStatistics",
    async (_, thunkApi) => {
        const response = await _getUserStatistics()

        // Check if status is not okay:
        if (!response) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to get User poll"
            });
        }

        return response
    }
);

export const getUserVoteStatistic = createAsyncThunk<
    TCatePolls,
    number,
    { rejectValue: PollsError }
>(
    "polls/getUserVoteStatistic",
    async (userId, thunkApi) => {
        const response = await _getUserVoteStatistic(userId)

        // Check if status is not okay:
        if (!response) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to get User poll"
            });
        }

        return response
    }
);