/**
@license
MIT License

Copyright (c) 2020 Paul Mason

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import { MaterialTheme } from './material-theme.js';

/*  primary, lightPrimary, darkPrimary, secondary, lightSecondary, darkSecondary,
    onPrimary, onLightPrimary, onDarkPrimary, onSecondary, onLightSecondary, onDarkSecondary,
    surface, background, error, notification, 
    onSurface, onBackground, onError, onNotification,
    textPrimary, textSecondary, textDisabled, 
    divider
*/

const blueTeal = new MaterialTheme('#6002ee', '#9c47ff', '#0000ba', '#00bfa5', '#5df2d6', '#008e76', 
                                   '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#FFFFFF',
                                   '#FFFFFF', '#FAFAFA', '#B00020', '#323232', 
                                   'rgba(0, 0, 0, 0.87)', 'rgba(0, 0, 0, 0.87)', '#FFFFFF', 'rgba(255, 255, 255, 0.87)',
                                   'rgba(0, 0, 0, 0.87)', 'rgba(0, 0, 0, 0.54)', 'rgba(0, 0, 0, 0.38)', 
                                   'rgba(0, 0, 0, 0.20)');

const darkOrange = new MaterialTheme('#3e2723', '#6a4f4b', '#1b0000', '#e65100', '#ff833a', '#ac1900', 
                                     '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#FFFFFF',
                                     '#3e2723','#1b0000', '#B00020', '#323232', 
                                     'rgba(255, 255, 255, 0.87)', 'rgba(255, 255, 255, 0.87)', '#FFFFFF', 'rgba(255, 255, 255, 0.87)',
                                     'rgba(255, 255, 255, 0.87)', 'rgba(255, 255, 255, 0.54)', 'rgba(255, 255, 255, 0.38)', 
                                     'rgba(255, 255, 255, 0.38)');

export { blueTeal, darkOrange }