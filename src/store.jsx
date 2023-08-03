import { createStore } from 'redux';

const reducer = (state = { result: '', error_toast: true }, action) => {
    switch (action.type) {

        case 'CALC':
            try {
                const calculatedResult =
                    ((eval(state.result)
                        .toFixed(4)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')))
                        .slice(0, 10)
                return { ...state, result: calculatedResult, error_toast: true };
            } catch (e) {
                return { ...state, result: '', error_toast: false }
            }

        case 'APPEND':
            const decimalChar = state.result;
            if ( action.payload === '.' && /[.]/.test(decimalChar) ) {
                    const updatedResult = state.result.slice(0, -1) + action.payload;
                    return { ...state, result: updatedResult, error_toast: true };
            } else {
                state.result += action.payload
            }
            break;
        case 'CLEAR':
            return { ...state, result: '', error_toast: true}
        case 'TOGGLE_MINUSPLUS':
            if (state.result === '') {
                return { ...state, result: '-', error_toast: true };
            } else if (state.result === '-') {
                return { ...state, result: '', error_toast: true };
            }
            break;
        case 'HANDLE_OPERATOR':
            const lastChar = state.result;
            if (/[+\-*/%]/.test(lastChar)) {
                const updatedResult = state.result.slice(0, -1) + action.payload;
                return { ...state, result: updatedResult, error_toast: true };
            } else {
                return { ...state, result: state.result + action.payload, error_toast: true };
            }
    }
    return state;
};

// DARKTHEME WILL BE

// export const Darktheme = () => {
//     return (<style type="text/css">
//         {`
//     .bg-primary {
//         background-color: #000!important;
//     }

//     body{
//         background: rgb(40,40,40);
//         color:#fff!important;
//     }

//     .toast-body {
//         background: rgb(100,100,100)!important;
//     }
//     `}
//     </style>)
// }

const store = createStore(reducer, { result: '' });
  
export default store;