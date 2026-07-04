'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, Dna, Brain, Baby, Microscope } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <p className="text-sm font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-4">
                                    Consultant Clinical Geneticist
                                </p>
                                <h1 className="mt-4 max-w-2xl text-balance text-5xl font-bold md:text-6xl lg:mt-8 xl:text-7xl leading-tight">
                                    Dr Schaida<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500">
                                        Schirwani
                                    </span>
                                </h1>
                                <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground leading-relaxed">
                                    Expert assessment and genetic counselling for neurodevelopmental disorders, rare diseases, and prenatal genetics. Accepting private referrals.
                                </p>

                                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base bg-cyan-600 hover:bg-cyan-700">
                                        <Link href="#contact">
                                            <span className="text-nowrap">Book an Appointment</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                        <Link href="#about">
                                            <span className="text-nowrap">Learn more</span>
                                        </Link>
                                    </Button>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-2 lg:justify-start justify-center">
                                    {['MBBS', 'PhD', 'MRCP (UK)', 'FRCPath', '32+ Publications'].map((cred) => (
                                        <span
                                            key={cred}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-50 text-cyan-800 border border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800"
                                        >
                                            {cred}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="size-full object-cover opacity-40 invert dark:opacity-30 dark:invert-0 dark:lg:opacity-60"
                                src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-background pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-52 md:border-r md:pr-6 shrink-0">
                                <p className="text-end text-sm text-muted-foreground font-medium">Areas of expertise</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-13rem)]">
                                <InfiniteSlider speedOnHover={20} speed={30} gap={80}>
                                    <SpecialismItem icon={<Dna className="h-4 w-4" />} label="Rare Genetic Conditions" />
                                    <SpecialismItem icon={<Brain className="h-4 w-4" />} label="Neurodevelopmental Disorders" />
                                    <SpecialismItem icon={<Baby className="h-4 w-4" />} label="Prenatal Genetics" />
                                    <SpecialismItem icon={<Microscope className="h-4 w-4" />} label="Genomic Medicine" />
                                    <SpecialismItem icon={<Dna className="h-4 w-4" />} label="Dysmorphology" />
                                    <SpecialismItem icon={<Brain className="h-4 w-4" />} label="Autism & ADHD Genetics" />
                                    <SpecialismItem icon={<Baby className="h-4 w-4" />} label="Chromosomal Disorders" />
                                    <SpecialismItem icon={<Microscope className="h-4 w-4" />} label="Whole Genome Sequencing" />
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20" />
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20" />
                                <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
                                <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

function SpecialismItem({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap">
            <span className="text-cyan-600 dark:text-cyan-400">{icon}</span>
            {label}
        </div>
    )
}

const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Private Practice', href: '#services' },
    { name: 'Research', href: '#publications' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav data-state={menuState && 'active'} className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/80 backdrop-blur-2xl shadow-sm')}>
                    <motion.div className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link href="/" aria-label="Dr Schaida Schirwani homepage" className="flex flex-col leading-tight">
                                <span className="text-sm font-semibold tracking-tight">Dr Schaida Schirwani</span>
                                <span className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">Consultant Clinical Geneticist</span>
                            </Link>
                            <button onClick={() => setMenuState(!menuState)} aria-label={menuState ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} className="text-muted-foreground hover:text-foreground block duration-150"><span>{item.name}</span></Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} className="text-muted-foreground hover:text-foreground block duration-150"><span>{item.name}</span></Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button asChild size="sm" className="rounded-full bg-cyan-600 hover:bg-cyan-700">
                                    <Link href="#contact"><span>Book Appointment</span></Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
