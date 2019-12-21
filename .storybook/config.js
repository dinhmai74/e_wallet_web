import { configure, addDecorator } from '@storybook/react';
import "App.scss";
import "../src/styles/index.scss"

import StylesDecorator from './styles-decorator';

addDecorator(StylesDecorator);


// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
