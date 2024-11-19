import React from 'react';

// Common tailwind classes
const inputClasses = "border border-zinc-300 dark:border-zinc-700 rounded-l-md p-2 focus:outline-none focus:ring focus:ring-primary w-72";
const buttonClasses = "bg-black text-white hover:bg-secondary/80 ml-2 rounded-r-md p-2";
const textClasses = "text-muted-foreground";
const linkClasses = "text-primary underline";

const NewsletterSignup = () => {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-900 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want First Dibs?</h2>
            <p className={textClasses + " mb-6"}>Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.</p>
            <div className="flex justify-center mb-4">
                <input type="email" placeholder="Enter Your Email Address" className={inputClasses} />
                <button className={buttonClasses}>SIGN UP</button>
            </div>
            <p className={"text-sm " + textClasses}>Note: You can opt-out at any time. See our <a href="#" className={linkClasses}>Privacy Policy</a> and <a href="#" className={linkClasses}>Terms</a>.</p>
        </div>
    );
};

export default NewsletterSignup;
