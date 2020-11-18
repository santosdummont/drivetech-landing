import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainHomeSection from '../../UI/Sections/MainSection';
import MainSection from '../../UI/Sections/SubSection';
import GetDemo from '../../Modals/GetDemo';
import control_bg from '../../../Theme/Images/sections/control/control-bg.jpg';

const Control = ({ isMobile, i18n, topOffset }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const lang = i18n.screenGroups.solutions.screens.control;
  const sections = lang.sections;
  const buttons = i18n.buttons;
  return (
    <>
      <MainHomeSection
        name={lang.mainSection.name}
        title={lang.mainSection.title}
        subtitle={lang.mainSection.description}
        buttons={[
          {
            text: buttons.freeDemo,
            type: 'primary',
            onClick: () => setModalVisible(true),
          },
        ]}
        bgImage={control_bg}
        dark
        isMobile={isMobile}
        topOffset={topOffset}
        sections={sections}
      />
      {sections
        ? sections.map((section, index) => (
            <MainSection
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

Control.propTypes = {
  isMobile: PropTypes.bool,
  i18n: PropTypes.object,
  topOffset: PropTypes.number,
};

export default Control;
