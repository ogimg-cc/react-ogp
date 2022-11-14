import React, { forwardRef, ForwardRefRenderFunction, MetaHTMLAttributes } from 'react';

type Ref = HTMLMetaElement;

type Props = {
  uri: string;
} & MetaHTMLAttributes<Ref>;

type RefFunc = ForwardRefRenderFunction<Ref, Props>;

const ogpImageRefFunc: RefFunc = ({ uri = '', ...props }, ref) => (
  <meta property="og:image" content={uri} {...props} ref={ref} />
);

const OGPImage = forwardRef<Ref, Props>(ogpImageRefFunc);

export default OGPImage;
