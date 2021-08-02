import { useDispatch } from 'react-redux'
import * as types from '../types'
import { Dispatch } from 'redux';
// async (dispatch: any)
export const showNetworkError = () => {
    return {
        type: types.NETWORK_ERROR,
        payload: "Đường truyền mạng của bạn có vấn đề. Hãy kiểm tra kết nối mạng và tải lại trang.",
    }
}




// () => {
//     const dispatch = useDispatch();
//     dispatch(
//         {
//             types: types.NETWORK_ERROR,
//             payload: "Một vấn đề đã xảy ra với kết nối internet của bạn. Bạn hãy kiểm tra lại đường truyền và tải lại trang.",
//         }
//     )
// }