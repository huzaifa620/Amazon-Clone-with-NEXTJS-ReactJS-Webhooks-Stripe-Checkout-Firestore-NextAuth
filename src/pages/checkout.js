import Header from "../components/Header"
import { useSelector } from "react-redux"
import { selectItems } from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct"
import Currency from "react-currency-formatter"
import { useSession } from "next-auth/react"

const checkout = () => {
  const items = useSelector(selectItems)
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">

        <div className="flex-grow m-5 shadow-sm">

          <img src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" alt='' width={1020} height={250} objectFit='contain' />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4"> {items.length === 0 ? "Your Amazon Basket is Empty !" : "Shopping Basket"} </h1>

            { items.map((item, index) => (

              <CheckoutProduct key={index} id={item.id} title={item.title} price={item.price} rating={item.rating} description={item.description} category={item.category} image={item.image} hasPrime={item.hasPrime} />
              
            ))}

          </div>

        </div>

        <div>
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                {/* <span className="font-bold"> <Currency quantity={total} /> </span> */}
              </h2>

              <button className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>

      </main>
    </div>
  )
}

export default checkout