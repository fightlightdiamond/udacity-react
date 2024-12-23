import React from "react";
import {TStatus} from "../abstracts/types";
import {Alert, Spinner} from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

const ShowStatus = (props: {
    status: TStatus,
    error: string | null
}) => {
    const {status, error} = props;

    return <div>
        {status === "loading" ? <div className="flex flex-wrap gap-2">
            <Spinner color="info" aria-label="Info spinner example"/>
            <Spinner color="success" aria-label="Success spinner example"/>
            <Spinner color="failure" aria-label="Failure spinner example"/>
            <Spinner color="warning" aria-label="Warning spinner example"/>
            <Spinner color="pink" aria-label="Pink spinner example"/>
            <Spinner color="purple" aria-label="Purple spinner example"/>
        </div> : ''}
        {status === "failed" ?
            <Alert color="failure" icon={HiInformationCircle}>
                {error}
            </Alert> : ''}
    </div>
}

export default ShowStatus