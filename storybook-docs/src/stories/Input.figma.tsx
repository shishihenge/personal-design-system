import React from 'react';
import figma from '@figma/code-connect';
import { Input } from './Input';

figma.connect(
  Input,
  'https://www.figma.com/design/RhNwqr0OjgkBOe4AY2Fijb/MVP-Design-system?node-id=6-471&m=dev',
  {
    props: {
      label: figma.string('Label'),
      placeholder: figma.string('Placeholder'),
      value: figma.string('Value'),
      state: figma.enum('State', {
        default: 'default',
        readonly: 'readonly',
        disabled: 'disabled',
        error: 'error',
        warning: 'warning',
        focus: 'focus',
      }),
      variant: figma.enum('Variant', {
        default: 'default',
        'left-icon': 'left-icon',
      }),
      message: figma.string('Message'),
    },
    example: (props) => {
      return (
        <Input
          label={props.label}
          placeholder={props.placeholder}
          value={props.value}
          state={props.state}
          variant={props.variant}
          message={props.message}
        />
      );
    },
  }
);