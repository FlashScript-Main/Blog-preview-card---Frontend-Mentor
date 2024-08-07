import { avatarImage, illustrationImage } from "../assets"
import { cardDescription, cardPublishedTime, cardTag, cardTitle, cardUserName } from "../constants"

const BlogCard = () => {

    return (
        <div className={`max-w-[330px] p-6 relative | bg-neutral-white font-figtree | border border-neutral-black rounded-3xl | `}>
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

            <a className={`inline-block |  |  | group`} href="#">
                <h3 className={`mb-3 | text-[1.3rem] text-neutral-black hover:text-primary-yellow font-extrabold transition-all |  | group`}>
                    {cardTitle}
                </h3>
                
                <div className={`absolute w-[101%] h-[101%] inset-0 -z-10 left-[0.5rem] top-[0.4rem] | bg-neutral-black | rounded-3xl | group-hover:left-[0.8rem] group-hover:top-[0.8rem] transition-all`} />
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