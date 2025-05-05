import React, {useState} from "react";
import {useTypedSelector} from "../../../app/stores";
import {useAppDispatch} from "../../../common/hooks";
import {
    Button,
    Datepicker,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Rating,
    RatingStar,
    Select, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Textarea,
    TextInput
} from "flowbite-react";
import {selectAuth} from "../../auth/store/authSlice";
import {Link} from "react-router-dom";
import {DoctorSpecialty} from "../../home/enum";

const Review: React.FC = () => {
    const authState = useTypedSelector(selectAuth);
    const dispatch = useAppDispatch()
    const [openModal, setOpenModal] = useState(true);

    return <section className={'container mx-auto'}>
        <div className="overflow-x-auto">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>#</TableHeadCell>
                        <TableHeadCell>Doctor Name</TableHeadCell>
                        <TableHeadCell>Doctor Speciality</TableHeadCell>
                        <TableHeadCell>View Report</TableHeadCell>
                        <TableHeadCell>
                            Download Report
                        </TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17"
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>
                            <Button type="submit">View Report</Button>
                        </TableCell>
                        <TableCell>
                            <Button type="submit">Download Report</Button>
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <ModalHeader>Review</ModalHeader>
            <ModalBody>
                <div className="space-y-6">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1">Name:</Label>
                        </div>
                        <TextInput
                            id="base" type="text" sizing="md"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1">Review:</Label>
                        </div>
                        <Textarea id="comment" placeholder="Leave a comment..." required rows={4}/>
                    </div>
                    <div>

                        <div className="mb-2 block">
                            <Label htmlFor="email1">Review:</Label>
                        </div>
                        <Rating>
                            <RatingStar/>
                            <RatingStar/>
                            <RatingStar/>
                            <RatingStar/>
                            <RatingStar filled={false}/>
                        </Rating>
                    </div>

                    <Button className={'w-full'} type="submit">Submit</Button>
                </div>
            </ModalBody>
        </Modal>
    </section>;
}

export default Review