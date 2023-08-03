import React, { useState, useEffect } from 'react'
import store from '../store'
import classNames from 'classnames'
import CalculatorToaster from './CalculatorToaster'

const Display = () => {

    const [szam, setSzam] = useState(store.getState().result)

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setSzam(store.getState().result);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            <input
                className="form-control shadow-none overflow-hidden inputStyle"
                maxLength={10}
                readOnly={true}
                value={szam}
            />
        </div>
    )
}

const CalcButtons = () => {

    const buttons = ["C", "+/-", "%", "/",
        7, 8, 9, "*",
        4, 5, 6, "-",
        1, 2, 3, "+",
        0, '.', "="]

    const [error_toast, setError_toast] = useState(false)
    const [show, setShow] = useState(false);

    const calculatorActions = (label) => () => {
        if (typeof label === "number" || label === ".") {
            store.dispatch({
                type: "APPEND",
                payload: label,
            });
        } else if (label === "+/-") {
            store.dispatch({
                type: "TOGGLE_MINUSPLUS",
            });
        } else if (label === "C") {
            store.dispatch({
                type: "CLEAR",
            });
        } else if (typeof label === "string" && 
                ["-", "+", "*", "/", "%"].includes(label)) {
            store.dispatch({
                type: "HANDLE_OPERATOR",
                payload: label,
            });
        } else {
            store.dispatch({
                type: "CALC",
            });
        }
    }

    const getButtonClassName = (label) => {
        return classNames({
            buttons: true,
            btn: true,
            "btn-danger": label === "=",
            "btn-secondary": typeof label === "number" || label === ".",
            "btn-warning": ["*", "/", "-", "+"].includes(label),
            buttonsWidth: true,
            zeroWidth: label === 0,
        });
    };


    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setError_toast(store.getState().error_toast);
        });

        if (error_toast) {
            setShow(true);
            const timeout = setTimeout(() => {
                setError_toast(true);
            }, 3200);

            return () => {
                clearTimeout(timeout);
            };
        }

        return () => {
            unsubscribe();
        };
    }, [error_toast]);

    return (
        <div className="container-fluid mt-1 buttonsContainer">
            {buttons.map(function (label, index) {
                return (
                    <button
                        onClick={calculatorActions(label)}
                        className={getButtonClassName(label)}
                        key={index}>
                        {label}
                    </button>)
            })}
            {!error_toast && <CalculatorToaster setShow={setShow} show={show} />}
        </div>
    )
}

export { Display, CalcButtons };