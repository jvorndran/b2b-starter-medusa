import { Container, Heading } from "@medusajs/ui"
import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import Review from "@modules/checkout/components/review"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"

const CheckoutSummary = ({ cart }: { cart: any }) => {
  return (
    <Container className="sticky top-2 h-fit w-full flex flex-col small:mt-10">
      <ItemsPreviewTemplate items={cart?.items} />
      <Divider className="my-2" />
      <CartTotals totals={cart} />
      {/* <DiscountCode cart={cart} /> */}
      <Review cart={cart} />
    </Container>
  )
}

export default CheckoutSummary
