'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    FaChevronDown,
    FaChevronUp,
} from 'react-icons/fa';


import gallery1 from '../../assets/material-symbols_cast-for-education-rounded.svg';
import gallery2 from '../../assets/material-symbols_cast-for-education-rounded.svg';
import gallery3 from '../../assets/material-symbols_clean-hands.svg';
import gallery4 from '../../assets/material-symbols_clean-hands.svg';

import image1 from '../../assets/material-symbols_clean-hands.svg'
import image2 from '../../assets/ix_health-filled.svg'
import image3 from '../../assets/material-symbols_clean-hands.svg'
import image4 from '../../assets/f7_house-fill.svg'
import image5 from '../../assets/material-symbols_cast-for-education-rounded.svg'
import image6 from '../../assets/emojione-monotone_building-construction.svg'

import one from "../../assets/WanttodonateHereishowitworks/1.svg"
import two from "../../assets/WanttodonateHereishowitworks/2.svg"
import three from "../../assets/WanttodonateHereishowitworks/3.svg"
import four from "../../assets/WanttodonateHereishowitworks/4.svg"

export default function HomePage() {
    const features = [
        { icon: image1, title: 'Access to clean water' },
        { icon: image2, title: 'Community health and wellness' },
        { icon: image3, title: 'Micro enterprise funding' },
        { icon: image4, title: 'Housing and food security' },
        { icon: image5, title: 'Education and youth empowerment' },
        { icon: image6, title: 'Sustainable development project' },
    ];

    const howItWorks = [
        {
            step: one,
            title: 'Make a donation',
            desc: 'Your contribution empowers our outreach programs and supports real needs.',
        },
        {
            step: two,
            title: 'Become a Pillar',
            desc: 'Make monthly donations and track the long-term impact of your support.',
        },
        {
            step: three,
            title: 'Track & Earn Rewards',
            desc: 'Receive recognition and badges as a regular donor or contributor.',
        },
        {
            step: four,
            title: 'Invite & Share',
            desc: 'Encourage your friends and family to support this cause too!',
        },
    ];

    const faqs = [
        {
            question: 'How can I donate?',
            answer: 'You can donate through our secure online platform using card or bank transfer.',
        },
        {
            question: 'Are my donations tax deductible?',
            answer: 'Yes, all donations are tax deductible under current Nigerian law.',
        },
        {
            question: 'Can I volunteer?',
            answer: 'Absolutely! Visit our volunteer page to sign up and get involved.',
        },
        {
            question: 'How are funds used?',
            answer: 'Funds go directly to support projects and outreach operations across communities.',
        },
    ];

    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-white text-gray-800 space-y-16 py-12 px-6 md:px-16">

            {/* Header Features */}
            <section className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Focusing on What Truly Matters</h1>
                <p className="max-w-4xl mx-auto text-gray-500 mb-8">
                    Vision-NGP Foundation is a visionary nonprofit organization redefining the way the world experiences philanthropy. We bridge purpose-driven
                    donations with innovative financial reward systems to empower both the donor and the communities we serve.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-[F6EFF1]">
                    {features.map((item, index) => (
                        <div key={index} className="flex flex-row items-center space-x-2 p-4">
                            <div className="text-3xl text-red-700"><Image src={item.icon} alt={item.title} /></div>
                            <h3 className="font-semibold">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-pink-100 p-10 w-full rounded-lg space-y-6">
                <h2 className="text-2xl font-bold  mb-4">Want to donate? <br /> Here&lsquo;s how it works</h2>
                <div className="grid md:grid-cols-2 text-center">
                    {howItWorks.map((step, index) => (
                        <div key={index} className="bg-white flex flex-row">
                            <div className='flex flex-col flex-start'>
                                <h4 className="font-semibold">{step.title}</h4>
                                <p className="text-sm text-gray-500">{step.desc}</p>
                            </div>

                            <div className="flex flex-end"><Image src={step.step} alt={`Step ${index + 1}`} /></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Donate Banner */}
            <section
                className={`bg-[url(/worldBg.svg)] bg-[var(--primary-color600)]  bg-no-repeat bg-right bg-contain h-[300px] w-[70%] mx-auto rounded-md flex flex-col  justify-between text-center`}
            >
                <div className='flex flex-col items-center justify-center h-full p-6 space-y-4'>

                    <h2 className="text-4xl font-semibold mb-2 text-white">
                        Secure a rewarding future even as you impact 
                          lives — Donate Now!
                    </h2>
                    <p className='text-white mt-5'>
                        Behind every donation is a story of hope restored, a need met, a life uplifted. If you feel the tug on your heart, don’t wait. Give today, and be the reason someone smiles tomorrow.
                    </p>
                    <button className="bg-white text-red-700 mt-4 px-6 py-2 rounded-md font-semibold">
                        Donate
                    </button>
                </div>
            </section>



            {/* Gallery */}
            <section>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[gallery1, gallery2, gallery3, gallery4].map((img, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                            <Image src={img} alt={`gallery ${index}`} fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h3>
                <p>
                    Vision-NGP Foundation is a nonprofit organization that combines philanthropy with a reward-based
                    system, offering donors a 300% reward on their donations over 48 months. We work on global
                    projects in education, healthcare, clean water, and more.
                </p>
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-[var(--primary-color300)] pb-3">
                        <button
                            className="w-full flex justify-between items-center font-medium text-left"
                            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        >
                            <span>{faq.question}</span>
                            {openFAQ === index ? <FaChevronUp color="#761C30" /> : <FaChevronDown color="#761C30" />}
                        </button>
                        {openFAQ === index && (
                            <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </section>
        </main>
    );
}
