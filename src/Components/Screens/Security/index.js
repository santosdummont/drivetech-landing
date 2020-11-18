import React, { useState } from 'react';
import MainSection from '../../UI/Sections/MainSection';
import SubSection from '../../UI/Sections/SubSection';
import GetDemo from '../../Modals/GetDemo';

const Security = ({ isMobile, i18n, topOffset }) => {
  const lang = i18n.screenGroups.solutions.screens.security;
  const buttons = i18n.buttons;
  const [isVisible, setIsVisible] = useState(false);
  const sections = lang.sections;

  return (
    <>
      <MainSection
        name={lang.mainSection.name}
        title={lang.mainSection.title}
        subtitle={lang.mainSection.subtitle}
        buttons={[
          {
            text: buttons.freeDemo,
            type: 'primary',
            onClick: () => setIsVisible(true),
          },
        ]}
        bgImage={lang.mainSection.bgImage}
        dark
        isMobile={isMobile}
        topOffset={topOffset}
        sections={sections}
      />
      {sections
        ? sections.map((section, index) => (
            <SubSection
              key={index}
              title={section.title}
              description={section.description}
              image={section.image}
              bgColor={section.bgColor}
              id={section.id}
              index={index}
            />
          ))
        : null}

      <GetDemo visible={isVisible} onClose={() => setIsVisible(false)} />
    </>
  );
};

Security.propTypes = {};

export default Security;
