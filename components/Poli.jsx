import React from "react";

const Poli = () => {
  return (
    <div className="min-h-max w-screen bg-slate-400 overflow-hidden pb-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-semibold text-white mt-5">
          የፊንጢጣ ኪንታሮት (Hemorrhoid)
        </h1>
        <div className="mt-5 md:flex gap-5">
          <p className="w-[400px] text-center sm:pb-5 flex justify-center items-center overflow-hidden">
            በ ሀዋሳ ሀይቅ ፖሊ መካከለኛ ክሊኒክ ከምንሰጣቸው ዘርፈብዙ <br />
            ከሆኑ አጠቃላይ ህክምናዎች በተጨማሪ <br />
            በሰገራ መውጫ ወይም ፊንጢጣ ላይ የሚወጣን ኪንታሮት <br />ያለ ቀዶ ህክምና አክመን እናድናለን፡፡
          </p>
          <div className="border-1 border-slate-200">
            <div className="bg-poly-1 bg-cover bg-center h-[300px] w-[400px] rounded-lg shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poli;
