import React from "react";

const Testimonial = () => {
  return (
    <div>
      {/* testimonial section */}
      <section className="grid grid-cols-2 py-16 px-8 bg-black h-[420px] mt-16 mb-2">
        <div>
          <p className="text-blue-600 font-signika uppercase">Testimonials</p>
          <h3 className="font-hammersmith text-[44px] text-white">
            Let’s talk about your <br /> project
          </h3>
          <p className="font-signika text-[24px] text-zinc-400">
            See what our satisfied clients have to say about <br /> their
            experience with us!
          </p>
        </div>
        <div className="bg-blue-400 text-white rounded-xl p-16">
          <h2 className="font-hammersmith text-[28px]">A Reliable Company</h2>
          <p className="text-[16px] font-signika">
            The team took the time to understand my business goals and provided
            customized solutions that helped me achieve them. They were always
            available to answer my questions and provide support whenever I
            needed it.
          </p>
        </div>
      </section>
      {/* our team section */}
      <section className="py-[100px]">
        <p className="text-blue-500">TEAM</p>
        <h2 className="font-hammersmith text-[44px] mt-[20px] mb-[40px]">Our Team</h2>
        <hr className="h-px border-2 bg-black mb-10" />
        <div>
            <div>
                <img className="rounded-xl h-[420px]" src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/361645941_1666710017429960_8233889087616637270_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=-2fMe2pEcdYAX9Wc_zj&_nc_oc=AQkD0KtNQ7Li2PTnwIxiHnsj34fIqOCjfu0Z0IGOohQ0JLVGHs_QJKAaNOFsvd9nstk&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCAPBTv-9QDS2BHGmdxgrSRHkV1Hk-4cSr2FlCVor9UzA&oe=657702AE" alt="" />
                <h1 className="font-hammersmith text-[24px] mt-2">Rakib Hossen</h1>
                <p className="text-blue-500 font-signika">Full Stack Web Developer</p>
            </div>
        </div>
      </section>
      {/* discount */}
      <section className="grid grid-cols-2 px-[30px] py-[100px] bg-slate-200 rounded-lg">
        <div>
        <button className="bg-purple-400 font-signika text-white px-4 py-2 rounded-[4px] text-[24px] mb-[20px]">02</button>
        <h2 className="font-hammersmith text-[44px] mb-[20px]">30% Discount</h2>
        <h2 className="font-signika text-zinc-400 text-[16px] mb-[20px]">Feel free to contact me for your project now. We can have a great discussion about your project and needs.</h2>
        <button className="bg-blue-400 font-signika text-white px-4 py-2 rounded-[4px] text-[16px] mb-[20px]">Learn More</button>
        </div>
        <div className="">
        {/* <img className="rounded-xl h-[180px]" src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/361645941_1666710017429960_8233889087616637270_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=-2fMe2pEcdYAX9Wc_zj&_nc_oc=AQkD0KtNQ7Li2PTnwIxiHnsj34fIqOCjfu0Z0IGOohQ0JLVGHs_QJKAaNOFsvd9nstk&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCAPBTv-9QDS2BHGmdxgrSRHkV1Hk-4cSr2FlCVor9UzA&oe=657702AE" alt="" /> */}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
