import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "App.scss";

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
