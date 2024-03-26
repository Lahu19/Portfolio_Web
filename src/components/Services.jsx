import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { learningfromCVIS, learningfromCCS,learningfromDEV } from "../constants";
import {
  Gradient,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="experiences">
      <div className="container">
        <Heading
          title="My Journey into the Tech World through Internship Experiences."
          text="I did Some Internships are following"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]  ">
            <div className="blur-sm absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right "
                width={800}
                alt="Collab vision project Image"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4 text-black" >Collab Vision Infosolution </h4>
              <p className="body-2 mb-[3rem] text-n-3 text-black"style={{color:'black'}}>
                As Software Trainee 
              </p>
              <ul className="body-2">
                {learningfromCVIS.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Gradient />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="blur-sm absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Project Image in CCS"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="text-black h4 mb-4" >Code crafters services</h4>
                <p className=" body-2 mb-[3rem] text-n-3" style={{color:'black'}}>
                As Java Developer intern
                </p>
                <ul className="body-2">
                {learningfromCCS.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
              </div>


            </div>

            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="blur-sm absolute inset-0">
                <img
                  src={service3}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Project Image in CCS"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="brightness-50 h4 mb-4 text-black">Devtown Ltd</h4>
                <p className="body-2 mb-[2rem] text-n-3" style={{color:'white'}}>
                  As Full Stack Web Developer Intern
                </p>
                <ul className="body-2">
                {learningfromDEV.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
                
              </div>

            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
