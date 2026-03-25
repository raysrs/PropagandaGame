function BadgeandBlurb({badgename, image, blurb}) {
    return(
        <>
        <div className="flex items-stretch">
            <div className="h-[210px] w-[210px] overflow-hidden rounded-full text-center inline-block align-middle">
                <img className="z-0 h-full w-full object-cover object-center rounded-full" src={image} alt="badgepic"></img>
            </div>
            <div className="bg-lime-500 w-[300px] h-[210px] text-center p-4 m-4">
                <div className="font-bold">{badgename}</div>
                {blurb}
            </div>
        </div>
        </>

    )
}

export default BadgeandBlurb;