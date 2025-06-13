'use client';

import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import type { ReCAPTCHAProps } from 'react-google-recaptcha';

// Load dynamically with SSR disabled and forwardRef support
const NoSSRReCAPTCHA = dynamic(
  () => import('react-google-recaptcha').then(mod => 
    // Wrap the imported component with forwardRef
    forwardRef<any, ReCAPTCHAProps>((props, ref) => <mod.default {...props} ref={ref} />)
  ),
  { ssr: false }
);

// Forward ref correctly
const ReCAPTCHAWrapper = forwardRef<any, ReCAPTCHAProps>((props, ref) => (
  <NoSSRReCAPTCHA {...props} ref={ref} />
));

ReCAPTCHAWrapper.displayName = 'ReCAPTCHAWrapper';

export default ReCAPTCHAWrapper;
