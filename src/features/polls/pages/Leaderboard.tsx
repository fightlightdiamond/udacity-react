import React, {useEffect} from "react";
import {Avatar, Table} from "flowbite-react";
import {useTypedSelector} from "../../../app/stores";
import {selectPollStatistics} from "../store/pollSlice";
import {useAppDispatch} from "../../../common/hooks";
import { getUserStatistics} from "../store/pollsAPI";

const Leaderboard: React.FC = () => {
    const statistics = useTypedSelector(selectPollStatistics);

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUserStatistics())
    }, [dispatch]);

    return <section className={'container mx-auto flex flex-col gap-10'}>
        <div className="overflow-x-auto">
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Users</Table.HeadCell>
                    <Table.HeadCell>Answers</Table.HeadCell>
                    <Table.HeadCell>Created</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {statistics.map(
                        ({user, created, voted}, key) =>
                            <Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    <Avatar className={'justify-start'} img={user.avatar} alt="avatar of Jese" rounded>
                                        <div className="space-y-1 font-medium dark:text-white">
                                            <div>{user.name}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {user.email}
                                            </div>
                                        </div>
                                    </Avatar>
                                </Table.Cell>
                                <Table.Cell>{voted}</Table.Cell>
                                <Table.Cell>{created}</Table.Cell>
                            </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    </section>
}

export default Leaderboard