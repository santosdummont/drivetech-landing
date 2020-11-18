import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { useResizeObserver } from '../../../../Utils/utils';
import Section from '../../Section';

const Video = ({ video, maxWidth, previewImage, bgColor, bgImage }) => {
  const refVideo = useRef();
  const dimensions = useResizeObserver(refVideo);

  return (
    <Section bgColor={bgColor} bgImage={bgImage}>
      <div ref={refVideo} style={{ maxWidth: maxWidth, margin: '0 auto' }}>
        {dimensions ? (
          <ReactPlayer
            url={video}
            width={dimensions.width}
            height={(dimensions.width / 16) * 9}
            light={previewImage}
            playing={previewImage ? true : null}
            controls={true}
            config={{
              youtube: {
                embedOptionsF: {
                  rel: 0,
                },
              },
            }}
          />
        ) : null}
      </div>
    </Section>
  );
};

export default Video;
