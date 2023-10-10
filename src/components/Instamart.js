import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionconfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCareers: false,
  });
  return (
    <div>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum neque, sit laudantium consequuntur cumque, quis ducimus temporibus voluptates, fuga expedita? Voluptate, odio tempora totam aliquam sint vitae nemo maiores."
        }
        isVisible={sectionconfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCareers: false,
          })
        }
      />

      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum neque, sit laudantium consequuntur cumque, quis ducimus temporibus voluptates, fuga expedita? Voluptate, odio tempora totam aliquam sint vitae nemo maiores."
        }
        isVisible={sectionconfig.showTeam}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCareers: false,
          })
        }
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum neque, sit laudantium consequuntur cumque, quis ducimus temporibus voluptates, fuga expedita? Voluptate, odio tempora totam aliquam sint vitae nemo maiores."
        }
        isVisible={sectionconfig.showCareers}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareers: true,
          })
        }
      />
    </div>
  );
};

export default Instamart;
