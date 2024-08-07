import { avatarImage, illustrationImage } from "../assets"
import { cardDescription, cardPublishedTime, cardTag, cardTitle, cardUserName } from "../constants"

const BlogCard = () => {

    return (
        <div className={`w-[337px] p-6 | bg-neutral-white | border border-neutral-black rounded-2xl | `}>
            <img 
                src={illustrationImage} 
                alt="Illustration Image" 
                className={`mb-6 |  | rounded-xl | `}
            />

            <span className={` | text-base text-neutral-black bg-primary-yellow font-figtree |  | `}>
                {cardTag}
            </span>

            <h6>
                {cardPublishedTime}
            </h6>

            <h3>
                {cardTitle}
            </h3>

            <p>
                {cardDescription}
            </p>

            <div>
                <img 
                    src={avatarImage} 
                    alt="Greg Hooper Image" 
                />

                <span>
                    {cardUserName}
                </span>
            </div>
        </div>
    )

}

export default BlogCard