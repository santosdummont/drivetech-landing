import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  mdiShieldCheck,
  mdiOrderBoolAscendingVariant,
  mdiMapMarkerPath,
} from '@mdi/js';

import MainSection from '../../UI/Sections/MainSection';
import ProductsSection from '../../UI/Sections/ProductsSection';
import GetDemo from '../../Modals/GetDemo';
import paths from '../../../Routes/paths';
import brands from '../../../Utils/brands';
import main_section_image from '../../../Theme/Images/main_section_image.png';
import TextCenter from '../../UI/Sections/TextCenter';
import Video from '../../UI/Sections/Video';
import Testimonials from '../../UI/Sections/Testimonials';
import dtLockIcon from '../../../Theme/Images/dt-lock-icon.svg';
import video_preview from '../../../Theme/Images/video_preview.jpg';
import security from '../../../Theme/Images/sections/home/home_security.jpg';
import control from '../../../Theme/Images/sections/home/home_control.png';
import tracking from '../../../Theme/Images/sections/home/home_tracking.png';
import SubSection from '../../UI/Sections/SubSection';

const Home = ({ i18n, isMobile, topOffset }) => {
  const lang = i18n.screenGroups.home.screens.home;
  const buttons = i18n.buttons;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <MainSection
        title={lang.mainSection.title}
        subtitle={lang.mainSection.subtitle}
        baitTitle={lang.mainSection.baitTitle}
        baitSubtitle={lang.mainSection.baitSubtitle}
        buttons={[
          {
            text: buttons.freeDemo,
            type: 'primary',
            onClick: () => setModalVisible(true),
          },
        ]}
        bgImage={lang.mainSection.bgImage}
        image={main_section_image}
        // bgColor='#040608'
        dark
        brands={brands}
        isMobile={isMobile}
        topOffset={topOffset}
      />
      <ProductsSection
        title={lang.productsSection.title}
        subtitle={lang.productsSection.subtitle}
        products={[
          {
            title: lang.productsSection.products.security.title,
            description: lang.productsSection.products.security.description,
            icon: mdiShieldCheck,
            iconColor: null,
            link: paths.SECURITY,
            buttonText: buttons.knowMore,
          },
          {
            title: lang.productsSection.products.control.title,
            description: lang.productsSection.products.control.description,
            icon: mdiOrderBoolAscendingVariant,
            link: paths.CONTROL,
            buttonText: buttons.knowMore,
          },
          {
            title: lang.productsSection.products.tracking.title,
            description: lang.productsSection.products.tracking.description,
            icon: mdiMapMarkerPath,
            link: paths.TRACKING,
            buttonText: buttons.knowMore,
          },
        ]}
      />
      <TextCenter
        bgColor='white'
        heading
        title={lang.howTheyWork.title}
        subtitle={lang.howTheyWork.subtitle}
      />
      <SubSection
        name={lang.howTheyWork.security.name}
        title={lang.howTheyWork.security.title}
        description={lang.howTheyWork.security.description}
        image={security}
        bgColor='white'
        reversed
        buttons={[
          {
            text: buttons.security,
            type: 'primary',
            path: paths.SECURITY,
          },
        ]}
      />
      <SubSection
        name={lang.howTheyWork.control.name}
        title={lang.howTheyWork.control.title}
        description={lang.howTheyWork.control.description}
        image={control}
        bgColor='white'
        buttons={[
          {
            text: buttons.control,
            type: 'primary',
            path: paths.CONTROL,
          },
        ]}
      />
      <SubSection
        name={lang.howTheyWork.tracking.name}
        title={lang.howTheyWork.tracking.title}
        description={lang.howTheyWork.tracking.description}
        image={tracking}
        reversed
        bgColor='white'
        buttons={[
          {
            text: buttons.tracking,
            type: 'primary',
            path: paths.TRACKING,
          },
        ]}
      />

      <SubSection
        name={lang.howTheyWork.hardware.name}
        title={lang.howTheyWork.hardware.title}
        description={lang.howTheyWork.hardware.description}
        image={lang.howTheyWork.hardware.image}
        bgColor='white'
      />

      <TextCenter
        icon={dtLockIcon}
        title={lang.getStarted.title}
        textColor='white'
        bgColor='#202830'
        bgSize='200px'
        buttons={[
          {
            text: buttons.freeDemo,
            type: 'primary',
            onClick: () => setModalVisible(true),
          },
        ]}
      />
      <Video
        maxWidth='900px'
        video='https://youtu.be/0Ebem2oVzsY'
        previewImage={video_preview}
        bgColor='#202830'
      />
      <Testimonials title={lang.testimonials.title} />
      <GetDemo visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
};

Home.propTypes = {};

export default Home;
