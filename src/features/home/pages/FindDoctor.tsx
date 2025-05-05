import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../../app/stores";
import {useAppDispatch} from "../../../common/hooks";
import {
    Button,
    Card,
    Datepicker,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Rating,
    RatingStar,
    Select,
    TextInput, Toast, ToastToggle
} from "flowbite-react";
import {selectAuth} from "../../auth/store/authSlice";
import {fetchBestServices} from "../store/bestServicesAPI";
import {selectBestServices, selectError, selectStatus} from "../store/bestServicesSlice";
import {DoctorSpecialty} from "../enum";

const FindDoctor: React.FC = () => {
    const status = useTypedSelector(selectStatus);
    const error = useTypedSelector(selectError);
    const bestServices = useTypedSelector(selectBestServices);

    const authState = useTypedSelector(selectAuth);
    const dispatch = useAppDispatch();
    const [openModal, setOpenModal] = useState(true);
    const [bookedModal, setBookedModal] = useState(true);

    useEffect(() => {
        if(authState) dispatch(fetchBestServices(authState.id))
    }, [authState, dispatch]);

    return <section className={'container mx-auto flex flex-col gap-10 relative'}>
        <div className={'flex justify-center items-center'}>
            <Card
                className="max-w-md"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="./book/b1.png"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Find a doctor at your own ease
                </h5>


                <Select id="specialty" required aria-placeholder={'Search doctors by specialty'}>
                    <option value="">Search doctors by specialty</option>
                    {Object.values(DoctorSpecialty).map((_) => <option key={_}>{_}</option>)}
                </Select>
                <Button type="submit">Find</Button>
            </Card>
        </div>

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
                        <div>
                            <p></p>
                        </div>
                        <Rating>
                            <RatingStar />
                            <RatingStar />
                            <RatingStar />
                            <RatingStar />
                            <RatingStar filled={false} />
                        </Rating>
                        <Button type="submit">Book</Button>
                    </Card>
                })
            }
        </div>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <ModalHeader>Booking</ModalHeader>
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
                            <Label htmlFor="email1">Phone:</Label>
                        </div>
                        <TextInput
                            id="base" type="text" sizing="md"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1">Date of Appointment:</Label>
                        </div>
                        <Datepicker/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1">Book Time Slot:</Label>
                        </div>
                        <Select id="specialty" required aria-placeholder={'Search doctors by specialty'}>
                            <option value="">Select a time slot</option>
                            {Object.values(DoctorSpecialty).map((_) => <option key={_}>{_}</option>)}
                        </Select>
                    </div>

                    <Button className={'w-full'} type="submit">Book now</Button>
                    <Button className={'w-full'} type="submit">Cancel Appointment</Button>
                </div>
            </ModalBody>
        </Modal>

        <Modal show={bookedModal} onClose={() => setBookedModal(false)}>
            <ModalHeader>Booking</ModalHeader>
            <ModalBody>
                <div className="space-y-6">
                    information doctor
                    <Button className={'w-full'} type="submit">Cancel Appointment</Button>
                </div>
            </ModalBody>
        </Modal>

        <Toast className={'fixed bottom-2 right-2'}>
            <h3></h3>
            <div className="ml-3 text-sm font-normal">Set yourself free.</div>
            <ToastToggle />
        </Toast>
    </section>
}

export default FindDoctor