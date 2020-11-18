import React from 'react';
import { Typography } from 'antd';
import './styles.less';

const TextGenerator = ({ contents }) => {
  const { Title, Paragraph } = Typography;
  return (
    <>
      {contents &&
        contents.map((block, index) => (
          <div key={index} style={{ display: 'block' }}>
            {block.title ? (
              <Title level={4} className='terms-title'>
                {block.title}
              </Title>
            ) : null}
            {block.body ? (
              <Paragraph className='terms-paragraph'>{block.body}</Paragraph>
            ) : null}
            {block.list && block.list.points ? (
              <ol type={block.list.type} className='terms-paragraph'>
                {block.list.points.map((listPoint, listPointIndex) => (
                  <li key={listPointIndex} className='terms-paragraph'>
                    {listPoint.body}
                    {listPoint.list ? (
                      <ol
                        type={listPoint.list.type}
                        style={{ marginTop: '1em' }}
                      >
                        {listPoint.list
                          ? listPoint.list.points.map((list, listIndex) => (
                              <li key={listIndex} style={{ marginTop: '1em' }}>
                                {list.body}
                              </li>
                            ))
                          : null}
                      </ol>
                    ) : null}
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        ))}
    </>
  );
};

export default TextGenerator;
