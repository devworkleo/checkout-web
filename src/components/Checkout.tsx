import { CheckoutCancelButton, CheckoutConfirmButton, CheckoutFluter, CheckoutLayout, CheckoutOptions, CheckoutOrder, CheckoutPayment, Dotted, Dotteds, Text, TotalOrder, TypeAndInformationOrder, TypesAndInformationsOrders } from "../global"

export const Checkout = () => {
  return <CheckoutLayout>
    <CheckoutFluter>
      <CheckoutOrder>
        <TotalOrder>
          <Text>Total</Text>
          <Text>$248</Text>
        </TotalOrder>
      </CheckoutOrder>
      <CheckoutPayment>
        <TypeAndInformationOrder>
          <Text>Cardholder's Name</Text>
          <Text>John Doe</Text>
        </TypeAndInformationOrder>
        <TypeAndInformationOrder>
          <Text>Card Number</Text>
          <Text>0165 8954 9983 2035</Text>
        </TypeAndInformationOrder>
        <TypesAndInformationsOrders>
          <TypeAndInformationOrder>
            <Text>Expiration Date</Text>
            <Text>04/2017</Text>
          </TypeAndInformationOrder>
          <TypeAndInformationOrder>
            <Text>CVC</Text>
            <Dotteds>
              <Dotted />
              <Dotted />
              <Dotted />
            </Dotteds>
          </TypeAndInformationOrder>
        </TypesAndInformationsOrders>
        <CheckoutOptions>
          <CheckoutConfirmButton>Checkout</CheckoutConfirmButton>
          <CheckoutCancelButton>Cancel</CheckoutCancelButton>
        </CheckoutOptions>
      </CheckoutPayment>
    </CheckoutFluter>
  </CheckoutLayout>
}