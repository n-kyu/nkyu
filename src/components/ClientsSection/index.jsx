import {CuidarEngenharia, SupplyShop, LobosGuara, MultiCuidar} from "./ClientsLogo";

export default function Index() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10">
        <div className="flex justify-center items-start xl:mb-16 cursor-pointer">
          <CuidarEngenharia className="w-24 h-w-24 fill-white hover:fill-red-500 transition-colors duration-300" />
        </div>
        <div className="flex justify-center items-end xl:mt-16 cursor-pointer">
          <LobosGuara className="w-24 h-w-24 fill-white hover:fill-red-500 transition-colors duration-300" />
        </div>
        <div className="flex justify-center items-start xl:mb-16 cursor-pointer">
          <MultiCuidar className="w-24 h-w-24 fill-white hover:fill-red-500 transition-colors duration-300" />
        </div>
        <div className="flex justify-center items-end xl:mt-16 cursor-pointer">
          <SupplyShop className="w-12 h-12 fill-white hover:fill-red-500 transition-colors duration-300" />
        </div>
        <div className="flex justify-center items-start xl:mb-16 cursor-pointer">
          <SupplyShop className="w-12 h-12 fill-white hover:fill-red-500 transition-colors duration-300" />
        </div>
        <div className="flex justify-center items-end xl:mt-16 cursor-pointer">
          <SupplyShop className="w-12 h-12 fill-white hover:fill-red-500 transition-colors duration-300" />
        </div>
      </div>
    </>
  );
}
