import Banner from "@components/Banner";
import Poli from "@components/Poli";

const PageDe = () => {
  return (
    <div className="min-h-max text-black w-screen overflow-hidden">
      <Banner className="relative" />
      <div className="h-[400px] w-full flex flex-col justify-center items-center absolute top-0">
        <h1 className="text-4xl uppercase font-bold text-yellow-500 text-shadow-lg ">
          የምንሰጠው አገልግሎቶች
        </h1>
        <p className="text-white text-shadow-lg uppercase text-lg font-semibold"></p>
      </div>
      <Poli />
      <div className="flex flex-col justify-center items-center gap-1 pb-4">
        <div>
          <h1 className="text-3xl font-semibold mt-5">የምናቀርባቸው የጥርስ ህክምናዎች</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 pt-5">
          <div>
            <div className="w-[230px] h-[270px] shadow-2xl border-2 border-slate-500/50 rounded-lg">
              <div className="bg-teeth-bg bg-cover bg-center w-full h-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <h1 className=" font-semibold text-lg">ኦርቶዴንቲክስ</h1>
              <p>
                የተወላገደ የልጆችና የአዋቂ ጥርሶችን
                <br /> በብሬስ አስሮ ማስተካከል
              </p>
              <p>
                - የጥርስ ማሰሪያዎች እና
                <br /> - ኢንቪዝላይን
              </p>
            </div>
          </div>
          <div>
            <div className="w-[230px] h-[270px] shadow-2xl border-2 border-slate-500/50 rounded-lg">
              <div className="bg-teeth2-bg bg-cover bg-center w-full h-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <h1 className=" font-semibold text-lg">ፕሮስቶዶንቲክስ</h1>
              <p>
                - ሽፋኖች <br />
                - የጥርስ ድልድዮች <br />
                - የጥርስ ዘውዶች <br />
                - የተሟላ የጥርስ ሕክምና <br />
                - ከፊል የጥርስ ህክምና <br />
              </p>
            </div>
          </div>
          <div>
            <div className="w-[230px] h-[270px] shadow-2xl border-2 border-slate-500/50 rounded-lg">
              <div className="bg-teeth3-bg bg-cover bg-center w-full h-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <h1 className=" font-semibold text-lg">የመዋቢያ የጥርስ ሕክምና</h1>
              <p>
                - ጥርስን መፋቅ <br />
                - ጥርስ ነጭነት <br />
                - የጥርስ መትከል <br />
                - ጥርስን ማጽዳት <br />
                - የጥርስ ትስስር <br />
              </p>
            </div>
          </div>
          <div>
            <div className="w-[230px] h-[270px] shadow-2xl border-2 border-slate-500/50 rounded-lg">
              <div className="bg-teeth4-bg bg-cover bg-center w-full h-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <h1 className=" font-semibold text-lg">ኢንዶዶንቲክስ</h1>
              <p>
                - የጥርስ ስር ቦይ ሕክምና እና
                <br /> - የላቀ ሥር ቦይ ሕክምና
              </p>
            </div>
          </div>
          <div>
            <div className="w-[230px] h-[270px] shadow-2xl border-2 border-slate-500/50 rounded-lg">
              <div className="bg-teeth5-bg bg-cover bg-center w-full h-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <h1 className=" font-semibold text-lg">ፔሪዮዶንቲክስ</h1>
              <p>
                - ስኬሊንግ እና
                <br /> - ሥር ፕላኒንግ ሕክምና
              </p>
            </div>
          </div>
          <div>
            <div className="w-[230px] h-[270px] shadow-2xl border-2 border-slate-500/50 rounded-lg">
              <div className="bg-teeth6-bg bg-cover bg-center w-full h-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <h1 className=" font-semibold text-lg">የጥርስ ማውጣት</h1>
              <p>
                -መዳን ለማይችሉ በጣም የበሰበሱ ጥርሶችን
                <br /> የመንቀል ሕክምና
              </p>
            </div>
          </div>
          <div>
            <div className="w-[230px] h-[270px] shadow-2xl border-2 border-slate-500/50 rounded-lg">
              <div className="bg-teeth7-bg bg-cover bg-center w-full h-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <h1 className=" font-semibold text-lg">ጥርስ መሙላት</h1>
              <p>
                የተቦረቦሩ ጥርሶችን የመሙላት ህክምና
                <br /> ሲሆን በዋሻዎች በጣም ያልተሰበሩ <br /> ጥርሶችን ለማዳን ይጠቅማል።
              </p>
            </div>
          </div>
          <div>
            <div className="w-[230px] h-[270px] shadow-2xl border-2 border-slate-500/50 rounded-lg">
              <div className="bg-teeth8-bg bg-cover bg-center w-full h-full rounded-lg"></div>
            </div>
            <div className="mb-5">
              <h1 className=" font-semibold text-lg">የሕፃናት የጥርስ ሕክምና</h1>
              <p>
                የሕፃናት የጥርስ ሕክምና <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDe;
