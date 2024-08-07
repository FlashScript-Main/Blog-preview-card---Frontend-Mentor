import { avatarImage, illustrationImage } from "../assets"
import { cardDescription, cardPublishedTime, cardTag, cardTitle, cardUserName } from "../constants"

const BlogCard = () => {

    return (
        <div className={`max-w-[337px] p-6 relative | bg-neutral-white font-figtree | border border-neutral-black rounded-3xl | `}>
            <img 
                src={illustrationImage} 
                alt="Illustration Image" 
                className={`mb-6 |  | rounded-xl | `}
            />

            <span className={`px-3 py-[0.3rem] | text-sm text-neutral-black bg-primary-yellow font-extrabold rounded-[0.25rem] |  | `}>
                {cardTag}
            </span>

            <h6 className={`mt-4 mb-3 | text-neutral-black text-[0.8rem] font-semibold |  | `}>
                {cardPublishedTime}
            </h6>

            <a className={` |  |  | group`} href="#">
                <div className={`absolute w-[101%] h-[101%] top-0 left-10 -z-10 bg-neutral-black |  | rounded-3xl | group`} />

                <h3 className={`mb-3 | text-[1.3rem] text-neutral-black font-extrabold |  | `}>
                    {cardTitle}
                </h3>
            </a>

            <p className={`mb-6 | text-[0.9rem] text-neutral-grey font-semibold |  | `}>
                {cardDescription}
            </p>

            <div className={` |  | flex items-center gap-3 | `}>
                <img 
                    src={avatarImage} 
                    alt="Greg Hooper Image" 
                    className={`w-8 h-8 |  |  | `}
                />

                <span className={` | text-neutral-black text-sm font-extrabold |  | `}>
                    {cardUserName}
                </span>
            </div>

        </div>
    )

}

export default BlogCard