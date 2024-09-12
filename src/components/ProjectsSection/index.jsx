import React, { useRef, useEffect } from 'react';
import Card from './Card';
import {
  ReactIcon,
  CssIcon,
  GithubIcon,
  HtmlIcon,
  JsIcon,
  MongoIcon,
  TpIcon,
  NextIcon,
  HtmlHoverIcon,
  CssHoverIcon,
  JsHoverIcon,
  TpHoverIcon,
  ReactHoverIcon,
  NextHoverIcon,
  MongoHoverIcon,
  GithubHoverIcon,
  FigmaIcon,
  FigmaHoverIcon,
  DesignIcon,
  DesignHoverIcon,
} from './Card/svgIcons';

const ProjectsSection = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const clonedUl = ul.cloneNode(true);
      ul.parentNode.insertBefore(clonedUl, ul.nextSibling);
      clonedUl.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <div className="main-container">
      <div className="pt-[500px] pb-[500px]">
        <h1>Projects section</h1>
        <div className="-z-0 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-[2px]  animate-infinite-scroll">
            <li><Card svg={HtmlIcon} hoverSvg={HtmlHoverIcon}  name="HTML" /></li>
            <li><Card svg={CssIcon} hoverSvg={CssHoverIcon}  name="CSS" /></li>
            <li><Card svg={JsIcon} hoverSvg={JsHoverIcon}  name="Javascript" /></li>
            <li><Card svg={TpIcon} hoverSvg={TpHoverIcon}  name="Typescript" /></li>
            <li><Card svg={ReactIcon} hoverSvg={ReactHoverIcon}  name="React" /></li>
            <li><Card svg={NextIcon} hoverSvg={NextHoverIcon}  name="NextJs" /></li>
            <li><Card svg={MongoIcon} hoverSvg={MongoHoverIcon}  name="MongoDB" /></li>
            <li><Card svg={GithubIcon} hoverSvg={GithubHoverIcon}  name="Github" /></li>
            <li><Card svg={FigmaIcon} hoverSvg={FigmaHoverIcon}  name="Pixel Perfect" /></li>
            <li><Card svg={DesignIcon} hoverSvg={DesignHoverIcon}  name="Design System" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;