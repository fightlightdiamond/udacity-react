import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../../app/stores";
import {useAppDispatch} from "../../../common/hooks";
import {Button, Card} from "flowbite-react";
import {selectAuth} from "../../auth/store/authSlice";
import {fetchBestServices} from "../store/bestServicesAPI";
import {selectBestServices, selectError, selectStatus} from "../store/bestServicesSlice";

const BestServices: React.FC = () => {
    const status = useTypedSelector(selectStatus);
    const error = useTypedSelector(selectError);
    const bestServices = useTypedSelector(selectBestServices);

    const authState = useTypedSelector(selectAuth);
    const [showAnswered, setShowAnswered] = useState(false);
    const dispatch = useAppDispatch()

    useEffect(() => {
        // Mở một cửa sổ mới (ví dụ: trang nhận dữ liệu)
        window.postMessage({ key: 123}, '*')

        if(authState) dispatch(fetchBestServices(authState.id))
    }, [authState, dispatch]);

    const toggleView = () => {
        setShowAnswered(!showAnswered);
    };

    return <section className={'container mx-auto flex flex-col gap-10'}>
        <Button onClick={toggleView} color={'light'}>{showAnswered ? "Show Unanswered BestServices" : "Show Answered BestServices"}</Button>

        <div className={'grid grid-cols-4 gap-4'}>
            {
                bestServices.map(_ => {
                    return <Card key={_.id}
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={_.image}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {_.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                })
            }
        </div>

        {/*<QuestionType name={'New Question'} items={cateBestServices.notVotedBestServices}/>*/}
    </section>
}

export default BestServices