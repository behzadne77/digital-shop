import {Button, Image} from "antd";

export default function Discount() {
    const timeItems = [
        {
            value: 15,
            title: "Day"
        },
        {
            value: 20,
            title: "Hour"
        },
        {
            value: 30,
            title: "Min"
        },
        {
            value: 15,
            title: "Sec"
        }
    ]
    return (
        <section className={"mt-32"}>
            <section className={"p-12 grid grid-cols-2 gap-16 bg-blue-150 rounded-xl"}>
                <section>
                    <h5 className={"flex items-center gap-2 text-red-600"}>
                        <i className={"isax isax-discount-circle p-2 bg-red-600 rounded-lg text-white"} />
                        Special Offer
                    </h5>
                    <h1 className={"mt-6 font-bold text-4xl leading-normal"}>WIRELESS <br/>HEADPHONE</h1>
                    <section className={"mt-5 flex items-center gap-2"}>
                        { timeItems.map(item=> (
                           <section key={item.title} className={"w-14 h-14 bg-white rounded-full text-center"}>
                               <h5 className={"font-bold text-base mt-1"}>{ item.value }</h5>
                               <h6 className={"text-xs mt-1"}>{ item.title }</h6>
                           </section>
                        ))}
                    </section>
                    <Button type={"primary"} className={"mt-8 w-44 h-10"} key={"discount-buy-button"}>
                        Buy Now
                        <i className={"isax isax-arrow-right-1"} />
                    </Button>
                </section>
                <section className={"h-80 flex items-end relative"}>
                    <section
                        className={"shadow-[0_4px_14px_#2358A740] rounded-full w-24 h-24 bg-white absolute left-32 top-10 z-10"}>
                        <h3 className={"text-blue-500 font-semibold text-base text-center mt-5"}>PRICE</h3>
                        <h3 className={"text-dark-800 font-semibold text-base text-center mt-2"}>$200.00</h3>
                    </section>
                    <Image src={"/images/home/product-1.png"} alt={"product image"} className={"h-[26rem]"} preview={false} />
                </section>
            </section>
        </section>
    )
}