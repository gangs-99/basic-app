import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // getCLS(onPerfEntry);
    // getFID(onPerfEntry);
    // getFCP(onPerfEntry);
    // getLCP(onPerfEntry);
    // getTTFB(onPerfEntry);
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
