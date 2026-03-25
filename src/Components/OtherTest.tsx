import { useState } from "react";

const reviews = [
    {
        id: "review-01",
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: {
            name: "Caitlyn King",
            title: "Head of Design, Layers",
            avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        },
    },
    {
        id: "review-02",
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        author: {
            name: "Amélie Laurent",
            title: "Product Manager, Wildcrafted",
            avatarUrl: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80",
        },
    },
    {
        id: "review-03",
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
        author: {
            name: "Demi Wilkinson",
            title: "Head of Design, Layers",
            avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
        },
    },
];
 

 
export const TestimonialSimpleCentered01 = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
 
    return (
        <section className=" py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center text-center gap-10">
                    
                    <p className="origin-bottom text-display-sm font-medium text-balance text-text text-5xl will-change-transform md:text-display-md">
                        {reviews[currentReviewIndex].quote}
                    </p>
                    <div className="flex origin-bottom flex-col items-center gap-4 will-change-transform">
                        <div className="flex flex-col items-center gap-4">
                            <img src={reviews[currentReviewIndex].author.avatarUrl} alt={reviews[currentReviewIndex].author.name} className="w-28 h-28 rounded-full" />
                            <div className="flex flex-col gap-1">
                                <p className="text-2xl font-semibold text-primary">{reviews[currentReviewIndex].author.name}</p>
                                <cite className="text-xl text-tertiary not-italic">{reviews[currentReviewIndex].author.title}</cite>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );

}