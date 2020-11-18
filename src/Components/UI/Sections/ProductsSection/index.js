import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../Section';
import { Icon } from '@mdi/react';
import { Typography, Row, Col, Card, Button } from 'antd';
import './styles.less';

const ProductsSection = ({ title, subtitle, products }) => {
  const { Title, Paragraph } = Typography;
  return (
    <>
      <Section>
        <Row gutter={[32, 24]}>
          {products &&
            products.map((product, index) => (
              <Col lg={8} key={index}>
                <Link to={product.link}>
                  <Card
                    className='products-card'
                    bodyStyle={{ padding: 40 }}
                    hoverable
                  >
                    {product.icon && (
                      <Icon
                        size={3}
                        path={product.icon}
                        style={{ marginBottom: 20 }}
                        className='icon'
                      />
                    )}
                    <Title level={4}>{product.title}</Title>
                    <Paragraph style={{ textAlign: 'center' }}>
                      {product.description}
                    </Paragraph>
                    <Button type='primary'>
                      {product.buttonText || 'Ver más'}
                    </Button>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </Section>
    </>
  );
};
export default ProductsSection;
