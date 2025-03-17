import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { MessageCircle, Video, BookOpenText, LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface FeatureCard {
    icon: LucideIcon;
    title: string;
    description: string;
}

const featureCards: FeatureCard[] = [
    {
        icon: MessageCircle,
        title: "Real, Practical Spanish",
        description: "I teach you the Spanish that people actually speak today, not outdated textbook phrases."
    },
    {
        icon: Video,
        title: "Visual Learning",
        description: "My video lessons make complex grammar concepts easy to understand with clear examples."
    },
    {
        icon: BookOpenText,
        title: "Cultural Context",
        description: "Learn about the differences in how Spanish is spoken across different countries and cultures."
    }
];

export default function Features() {
    return (
        <section className="py-16 md:py-20 dark:bg-transparent">
            <div className="@container">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">My Teaching Approach</h2>
                    <p className="text-lg mt-4 text-zinc-600">I focus on teaching you the Spanish that native speakers actually use in everyday life.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-12 *:text-center md:mt-16">
                    {featureCards.map((card, index) => (
                        <Card key={index} className="group shadow-zinc-950/5 border-rose-200">
                            <CardHeader>
                                <CardDecorator>
                                    <card.icon className="size-6" aria-hidden />
                                </CardDecorator>
                                <h3 className=" text-xl font-medium">{card.title}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-600 text-balance">{card.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-rose-200)40%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-rose-300)60%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-rose-200)30%,transparent)] dark:group-hover:bg-rose-50/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-rose-200)40%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t border-rose-200 rounded-lg">{children}</div>
    </div>
)
