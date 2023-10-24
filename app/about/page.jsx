import Banner from "@components/Banner";
import { GiWorld } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa";


const About = () => {
  return (
    <div className="min-h-max w-full text-black overflow-hidden">
      <Banner className="relative" />
      <div className="h-[400px] w-full flex flex-col justify-center items-center absolute top-0">
        <h1 className="text-4xl uppercase font-bold text-yellow-500 text-shadow-lg ">
          ስለ እኛ ...
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center container mx-auto">
        <div className="md:flex justify-center items-center">
          <div className="container mx-auto bg-about-bg w-[400px] h-[400px] mt-5 bg-cover bg-center flex"></div>
          <div className="pl-5">
            <h1 className="flex justify-start text-lg pl-8 font-semibold">
              ስለ እኛ
            </h1>
            <p className=" text-base sm:container sm:max-auto xl:w-[600px] pb-3">
              ሀዋሳ ሀይቅ ፖሊ መካከለኛ ክሊኒክ እና የዚህ እህት ድርጅት በሆነው ታም-ዳግ የጥርስ ህክምና ክሊኒክ
              በሀዋሳና በዙርያዋ ላሉ ማህበረሰቦች እንዲሁም ለ አጎራባች ክልሎች በ አጠቃልይ ህክምና እንዲሁም በ
              ታምዳግ የጥርስ ህክምና ማዕከላችን በ ሁለት ቦታ ባሉ ቅርንጫፎች የተለያዩ ዘርፈ ብዙ የጥርስ ህክምናዎችን
              ስንሰጥ ቆይተናል። በ ሀዋሳ ሀይቅ ፖሊ መካከለኛ ክሊኒክ ከምንሰጣቸው አጠቃለይ ህክምናዎች በተጨማሪ
              በሰገራ መውጫ የፊንጢጣ ኪንታሮት፣ የሚደማ፣ የሚያሳክክና ወገብን የሚያም ያለ ቀዶ ጥገና ህክምና ስንሰጥ
              ቆይተናል።
            </p>
            <p className="text-base sm:container sm:max-auto xl:w-[600px] pb-3">
              we are dedicated to providing you with comprehensive,
              compassionate, and cutting-edge healthcare solutions. We
              understand that your health is your most valuable asset, and we
              are here to support you on your journey towards optimal
              well-being.
            </p>
            <h1 className="flex justify-start text-lg pl-8 font-semibold">
              አላማችን
            </h1>
            <p className="text-base sm:container sm:max-auto xl:w-[600px] pb-3">
              አላማችን ጥራቱን የጠበቀ የ ህክምና አገልግሎት ዘመኑ ባፈራው የህክምና መሳርያዎችና ብቁ በሆኑ የህክምና
              ባለሙያዎች በመልካም ባህሪ እና ብቃት ለማህበረሰቡ መስጠት ነው።
            </p>
          </div>
        </div>
        <div className="container mx-auto pt-12 pb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className=" bg-slate-300 p-4 rounded-lg shadow-lg">
              <AiOutlineTeam
                size={35}
                style={{ color: "#000000" }}
                className="icon mb-2"
              />
              <h1 className="text-base font-semibold">የደንበኞቻችን እርካታ</h1>
              <p className="text-md">
                ለደንበኞቻችንን ጤና ቅድሚያ በመስጠት፣ ዘመኑ ባፈራው የጤና መሳርያዎችና በተመሰገኑ የ ጤና ባለሙያዎች
                አገልግሎት ስንሰጥ መቆየታችን የአገልግሎታችንን የረጅም ግዜ ደንበኞቻችን ምስክሮች ናቸው።
              </p>
            </div>
            <div className=" bg-slate-300 p-4 rounded-lg shadow-lg">
              <GiWorld
                size={35}
                style={{ color: "#000000" }}
                className="icon mb-2"
              />

              <h1 className="text-base font-semibold">ይጎብኙን</h1>
              <p className="text-md">
                ባሉን 2 የጥርስ ህክምና ቅርንጫፎች እና አጠቃላይ ህክምና መስጫ ተቋማችን አገልግሎት እንሰጣለን
              </p>
            </div>
            <div className=" bg-slate-300 p-4 rounded-lg shadow-lg">
              <FaHandHoldingHeart
                size={35}
                style={{ color: "#000000" }}
                className="icon mb-2"
              />
              <h1 className="text-base font-semibold">የአገልግሎት ጥራት</h1>
              <p className="text-md">
                ጥራቱን የጠበቀ ህክምና ዘመኑ ባፈራው የህክምና መሳርያዎችና ብቁ በሆኑ የህክምና ባለሙያዎች
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
