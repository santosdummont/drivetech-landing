import React, { useState } from 'react';
import MainSection from '../../UI/Sections/MainSection';
import SubSection from '../../UI/Sections/SubSection';
import GetDemo from '../../Modals/GetDemo';

const Tracking = ({ isMobile, i18n, topOffset, openModal }) => {
  const lang = i18n.screenGroups.solutions.screens.tracking;
  const sections = i18n.screenGroups.solutions.screens.tracking.sections;
  const buttons = i18n.buttons;
  console.log(lang);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <MainSection
        name={lang.mainSection.name}
        title={lang.mainSection.title}
        subtitle={lang.mainSection.subtitle}
        sections={sections}
        buttons={[
          {
            text: buttons.freeDemo,
            type: 'primary',
            onClick: () => setModalVisible(true),
          },
        ]}
        bgColor={null}
        bgImage={lang.mainSection.bgImage}
        isMobile={isMobile}
        topOffset={topOffset}
        openModal={openModal}
        dark
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

      <GetDemo visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
};

Tracking.propTypes = {};

export default Tracking;
