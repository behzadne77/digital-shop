import {Button, Carousel, Image} from "antd";

export default function HomeSlider () {
    const array = ["","",""]
    return (
        <section className={"bg-blue-100 py-3"}>
            <section className={"container"}>
                <Carousel effect="fade" waitForAnimate={true} arrows={true}>
                    { array.map((value, index)=> (
                        <section key={index}>
                            <section className={"flex items-center gap-6"}>
                                <section>
                                    <h1 className={"font-bold text-5xl leading-loose text-dark-800"}>WIRELESS HEADPHONE</h1>
                                    <Button className={"text-lg mt-12 font-bold flex items-center gap-2 h-12 w-44"}>
                                        Buy Now
                                        <i className={"isax isax-arrow-right-1 mt-1.5"}/>
                                    </Button>
                                </section>
                                <section className={"h-[40rem] overflow-visible relative"}>
                                    <Image alt={"Slide"} src="/images/home/slide-1.png" preview={false}
                                           className={"w-[55rem] z-10 relative"} loading={"lazy"}/>
                                    <section
                                        className={"shadow-[0_4px_14px_#2358A740] rounded-full w-20 h-20 bg-white absolute left-[20rem] top-24 z-10"}>
                                        <h3 className={"text-blue-500 font-semibold text-base text-center mt-3"}>PRICE</h3>
                                        <h3 className={"text-dark-800 font-semibold text-sm text-center mt-3"}>${(index + 1) * 200}.00</h3>
                                    </section>
                                    <section className={"absolute bottom-0 left-[10rem]"}>
                                        <svg width="589" height="496" viewBox="0 0 589 496" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="417.605" height="524" transform="matrix(1 0 -0.325568 0.945519 170.598 0)" fill="url(#paint0_linear_968_14261)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_968_14261" x1="208.802" y1="0" x2="208.802" y2="524" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor={"#F9FCFF"}/>
                                                    <stop offset="1" stopColor={"#EAF1F7"}/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </section>
                                </section>
                            </section>
                        </section>
                    ))}
                </Carousel>
            </section>
        </section>
    )
}