import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { Row, Col, Typography } from 'antd';
import './styles.less';

const SectionsShortcuts = ({ sections, dark }) => {
  const { Text } = Typography;
  return (
    <Row gutter={[32, 16]}>
      {sections && sections.map((section, index) => {
        return (
          <Col key={index} span={24}>
            <Link to={`#${section.id}`}>
              <div className="sections-list-section">
                <Icon
                  path={section.icon}
                  size={1}
                />
                <Text style={{ color: dark ? 'white' : null }}>{section.title}</Text>
              </div>
            </Link>
          </Col>
        )
      })}
    </Row>
  )
}

export default SectionsShortcuts;