import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-violet-950 hover:bg-violet-500 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What are the major services Rawind Soft-Tech delivers?",
    answer: "Rawind Soft-Tech delivers multiple services for its clients, which are as follows.Mobile App Development, Web App Development, Quality Assurance, Artificial Intelligence, Machine Learning, UI/UX Design, Digital Marketing",
  },
  {
    question: "How many industries does Rawind Soft-Tech cater to?",
    answer: "We specialize in the following industries: Retail, Health Care, Research & Development, Business/IT Services, eCommerce Industry, Travel & Hospitality, Construction, Logistics & Automotive",
  },
  {
    question: "What types of technologies does Rawind Soft-Tech support",
    answer:
      "Rawind Soft-Tech caters for the following technologies: PHP, Laravel, React, Python, iOS & Android, JavaScript, TypeScript, Java, Node-JS, RoR,.NET, AI & ML, Blockchain, UI/UX",
  },
  {
    question: "How many people work full-time for Rawind Soft-Tech?",
    answer: "Rawind Soft-Tech has strived to make a competent team of 1300+ engineers within 13 years. We are trusted by leading companies worldwide and have completed 3000+ projects with 400+ clients.",
  },
];

export default Faq;