import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const FilterIcon = (props) => {
  const id = useMemo(() => uuidv4(), []);
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#clip${id})`}>
        <path
          d="M3.04693 3.7803C3.13088 3.87166 3.17697 3.991 3.17697 4.11446V7.75237C3.17697 7.97132 3.44117 8.08243 3.59755 7.92851L4.61238 6.76553C4.74819 6.60256 4.82309 6.5219 4.82309 6.36058V4.11529C4.82309 3.99183 4.87 3.87248 4.95313 3.78112L7.8651 0.621408C8.08321 0.384368 7.91531 0 7.59266 0H0.407376C0.084738 0 -0.0839886 0.383545 0.134945 0.621408L3.04693 3.7803Z"
          fill="#2BCCCC"
        />
      </g>
      <defs>
        <clipPath id={`clip${id}`}>
          <rect width="8" height="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
