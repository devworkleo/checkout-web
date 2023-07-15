import { styled } from "styled-components"

export const CheckoutFluter = styled.div``
export const CheckoutOrder = styled.div``
export const CheckoutPayment = styled.div``
export const Legend = styled.span``
export const SizyQtdAndValue = styled.div``
export const SyzeQtd = styled.div``
export const Total = styled.span``
export const Hr = styled.hr``
export const Image = styled.img``
export const PaymentTypes = styled.div``
export const Payment = styled.input``
export const TotalOrder = styled.div``
export const Text = styled.span``
export const Dotteds = styled.div``
export const Dotted = styled.span``
export const TypesAndInformationsOrders = styled.div``
export const TypeAndInformationOrder = styled.div``
export const CheckoutOptions = styled.div``
export const CheckoutConfirmButton = styled.button``
export const CheckoutCancelButton = styled.button``
export const Checkbox = styled.input``
export const RememberMe = styled.div``
export const CheckoutLayout = styled.div`
    width: 100%;
    display: flex;
    margin: 20px 0px;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    ${CheckoutFluter} {
        width: 90%;
        display: flex;
        max-width: 800px;
        align-items: center;
        border-radius: 10px;
        justify-content: center;
        background-color: #355C7D;
        box-shadow: 0px 5px 10px -1px rgba(0,0,0.3);
        ${CheckoutOrder} {
            gap: 10px;
            width: 50%;
            display: flex;
            padding-top: 30px;
            align-items: center;
            flex-direction: column;
            background-color: #EAEAEA;
            justify-content: space-between;
            border-radius: 10px 0px 0px 10px;
            ${Image} {
                width: 80%;
                max-width: 200px;
            }
            ${Legend} {
                width: 80%;
                font-size: 0.9em;
                margin: 10px 0px;
                font-weight: 600;
            }
            ${SizyQtdAndValue} {
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                ${SyzeQtd} {
                    display: flex;
                    font-size: 0.75em;
                    flex-direction: column;
                    &:nth-child(2) {
                        font-weight: 600;
                        text-align: right;
                    }
                }
                ${Total} {
                    font-weight: 600;
                    font-size: 1.4em;
                }
            }
            ${Hr} {
                width: 80%;
                margin: 5px;
                border: 1px solid black;
            }
            ${TotalOrder} {
                width: 100%;
                display: flex;
                margin-top: 20px;
                padding: 15px 30px;
                align-items: center;
                background-color: #009CDE;
                justify-content: space-between;
                border-radius: 0px 0px 0px 10px;
                ${Text}:first-child {
                    font-size: 1.2em;
                    text-transform: uppercase;
                }
                ${Text}:last-child {
                    font-size: 1.1em;
                }
                ${Text} {
                    color: white;
                    font-weight: 600;
                }
                @media (max-width: 1023px) {
                    border-radius: 0px;
                }
            }
        }
        ${CheckoutPayment} {
            width: 50%;
            gap: 30px;
            display: flex;
            overflow: hidden;
            padding: 40px 0px;
            align-items: center;
            flex-direction: column;
            background-color: #355C7D;
            justify-content: space-evenly;
            ${PaymentTypes} {
                gap: 20px;
                width: 80%;
                display: flex;
                align-items: center;
                margin-bottom: 90px;
                justify-content: flex-start;
                ${Payment} {
                    cursor: pointer;
                    appearance: none;
                    filter: opacity(50%);
                    transition: .3s linear;
                    &.first::before {
                        background-image: url('./visamaster.png');
                        background-repeat: no-repeat;
                        background-size: 90%;
                        background-position: center;
                    }

                    &.last::before {
                        background-image: url('./paypal.png');
                        background-repeat: no-repeat;
                        background-size: 55%;
                        background-position: center;
                    }
                }
                ${Payment}:checked {
                    transform: scale(1.01);
                    filter: opacity(100%);
                }
                ${Payment}::before {
                    content: '';
                    width: 150px;
                    height: 80px;
                    position: absolute;
                    border-radius: 10px;
                    background-color: white;
                    box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.3);
                }
                ${Payment}:last-child {
                    transform: translateX(145px);
                }
                /* @media (min-width: 1024px) {
                    ${Payment}::before {
                        min-width: 220px;
                    }
                    ${Payment}:last-child {
                        transform: translateX(235px);
                    }
                } */
            }
            ${TypesAndInformationsOrders} {
                width: 80%;
                display: grid;
                grid-template-columns: 40% 30% 30%;
            }
            ${TypeAndInformationOrder} {
                gap: 10px;
                width: 80%;
                display: flex;
                flex-direction: column;
                ${Text} {
                    font-weight: 600;
                    text-transform: uppercase;
                }
                ${Text}:first-child {
                    color: #819AAE;
                    font-size: 0.7em;
                }
                ${Text}:last-child {
                    color: white;
                    font-weight: 200;
                    font-family: 'OCRA';
                }
                ${Dotteds} {
                    gap: 5px;
                    display: flex;
                    margin-top: 7px;
                    align-items: center;
                    justify-content: flex-start;
                    ${Dotted} {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: white;
                    }
                }
            }
            ${CheckoutOptions} {
                gap: 20px;
                width: 80%;
                display: flex;
                margin-top: 20px;
                align-items: center;
                justify-content: center;
                ${CheckoutConfirmButton} {
                    width: 50%;
                    color: white;
                    font-size: 1em;
                    cursor: pointer;
                    font-weight: 600;
                    padding: 7px 0px;
                    text-align: center;
                    border-radius: 30px;
                    transition: .3s linear;
                    border: 1px solid #009CDE;
                    text-transform: uppercase;
                    background-color: #009CDE;
                    &:hover {
                        border: 1px solid #819AAE;
                        background-color: transparent;
                    }
                }
                ${CheckoutCancelButton} {
                    width: 50%;
                    color: #819AAE;
                    font-size: 1em;
                    cursor: pointer;
                    font-weight: 600;
                    padding: 7px 0px;
                    text-align: center;
                    border-radius: 30px;
                    transition: .3s linear;
                    border: 1px solid #819AAE;
                    text-transform: uppercase;
                    background-color: transparent;
                    &:hover {
                        color: white;
                        border: 1px solid red;
                        background-color: red;
                    }
                }
            }
            ${RememberMe} {
                gap: 10px;
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: center;
                ${Checkbox}:checked {
                    appearance: none;
                    width: 15px;
                    height: 15px;
                    color: white;
                    display: flex;
                    border-radius: 1px;
                    align-items: center;
                    justify-content: center;
                    background-color: #009CDE;
                    &::before {
                        content: '✓';
                        font-size: 0.7em;
                    }
                }
                ${Text} {
                    width: 100%;
                    color: #819AAE;
                    font-size: 0.9em;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        @media (max-width: 1023px) {
            max-width: 400px;
            flex-direction: column;
            ${CheckoutOrder}, ${CheckoutPayment} {
                width: 100%;
            }
            ${CheckoutOrder} {
                border-radius: 10px 10px 0px 0px;
            }
            ${CheckoutPayment} {
                border-radius: 0px 0px 10px 10px;
            }
        }
    }
`