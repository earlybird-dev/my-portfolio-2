import { useState } from "react";
import LeftMenu from "./LeftMenu";
import { ChatIcon, ChromeIcon, DataIcon } from "../utilities/svg";

const Hero = () => {
  const [introCardActive, setIntroCardActive] = useState<boolean>(true);
  const [dataCardActive, setDataCardActive] = useState<boolean>(false);
  const [webCardActive, setWebCardActive] = useState<boolean>(false);

  return (
    <div id="hero" className="row">
      <div className="col-4">
        <LeftMenu />
      </div>
      <div className="col-8 d-flex flex-column justify-content-center">
        <h1 className="text-yellow-1 text-uppercase text-center">About Me</h1>
        <p className="text-light-yellow text-center fs-5"></p>
        <div className="d-flex gap-3 justify-content-center">
          <div
            className={`title-card intro-title p-5 rounded bg-purple-1 ${
              introCardActive ? "active z-3" : ""
            }`}
            onClick={() => {
              setIntroCardActive(true);
              setDataCardActive(false);
              setWebCardActive(false);
            }}
          >
            <div className="h3 text-uppercase text-light-yellow d-flex align-items-center gap-3 ">
              <ChatIcon /> Hi, I'm Ha Nguyen
            </div>
            <div>
              <p>
                Based in Australia, I'm a data analyst and front-end developer
                passionate about building insightful dashboards and accessible
                web apps that users love.
              </p>
            </div>
          </div>
          <div
            className={`title-card data-title p-5 rounded bg-red-1 ${
              dataCardActive ? "active z-3" : "z-2"
            }`}
            onClick={() => {
              setIntroCardActive(false);
              setDataCardActive(true);
              setWebCardActive(false);
            }}
          >
            <div className="h3 text-uppercase text-light-yellow d-flex align-items-center gap-3 ">
              <DataIcon /> Data Analyst
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                autem nisi harum vel dolor ipsum fugiat adipisci, dolore cumque
                distinctio reiciendis odio aliquid assumenda veritatis voluptate
                consequatur aperiam obcaecati rem!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                autem nisi harum vel dolor ipsum fugiat adipisci, dolore cumque
                distinctio reiciendis odio aliquid assumenda veritatis voluptate
                consequatur aperiam obcaecati rem!
              </p>
            </div>
          </div>
          <div
            className={`title-card web-title p-5 rounded bg-green-1 ${
              webCardActive ? "active z-3" : ""
            }
            `}
            onClick={() => {
              setIntroCardActive(false);
              setDataCardActive(false);
              setWebCardActive(true);
            }}
          >
            <div className="h3 text-uppercase text-light-yellow d-flex align-items-center gap-3 ">
              <ChromeIcon /> Web Developer
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                autem nisi harum vel dolor ipsum fugiat adipisci, dolore cumque
                distinctio reiciendis odio aliquid assumenda veritatis voluptate
                consequatur aperiam obcaecati rem!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                autem nisi harum vel dolor ipsum fugiat adipisci, dolore cumque
                distinctio reiciendis odio aliquid assumenda veritatis voluptate
                consequatur aperiam obcaecati rem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
