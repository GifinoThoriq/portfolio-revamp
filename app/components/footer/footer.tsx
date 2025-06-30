export default function Footer(){
    return(
        <div className="max-w-7xl lg:px-0 px-4 mx-auto">
            <div className="my-12 flex sm:flex-row flex-col justify-between items-end">
                <div className="self-start">
                    <img src="/images/logo.png" className="w-[100px] mb-4" />
                    <h4 className="text-xl font-semibold">Gifino Thoriq &#169;</h4>
                    <h4>All Rights Reserved</h4>
                </div>
                <div className="flex gap-6 sm:mt-0 mt-4">
                    <h3 className="text-xl font-semibold hover:text-neutral-400 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/gifino-thoriq/', '_blank')}>Linkedin</h3>
                    <h3 className="text-xl font-semibold hover:text-neutral-400 cursor-pointer" onClick={() => window.open('https://github.com/GifinoThoriq', '_blank')}>Github</h3>
                    <h3 className="text-xl font-semibold hover:text-neutral-400 cursor-pointer">My Resume</h3>
                </div>
            </div>
        </div>

    )
}