'use client';

import { motion } from 'framer-motion';

export default function ProjectSection() {
  const projects = [
    {
      category: 'Personal Project',
      title: 'DBChat',
      linkText: 'GitHub Link',
      linkHref: 'https://github.com/vaibhavgupta04/dbchat', // TODO: replace with your repo URL
      bullets: [
        'Built a FastAPI AI chatbot that converts Natural Language Queries to SQL using LangChain, LangGraph, and OpenAI APIs.',
        'Implemented dynamic table selection with automatic schema mapping, enabling complex multi‑table joins without database knowledge.',
        "Built conversational memory architecture, maintaining context using LangChain's ConversationBufferWindowMemory to store recent query history, user preferences, and table selections in memory.",
        'Technology Stack : FastAPI, OpenAI APIs, LangChain, LangGraph, MySQL.'
      ]
    },
    {
      category: 'Research Project',
      title: 'Remote Attestation of Embedded Devices',
      linkText: 'GitHub Link',
      linkHref: 'https://github.com/vaibhavgupta04/remote-attestation-of_ED', // TODO: replace with your repo URL
      bullets: [
        'Built a trust‑verification system for embedded devices with malware detection capabilities using Hardware Performance Counters (HPCs) to analyse program behaviour and calculate deviation from truth values.',
        'Developed a comprehensive solution for embedded device security, focusing on real‑time malware detection through performance monitoring and behavioural analysis.',
        'Technology Stack : Python, Raspberry Pi, Perf tool, C++, LLVM, Graphviz, Shell Scripting.'
      ]
    },
    {
      category: 'Personal Project',
      title: 'PollVote.io — An Online Voting App',
      linkText: 'GitHub Link',
      linkHref: 'https://github.com/vaibhavgupta04/socialxperiment', // TODO: replace with your repo URL
      bullets: [
        'High‑performance polling app in Go (Fiber) with OTP‑based login and shareable links; thousands of concurrent users can create and cast votes.',
        'Streamed real‑time vote events via Kafka into ClickHouse for user‑level and choice‑level analytics persisted in PostgreSQL.',
        'Implemented rate limiting, OTP caching, and asynchronous SendOTP workers (Email/SMS) using Redis.',
        'Technology Stack : Go, Fiber, Redis, PostgreSQL, Kafka, ClickHouse, Docker.'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((proj, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-6 text-green-400">{proj.category}</h3>
              <div className="grid grid-cols-1 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <h4 className="text-lg font-semibold text-gray-300">{proj.title}</h4>
                    <a
                      href={proj.linkHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-green-400 hover:underline"
                    >
                      {proj.linkText}
                    </a>
                  </div>

                  <ul className="mt-3 list-disc list-outside pl-6 space-y-2 text-gray-400 text-justify">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
