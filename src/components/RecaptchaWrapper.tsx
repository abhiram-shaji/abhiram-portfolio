'use client';

import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import type ReCAPTCHA from 'react-google-recaptcha';
import type { ReCAPTCHAProps } from 'react-google-recaptcha';

// Load dynamically with SSR disabled and forwardRef support
const NoSSRReCAPTCHA = dynamic<ReCAPTCHAProps>(
  () => import('react-google-recaptcha').then(mod => mod.default),
  { ssr: false }
);

// Forward ref correctly
const ReCAPTCHAWrapper = forwardRef<ReCAPTCHA, ReCAPTCHAProps>((props, ref) => (
  <NoSSRReCAPTCHA {...props} ref={ref} />
));

ReCAPTCHAWrapper.displayName = 'ReCAPTCHAWrapper';

export default ReCAPTCHAWrapper;
