import React from 'react';

export function DottedOverlay() {
  return (
    <div className="absolute inset-0 z-15 overflow-hidden">
      <div className="dots-overlay" />
    </div>
  );
}