import React from "react";
import { FaTelegram, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="px-[100px]">
      <section>
        <h2 className="font-hammersmith text-[64px] text-center py-10">
          Contact
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col justify-center items-center bg-[#FBFBF9] h-[320px] hover:bg-blue-500 hover:text-white rounded-xl">
            <FaTelegram className="w-12 h-12" />
            <h2 className="py-6 font-hammersmith text-2xl">Telegram</h2>
            <p className="font-signika text-zinc-300">@rakib_support</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#FBFBF9] h-[320px] px-32 py-28 hover:bg-blue-500 hover:text-white rounded-xl">
            <MdMail className="w-12 h-12" />
            <h2 className="py-[10px] font-hammersmith text-2xl">Email</h2>
            <p className="font-signika text-zinc-300">
              rakibhossen1660@gmail.com
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#FBFBF9] h-[320px] px-32 py-28 hover:bg-blue-500 hover:text-white rounded-xl">
            <FaPhoneAlt className="w-6 h-6" />
            <h2 className="p-[10px] font-hammersmith text-2xl">Phone</h2>
            <p className="font-signika text-zinc-300">+088 019 663 66 745</p>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <div className="grid grid-cols-2 gap-[28px] mt-[40px]">
          <div>
            <img
              className="rounded-[6px] border-[2px] border-[#3498DB]"
              src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/361645941_1666710017429960_8233889087616637270_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=-2fMe2pEcdYAX9Wc_zj&_nc_oc=AQkD0KtNQ7Li2PTnwIxiHnsj34fIqOCjfu0Z0IGOohQ0JLVGHs_QJKAaNOFsvd9nstk&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCAPBTv-9QDS2BHGmdxgrSRHkV1Hk-4cSr2FlCVor9UzA&oe=657702AE"
              alt=""
            />
          </div>
          <div>
            <p className="text-blue-600 text-[16px]">GET IN TOUCH</p>
            <h2 className="font-hammersmith text-[44px]">
              Let’s talk about your <br /> project
            </h2>
            <p className="font-signika text-[18px] pt-[12px]">
              Tell us about your vision and let's bring it to life together! we
              will response to your email in no time.
            </p>
            <div>
            <input
              type="text"
              placeholder="Name"
              className="font-signika text-[16px] px-[8px] py-[4px] border-[2px] border-[#CFD8DC] rounded-[4px] mt-[30px] w-[75%]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="font-signika text-[16px] px-[8px] py-[4px] border-[2px] border-[#CFD8DC] rounded-[4px] mt-[10px] w-[75%]"
            />
            <input
              type="text"
              placeholder="Amount"
              className="font-signika text-[16px] px-[8px] py-[4px] border-[2px] border-[#CFD8DC] rounded-[4px] mt-[10px] w-[75%]"
            />
            <textarea
              type="text"
              placeholder="Comment or message"
              className="font-signika text-[16px] px-[8px] py-[4px] border-[2px] border-[#CFD8DC] rounded-[4px] mt-[10px] w-[75%] h-[80px]"
            />
            <br />
            <button className="ml-[4px] font-signika text-[18px] bg-[#1E88E5] text-white rounded-[6px] px-[36px] py-[10px] mt-[24px]">
              Send Message
            </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
