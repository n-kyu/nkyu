const Card = ({ svg: SvgIcon, hoverSvg: HoverSvgIcon, name }) => {
    return (
      <div className="group flex items-center justify-center w-[200px] h-[125px] py-10 px-8 border border-transparent rounded-lg bg-[#1A1A28] opacity-50 hover:opacity-100 transition-opacity">
        <div className="flex items-center mr-2">
          <div className="relative w-12 h-12">
            <SvgIcon
              className="absolute w-full h-full transition-opacity duration-500 ease-in-out"
              style={{ opacity: "var(--icon-opacity)" }}
            />
            <HoverSvgIcon
              className="absolute w-full h-full transition-opacity duration-500 ease-in-out"
              style={{ opacity: "var(--icon-hover-opacity)" }}
            />
          </div>
        </div>
        <span className="text-lg font-medium text-white cursor-default ml-2">{name}</span>
        <style jsx>{`
          .group:hover {
            --icon-opacity: 0;
            --icon-hover-opacity: 1;
          }
          .group {
            --icon-opacity: 1;
            --icon-hover-opacity: 0;
          }
        `}</style>
      </div>
    );
  };

  export default Card;