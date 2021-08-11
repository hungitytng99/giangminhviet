import React, { useEffect, useRef, useState } from 'react'
import { NextPage } from "next";
import { Spinner } from 'react-bootstrap';

interface Props {
    opacity: number,
}
const FullPageLoading: NextPage<Props> = ({ opacity = 1 }) => {
    return (<>
        <div className="full-page-loading" style={{ backgroundColor: `rgba(234, 234, 234, ${opacity})` }}>
            <Spinner animation="border" variant="warning" />
        </div>
    </>)
}
export default FullPageLoading;