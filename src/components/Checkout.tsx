import { Checkbox, CheckoutCancelButton, CheckoutConfirmButton, CheckoutFluter, CheckoutLayout, CheckoutOptions, CheckoutOrder, CheckoutPayment, Dotted, Dotteds, Hr, Image, Legend, Payment, PaymentTypes, RememberMe, SizyQtdAndValue, SyzeQtd, Text, Total, TotalOrder, TypeAndInformationOrder, TypesAndInformationsOrders } from "../global"

export const Checkout = () => {
  return <CheckoutLayout>
    <CheckoutFluter>
      <CheckoutOrder>
        <Image src={'./superstar.png'} />
        <Legend>Adidas Superstar Pride Pack</Legend>
        <SizyQtdAndValue>
          <SyzeQtd>
            <Text>Size: <b>40</b></Text>
            <Text>Quantity: <b>1</b></Text>
          </SyzeQtd>
          <Total>$110</Total>
        </SizyQtdAndValue>
        <Image src={'./stansmith.png'} />
        <Legend>Adidas Stan Smith Pride Pack</Legend>
        <SizyQtdAndValue>
          <SyzeQtd>
            <Text>Size: <b>40</b></Text>
            <Text>Quantity: <b>1</b></Text>
          </SyzeQtd>
          <Total>$130</Total>
        </SizyQtdAndValue>
        <Hr />
        <SizyQtdAndValue>
          <SyzeQtd>
            <Text>Subtotal</Text>
            <Text>Shipping</Text>
          </SyzeQtd>
          <SyzeQtd>
            <Text>$240</Text>
            <Text>$8</Text>
          </SyzeQtd>
        </SizyQtdAndValue>
        <TotalOrder>
          <Text>Total</Text>
          <Text>$248</Text>
        </TotalOrder>
      </CheckoutOrder>
      <CheckoutPayment>
        <PaymentTypes>
          <Payment name={'payment'} type={'radio'} value={'visa'} defaultChecked  className={'first'} />
          <Payment name={'payment'} type={'radio'} value={'paypal'} className={'last'} />
        </PaymentTypes>
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
        <RememberMe>
          <Checkbox type={'checkbox'} defaultChecked />
          <Text>Remember my card information for later</Text>
        </RememberMe>
      </CheckoutPayment>
    </CheckoutFluter>
  </CheckoutLayout>
}