import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export const button = {
  id: '1',
  text: 'Button',
  state: 'BUTTON_PRIMARY',
};

export const actions = {
  onClick: action('onClick'),
};

storiesOf('Button', module)
  .add('default', () => <Button button={button} {...actions} />)
  .add('secondary', () => <Button button={{ ...button, state: 'BUTTON_SECONDARY' }} {...actions} />)
  .add('loading', () => <Button loading button={button} {...actions} />);
