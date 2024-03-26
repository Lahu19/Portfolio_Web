import {facebook1,instagram1,twitter1,github1 ,linkdin1}from "../assets"
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="tagline mb-6 text-center text-n-1/50">
        Connect With me On
      </h1>
      <ul className="flex">

        <li
          className="flex items-center justify-center flex-1 h-[8.5rem]"
        >
          <a href="https://github.com/Lahu19">
            <img src={github1} width={120} height={20} alt="github" />
          </a>
        </li>
        <li
          className="flex items-center justify-center flex-1 h-[8.5rem]"
        >
          <a href="https://www.linkedin.com/in/lahu-andhale-677509240/">
            <img src={linkdin1} width={120} height={20} alt="logo" />
          </a>
        </li>
        <li
          className="flex items-center justify-center flex-1 h-[8.5rem]"
        >
          <a href="https://www.facebook.com/lahu.andhale.5059">
            <img src={facebook1} width={120} height={20} alt="logo" />
          </a>
        </li>
        <li
          className="flex items-center justify-center flex-1 h-[8.5rem]"
        >
          <a href="https://www.instagram.com/lahuandhale123/">
            <img src={instagram1} width={120} height={20} alt="logo" />
          </a>
        </li>
        <li
          className="flex items-center justify-center flex-1 h-[8.5rem]"
        >
          <a href="https://twitter.com/LahuAndhale7">
            <img src={twitter1} width={120} height={20} alt="logo" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CompanyLogos;
