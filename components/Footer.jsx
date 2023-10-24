import { FaFacebook } from "react-icons/fa";

import { BsWhatsapp } from "react-icons/bs";

import { FaTelegramPlane } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-slate-800 w-full max-h-max text-slate-50 overflow-hidden">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:gap-10">
        <div>
          <div className="">
            <div className="md:flex">
              <p className="text-center">
                ቁ.1 ሀይቅ ዳር ክ/ከተማ ቀበሌ 05 <br />
                ፍቼ ጨምበላላ ጉዱማሌ ፊት ለፊት
              </p>
              <div className="gmap mt-5 rounded-lg flex justify-center items-center">
                <div className=" rounded-lg shadow-white">
                  <iframe
                    width="400"
                    height="300"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31677.340436272225!2d38.43015432357785!3d7.048295731525944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b1450b381fe291%3A0x91d59a1e1882828!2sHawassa%20Haike%20Poly%20Clinic!5e0!3m2!1sam!2set!4v1697786489019!5m2!1sam!2set"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="md:flex">
              <p className="text-center">
                ቁ.2 ጥቁር ውሃ ፍተሻው አጠገብ ዳቶ ቀበሌ <br />
                ኦል ሊቢያ ነዳጅ ማደያ ህንፃ ላይ(የቀድሞ አጂፕ)
              </p>
              <div className="gmap mt-5 rounded-lg">
                <div className=" rounded-lg shadow-white">
                  <iframe
                    width="400"
                    height="300"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15837.338022835223!2d38.4862202!3d7.0871664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b151a778c8b0b7%3A0x36396506d0794858!2sTam-Dag%20m%20Dental%20Clinic!5e0!3m2!1sen!2set!4v1697943072469!5m2!1sen!2set"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-yellow-400 text-center pt-4 font-semibold">
            Get in Touch
          </h1>
          <div className="flex justify-center gap-[50px] mt-10">
            <FaFacebook
              size={25}
              style={{ color: "#0000FF" }}
              className="icon"
            />

            <BsWhatsapp
              size={25}
              style={{ color: "#008000" }}
              className="icon"
            />

            <FaTelegramPlane
              size={25}
              style={{ color: "#4682B4" }}
              className="icon"
            />
          </div>

          <div className="flex flex-col items-center mt-5">
            <h1 className="font-semibold text-lg">Phone</h1>

            <h3>0916581457</h3>
            <h3>0916581458</h3>
          </div>
          <div className="flex flex-col items-center mt-5">
            <h1 className=" font-semibold">Email</h1>
            <h3>tesfayet21@gmail.com</h3>
          </div>
        </div>

        <div className="mt-16">
          <h1 className="font-semibold text-lg">Pages</h1>
          <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/destiny">Our-service</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
