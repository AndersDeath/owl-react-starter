import * as React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Display } from './Display';


storiesOf("Display", module)
    .add("with text", () => (
        <Display count={1} />
    ))