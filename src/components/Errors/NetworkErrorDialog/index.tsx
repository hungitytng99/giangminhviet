import React, { useEffect, useRef, useState } from 'react'
import { NextPage } from "next";

interface Props {
}
const NetworkErrorDialog: NextPage<Props> = (props) => {
    return (<>
        <div className="loading">
            ERROR
        </div>
    </>)
}
export default NetworkErrorDialog;