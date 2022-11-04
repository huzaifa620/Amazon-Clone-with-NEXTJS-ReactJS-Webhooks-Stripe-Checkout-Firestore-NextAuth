import Image from "next/image"

const Header = () => {
  return (
    <header>

      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">

        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' width={150} height={40} objectFit='contain' className="cursor-pointer"/>  
        </div> 

        <div>
          <input type="text" />
        </div>

      </div>

      <div>

      </div>
    </header>
  )
}

export default Header
