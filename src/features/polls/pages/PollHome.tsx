import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../../app/stores";
import {selectCatePolls} from "../store/pollSlice";
import {useAppDispatch} from "../../../common/hooks";
import {getUserVoteStatistic} from "../store/pollsAPI";
import {Button} from "flowbite-react";
import {QuestionType} from "../components/QuestionType";
import {selectAuth} from "../../auth/store/authSlice";

const PollHome: React.FC = () => {
    const catePolls = useTypedSelector(selectCatePolls);
    const authState = useTypedSelector(selectAuth);
    const [showAnswered, setShowAnswered] = useState(false);
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(authState) dispatch(getUserVoteStatistic(authState.id))
    }, [authState, dispatch]);

    const toggleView = () => {
        setShowAnswered(!showAnswered);
    };

    return <section className={'container mx-auto flex flex-col gap-10'}>
        <Button onClick={toggleView} color={'light'}>{showAnswered ? "Show Unanswered Polls" : "Show Answered Polls"}</Button>

        {showAnswered ? <QuestionType name={'Done'} items={catePolls.votedPolls}/>
            : <QuestionType name={'New Question'} items={catePolls.notVotedPolls}/> }
    </section>
}

export default PollHome