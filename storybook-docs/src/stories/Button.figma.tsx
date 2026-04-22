import React from 'react';
import figma from '@figma/code-connect';
import { Button } from './Button';

// We will paste your Figma link right here in the next step!
figma.connect(Button, 'https://www.figma.com/design/RhNwqr0OjgkBOe4AY2Fijb/MVP-Design-system?node-id=6-342&t=TXugrywDTdRIwlhK-11', {
  props: {
    label: figma.string('Text'),
    primary: figma.boolean('Primary'),
  },
  example: (props) => {
    return <Button primary={props.primary} label={props.label} />;
  },
});