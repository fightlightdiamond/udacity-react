import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Button} from "flowbite-react";
import {useAppDispatch} from "../../../common/hooks";
import {
    fetchPoll, getUserPolls,
    saveQuestionAnswer
} from "../store/pollsAPI";
import {useTypedSelector} from "../../../app/stores";
import {selectError, selectPoll, selectStatus, selectUserPolls} from "../store/pollSlice";
import ShowStatus from "../../../common/components/ShowStatus";
import {selectAuth} from "../../auth/store/authSlice";
import {TPoll} from "../types";

const QuestionDetail: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const question = useTypedSelector(selectPoll);
    const auth = useTypedSelector(selectAuth);
    const userPolls = useTypedSelector(selectUserPolls);
    const status = useTypedSelector(selectStatus);
    const error = useTypedSelector(selectError);
    const dispatch = useAppDispatch()
    let navigate = useNavigate();

    const [authVoted, setAuthVoted] = useState<number>()

    useEffect(() => {
        dispatch(fetchPoll(parseInt(id + ''))).then((data) => {
            const payload = data.payload as TPoll;
            if (!payload.id) {
                navigate('/404')
            }
        }).then(() => {
            dispatch(getUserPolls()).then(() => {
                const res =  userPolls.find((u) => u.userId === auth?.id && u.pollId.toString() === id)?.numberSelected
                setAuthVoted(res)
            })
        })

    }, [auth?.id, dispatch, id, navigate, userPolls]);

    const onVoteSubmit = (numberSelected: number) => {
        dispatch(saveQuestionAnswer({
            pollId: parseInt(id + ''),
            userId: auth!.id,
            numberSelected
        }))
    }

    return (
        <div className="flex flex-col gap-8">
            <ShowStatus status={status} error={error}/>
            <div className='text-center flex flex-col gap-6'>
                <h1 className={'text-2xl font-bold leading-8'}>{question?.title}</h1>
                <div className='grid grid-cols-3 '>
                    <img className={'col-start-2'} src={question?.author?.avatar} alt=""/>
                </div>
                <h2 className={'text-xl font-medium leading-6'}>Would you rather</h2>
            </div>
            {
                question ? <div className={'grid grid-cols-2 gap-8 mb-8'}>
                    <div>
                        {question?.option1}
                        <p>Total
                            voted: {question?.voted1} ({question?.voted1 === 0 ? 0 : question?.voted1 * 100 / (question?.voted1 + question?.voted2)}%) </p>
                        {
                            authVoted === 1
                                ? <Button className={'w-full'} color={'green'}>Your
                                    voted</Button>
                                : authVoted === 2 ? <Button disabled={true} className={'w-full'}>Click </Button>
                                : <Button onClick={() => onVoteSubmit(1)} className={'w-full'}>Click</Button>
                        }
                    </div>
                    <div>
                        {question?.option2}
                        <p>Total
                            voted: {question?.voted2} ({question?.voted2 === 0 ? 0 : question?.voted2 * 100 / (question?.voted1 + question?.voted2)}%) </p>
                        {authVoted === 2
                            ? <Button onClick={() => onVoteSubmit(2)} className={'w-full'} color={'green'}>Your
                                voted</Button>
                            : authVoted === 1 ? <Button disabled={true} className={'w-full'}>Click</Button> :
                            <Button onClick={() => onVoteSubmit(2)} className={'w-full'}>Click</Button>
                        }
                    </div>
                </div> : ''
            }

        </div>
    );
};

export default QuestionDetail;
