import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
    quote: string;
    author: {
        name: string;
        role: string;
        avatar: {
            src: string;
            alt: string;
        };
    };
}

const testimonials: Testimonial[] = [
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        author: {
            name: "Customer Name",
            role: "Role",
            avatar: {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
                alt: "Customer Name",
            },
        },
    },
    {
        quote: "Elig doloremque mollitia fugiat omnis! Explicabo.",
        author: {
            name: "Customer Name",
            role: "Role",
            avatar: {
                src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
                alt: "Customer Name",
            },
        },
    },
];

export default function Testimonial() {
    return (
        <section id="testimonials" className="bg-secondary">
            <div className="py-32 flex flex-col justify-center items-center gap-16 max-w-7xl mx-auto">
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                    <h2 className="md:text-7xl text-5xl text-accent">Testimonials</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
                <div className="flex flex-col gap-16 md:flex-row items-center text-center max-w-5xl">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <p className="mb-8 max-w-4xl px-8 font-medium lg:text-xl">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-2 md:gap-4">
                                <Avatar className="size-12">
                                    <AvatarImage src={testimonial.author.avatar.src} alt={testimonial.author.avatar.alt} />
                                    <AvatarFallback>{testimonial.author.name}</AvatarFallback>
                                </Avatar>
                                <div className="text-left">
                                    <p className="text-sm font-medium md:text-base">{testimonial.author.name}</p>
                                    <p className="text-sm text-muted-foreground md:text-base">
                                        {testimonial.author.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};