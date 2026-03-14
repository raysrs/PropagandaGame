function BadgeandBlurb({badgename,blurb}) {
    return(
        <>
        <div className="flex items-stretch">
            <div className="bg-pink-400 rounded-full w-[200px] h-[200px] p-[50px] m-4 text-center inline-block align-middle">
                {badgename}
            </div>
            <div className="bg-lime-500 w-[300px] h-[200px] text-center p-4 m-4">
                {blurb}
            </div>
        </div>
        </>

    )
}

export default BadgeandBlurb;