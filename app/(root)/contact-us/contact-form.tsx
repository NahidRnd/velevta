const ContactForm = () => {
    return ( 
        <div className="md:pt-8 pt-4 space-y-4">
            <textarea id="message" placeholder="Enter Your Message Here....*" className="border p-3 rounded-sm w-full h-38"></textarea>
            <input id="name" type="text" placeholder="Enter Your Name...." required className="border p-3 rounded-sm md:w-[49%] w-full mr-[2%]" />
            <input id="email" type="email" placeholder="Enter Your Email...." required className="border p-3 rounded-sm md:w-[49%] w-full" />
            <button type="submit" className="text-white bg-secondary px-8 py-3 rounded-sm md:max-w-60 max-w-full">Send Your Message</button>
        </div>
     );
}
 
export default ContactForm;