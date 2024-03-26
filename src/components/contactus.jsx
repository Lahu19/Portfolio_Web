
import Button from "./Button";

const ContactUs = () => {
  return (
    <div className="1rem max-lg:flex-wrap">
      
        <div
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">Contact Us </h4>

          <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          class="w-full rounded-md border mb-5 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <input
          type="text"
          name="name"
          id="email"
          placeholder="Enter Your Email"
          class="w-full rounded-md border mb-5 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <input
          type="text"
          name="name"
          id="subject"
          placeholder="Enter Your Subject"
          class="w-full rounded-md border mb-5 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />

        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="w-full mb-5 resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>

          <Button
            className="w-full mb-6"
            href="mailto:lahuandhale321@gmail.com"
          >
          Submit
          </Button>

          
        </div>
    </div>
  );
};

export default ContactUs;
