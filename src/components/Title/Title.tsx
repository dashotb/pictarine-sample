export const Title = (props: any) => {
    return(
        <h2 className="text-[1.6rem] lg:text-[3.5rem] pr-3 lg:pr-0 lg:pl-6 flex flex-col pb-12 lg:pb-20 ">
            {props.title}
            <span className="absolute pt-5 lg:pt-12 pl-6 text-rosso text-[2.2rem] lg:text-[4.2rem] italic font-extrabold ">{props.sub}</span>
        </h2>
    )
}