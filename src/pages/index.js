// Import from node_modules
/* import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; */
import Head from 'next/head';
/* import { useRef } from 'react'; */

// Components
import Separator from 'src/components/tokens/Separator';
import Features from '../components/sections/Features';
import Hero from '../components/sections/Hero';
import Last from '../components/sections/Last';
import Partners from '../components/sections/Partners';
import Social from '../components/sections/Social';
import Story from '../components/sections/Story';
import Team from '../components/sections/Team';

// Helpers
/* import { useIsomorphicLayoutEffect } from 'src/helpers/useIsomorphicLayoutEffect'; */

/* gsap.registerPlugin(ScrollTrigger, ScrollSmoother); */

export default function Home() {
	/* const main = useRef(null);
	const smoother = useRef(null); */

	/* useIsomorphicLayoutEffect(() => {
		const ctx = gsap.context(() => {
			smoother.current = ScrollSmoother.create({
				smooth: 1,
				effects: true,
				smoothTouch: 0.1,
			});
			ScrollTrigger.create({
				trigger: '.gsap__features',
				pin: '.gsap__features',
				start: 'center bottom',
				end: '+=300',
				markers: true,
			});
		}, main);
		return () => ctx.revert();
	}, []); */

	return (
		<>
			<Head>
				<title>A&S Lifts</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			{/* add ref={main} inside main element */}
			{/* <main id='smooth-wrapper'>
				<div id='smooth-content'> */}
			<main>
				<div>
					{/* Hero section */}
					<Hero className='gsap__hero' dataSpeed='1' />
					{/* Partners section */}
					<Partners className='gsap__partners' dataSpeed='1' />
					{/* Separator */}
					<Separator className='gsap__separator' dataSpeed='1' />
					{/* Features section */}
					<Features className='gsap__features' dataSpeed='1' />
					{/* Separator */}
					<Separator />
					{/* Social section */}
					<Social className='gsap__social' dataSpeed='1' />
					{/* Story section */}
					<Story className='gsap__story' dataSpeed='1' />
					{/* Team section */}
					<Team className='gsap__team' dataSpeed='1' />
					{/* Last action section */}
					<Last className='gsap__last' dataSpeed='1' />
					{/* <Footer /> */}
				</div>
			</main>
		</>
	);
}
