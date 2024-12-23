import {
    _categorizePolls,
    _getOverallStatistics,
    _getPoll,
    _getPolls,
    _getUserPolls,
    _getUserStatistics,
    _saveQuestion,
    _saveQuestionAnswer,
    polls,
    userPolls
} from "./_DATA_";


describe("Polls Service", () => {
    it("should create a new poll using _saveQuestion", async () => {
        const newPoll = {
            authorId: 1,
            title: "Til A",
            option1: "Option A",
            option2: "Option B",
        };

        const savedPoll = await _saveQuestion(newPoll);

        expect(savedPoll).toMatchObject({
            id: expect.any(Number),
            authorId: newPoll.authorId,
            option1: newPoll.option1,
            option2: newPoll.option2,
            voted: false,
            createdAt: expect.any(String),
        });

        expect(polls).toContainEqual(savedPoll);
    });

    it("should save a user's answer using _saveQuestionAnswer", async () => {
        const body = {
            userId: 1,
            pollId: 0,
            numberSelected: 1,
        };

        const userPoll = await _saveQuestionAnswer(body);

        expect(userPoll).toMatchObject({
            id: expect.any(Number),
            userId: body.userId,
            pollId: body.pollId,
            numberSelected: body.numberSelected,
        });

        const relatedPoll = polls.find((poll) => poll.id === body.pollId);
        expect(relatedPoll?.voted).toBe(true);

        expect(userPolls).toContainEqual(userPoll);
    });

    it("should retrieve a poll by ID using _getPoll", async () => {
        const poll = await _getPoll(0);
        expect(poll).toBeDefined();
        expect(poll?.id).toBe(0);
    });

    it("should retrieve all polls using _getPolls", async () => {
        const allPolls = await _getPolls();
        expect(allPolls).toEqual(polls);
    });

    it("should retrieve all user polls using _getUserPolls", async () => {
        const allUserPolls = await _getUserPolls();
        expect(allUserPolls).toEqual(userPolls);
    });

    it("should return overall statistics using _getOverallStatistics", async () => {
        const stats = await _getOverallStatistics();

        expect(stats.pollsByAuthor).toBeDefined();
        expect(stats.votesByUser).toBeDefined();

        Object.entries(stats.pollsByAuthor).forEach(([authorId, pollCount]) => {
            const authorPolls = polls.filter((poll) => poll.authorId === Number(authorId));
            expect(pollCount).toBe(authorPolls.length);
        });

        Object.entries(stats.votesByUser).forEach(([userId, voteCount]) => {
            const userVotes = userPolls.filter((vote) => vote.userId === Number(userId));
            expect(voteCount).toBe(userVotes.length);
        });
    });

    it("should categorize polls using _categorizePolls", async () => {
        const categories = await _categorizePolls();

        expect(categories.votedPolls).toEqual(polls.filter((poll) => poll.voted));
        expect(categories.notVotedPolls).toEqual(polls.filter((poll) => !poll.voted));
    });

    it("should return user statistics using _getUserStatistics", async () => {
        const stats = await _getUserStatistics();

        stats.forEach((stat) => {
            const userId = stat.user.id
            const createdPolls = polls.filter((poll) => poll.authorId === Number(userId)).length;
            const votedPolls = userPolls.filter((userPoll) => userPoll.userId === Number(userId)).length;

            expect(stat.created).toBe(createdPolls);
            expect(stat.voted).toBe(votedPolls);
            expect(stat.user).toBeDefined();
        });
    });
});
