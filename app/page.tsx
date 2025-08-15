'use client';

import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			<ExperienceSection />
			<ProjectSection />
			<ContactSection />
		</main>
	);
}
