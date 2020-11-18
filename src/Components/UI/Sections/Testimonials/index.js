import React from 'react';
import Slider from 'react-slick';
import { Typography, Row, Col } from 'antd';
import Section from '../../Section';
import UserTestimony from '../../UserTestimony';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.less';
import { TESTIMONIALS } from '../../../../Utils/constants';

const Testimonials = ({ title, slides }) => {
  const { Title } = Typography;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Section>
      <Row gutter={[32, 64]}>
        <Col span={24}>
          <Title level={1} className='main-section-title text-center'>
            {title}
          </Title>
        </Col>
        <Col span={24}>
          <Slider {...settings}>
            {TESTIMONIALS ? (
              TESTIMONIALS.map((testimony, index) => (
                <UserTestimony
                  key={index}
                  name={testimony.name}
                  avatar={testimony.avatar}
                  testimony={testimony.testimony}
                  logo={testimony.logo}
                  charge={testimony.charge}
                />
              ))
            ) : (
              <div style={{ textAlign: 'center' }}> no hay slides</div>
            )}
          </Slider>
        </Col>
      </Row>
    </Section>
  );
};

export default Testimonials;
