export const Title = (props: any) => {
    return(
        <h2 className="text-[3.5rem] flex flex-col pb-20">
            {props.title}
            <span className="absolute pt-12 pl-6 text-red-600 text-[4.2rem] italic font-extrabold ">{props.subtitle}</span>
        </h2>
    )
}