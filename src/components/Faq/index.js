import React, { useState } from 'react'
import FAQ from './faqs.js'
import './style.css'
function App () {
    const [faqs, setfaqs] = useState([
        {
            question: "Do you provide help with designing/planning a website ?",
            answer: "Absolutely! We provide these services for free. However, we expect you to have a very rough idea about the theme of the website.",
            open: false
        },
        {
            question: "Is there any extra fee for implementing SEO in my app?",
            answer: "No, SEO (Search Engine Optimization) is a free service that comes with every package we offer.",
            open: false
        },
        {
            question: "Do you provide revisions once the website is completed?",
            answer: "Yes! Our motto being ultimate satisfaction of the customer, we will be having as many revisions as you would require within 6 days of website completion. We will still provide free of charge minor changes, but major changes beyond the 6 day mark require a 100 AED revision fee.",
            open: false
        },
        {
            question: "Will you be providing Web Hosting and Domain services?",
            answer: "We do not offer hosting and domain name. However, we will guide you through the most affordable options in the market for no extra fee.",
            open: false
        }
    ]);
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if(i===index){
                faq.open = !faq.open
            }else{
                faq.open = false;
            }
            return faq;
        }))
    }
    return (
        <>
        <div id="faq" className="FaqContainer">
            <h1 className="heading">Frequently Asked Questions</h1>
            <div className="FaqWrapper">
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
        </>
    );
}

export default App