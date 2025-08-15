'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Experiences
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Metroguild Inc.',
							description: 'Software Engineer | June 2023 - May 2025 | Pune, India',
							details: [
								'I developed an application usage analytics dashboard for all communication channels, in addition to tracking page visits and clicks in Metroleads. This internal tool was primarily used by the Customer Success and Sales teams to analyze client-wise and user-wise trends, enabling more effective product upselling.',
								'I integrated the Postsales module into Metroleads, transforming it into a one-stop solution for the complete sales cycle by consolidating lead generation, sales engagement, inventory management, and payment collection.',
								'I redesigned the communication channel workflow by developing an entirely new microservice for bulk, scheduled, and triggered operations, incorporating retry mechanisms and messaging queues. This reduced peak-hour load on the application’s microservice and significantly lowered the failure rate.',
								'I set up Jenkins for all Metroleads microservices across development, staging, and production environments with role-based access control, persisting data, configurations, and settings using EBS. Additionally, I migrated from a template-based Dockerfile build strategy to a builder–runner build strategy, significantly increasing release frequency and drastically reducing build times.',
								'I implemented CloudWatch Alarms in AWS to monitor custom disk usage percentage and CPU usage percentage metrics for EC2 instances, integrating with Microsoft Teams webhooks to deliver real-time alerts, significantly reducing response time for critical issues.'
							],
							tech: ['Python', 'Django','FastAPI','Cassandra','Redis', 'RabbitMQ', 'AWS','Kubernetes', 'Docker', 'Ansible', 'Terraform'],
						},
						{
							title: 'Zoomcar',
							description: 'Intern - Frontend Engineer | Jan 2023 - May 2023 | Bangalore, India',
							details: [
								'Developed responsive Vue.js components for the city-specific map feature and React.js components for the offer service, enhancing the user experience across multiple geographies. Designed and generated JSON datasets for every serviceable city in India, implementing selective rendering based on cookies or Redux/Vuex state management.',
								'Built a nudge popup component using Onelink to drive mobile app downloads for international users. Improved SEO performance by implementing dynamic meta tags, canonical tags, hreflang, and href attributes tailored to 32 cities across 4 countries, significantly boosting search visibility and regional relevance.',
							],
							tech: ['Vue.js', 'React.js', 'HTML', 'Tailwind CSS', 'JavaScript'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4 text-green-400">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2 text-green-400">Key Achievements:</h4>
								<ul className="space-y-2 text-gray-300 pl-6 text-justify ">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2 text-green-400">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
