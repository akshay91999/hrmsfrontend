import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Textarea() {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={10}
      placeholder="Reason"
      style={{ width: 500 }}
    />
  );
}
