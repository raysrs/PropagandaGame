function BadgeandBlurb({badgename,blurb}) {
    return(
        <>
        <div className="flex items-stretch">
            <div className="bg-pink-500 rounded-full w-[200px] h-[200px] p-6 m-4 text-center">
                {badgename}
            </div>
            <div className="bg-blue-500 w-[300px] h-[200px] text-center p-4 m-4">
                {blurb}
            </div>
        </div>
        </>

    )
}

export default BadgeandBlurb;