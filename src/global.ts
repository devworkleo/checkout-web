import { styled } from "styled-components"

export const CheckoutFluter = styled.div``
export const CheckoutOrder = styled.div``
export const CheckoutPayment = styled.div``
export const TotalOrder = styled.div``
export const Text = styled.span``
export const Dotteds = styled.div``
export const Dotted = styled.span``
export const TypesAndInformationsOrders = styled.div``
export const TypeAndInformationOrder = styled.div``
export const CheckoutOptions = styled.div``
export const CheckoutConfirmButton = styled.button``
export const CheckoutCancelButton = styled.button``
export const CheckoutLayout = styled.div`
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    ${CheckoutFluter} {
        width: 90%;
        display: flex;
        max-width: 1200px;
        align-items: center;
        border-radius: 10px;
        justify-content: center;
        box-shadow: 0px 5px 10px -1px rgba(0,0,0.3);
        ${CheckoutOrder} {
            width: 50%;
            display: flex;
            min-height: 300px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #EAEAEA;
            ${TotalOrder} {
                width: 100%;
                display: flex;
                padding: 15px 30px;
                align-items: center;
                background-color: #009CDE;
                justify-content: space-between;
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
            }
        }
        ${CheckoutPayment} {
            width: 50%;
            display: flex;
            min-height: 300px;
            align-items: center;
            flex-direction: column;
            justify-content: space-evenly;
            background-color: #355C7D;
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
                    margin-top: 5px;
                    align-items: center;
                    justify-content: flex-start;
                    ${Dotted} {
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color: white;
                    }
                }
            }
            ${CheckoutOptions} {
                gap: 20px;
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: center;
                ${CheckoutConfirmButton} {
                    width: 50%;
                    color: white;
                    font-size: 1em;
                    cursor: pointer;
                    font-weight: 600;
                    padding: 10px 0px;
                    text-align: center;
                    border-radius: 30px;
                    border: 1px solid #009CDE;
                    text-transform: uppercase;
                    background-color: #009CDE;
                }
                ${CheckoutCancelButton} {
                    width: 50%;
                    color: #819AAE;
                    font-size: 1em;
                    cursor: pointer;
                    font-weight: 600;
                    padding: 10px 0px;
                    text-align: center;
                    border-radius: 30px;
                    border: 1px solid #819AAE;
                    text-transform: uppercase;
                    background-color: transparent;
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