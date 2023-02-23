import React from 'react';

export const Contact = () => {
    return (
        <section id="contact" className="mb-20">
            <div className="section-container">
                <p className="font-bold text-3xl mb-4">Reach me</p>
                <form className='w-[90%] mx-auto'>
                    <div className='mb-3'>
                        <input type="text" className="border border-primary w-full rounded-[6px] py-2 px-2" placeholder='Your Name' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" className="border border-primary w-full rounded-[6px] py-2 px-2" placeholder='Your Email' />
                    </div>
                    <div className=''>
                        <textarea
                            // cols="10"
                            rows="10"
                            placeholder="Message"
                            className='border border-primary-light w-full rounded-[6px] py-2 px-2'
                        ></textarea>
                    </div>
                </form>
            </div>
        </section>
    );
};
