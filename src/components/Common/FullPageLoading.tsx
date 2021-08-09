import React, { useEffect, useRef, useState } from 'react'
import { NextPage } from "next";
import { Spinner } from 'react-bootstrap';

interface Props {
}
const FullPageLoading: NextPage<Props> = (props) => {
    return (<>
        <div className="full-page-loading">
            <Spinner animation="border" variant="warning" />
        </div>
    </>)
}
export default FullPageLoading;