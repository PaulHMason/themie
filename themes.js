import { Theme } from './themie.js';

/*  primary, lightPrimary, darkPrimary, secondary, lightSecondary, darkSecondary,
    onPrimary, onLightPrimary, onDarkPrimary, onSecondary, onLightSecondary, onDarkSecondary,
    surface, background, error, notification, 
    onSurface, onBackground, onError, onNotification,
    textPrimary, textSecondary, textDisabled, 
    divider
*/

const blueTeal = new Theme('#6002ee', '#9c47ff', '#0000ba', '#00bfa5', '#5df2d6', '#008e76', 
                           '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#000000', '#FFFFFF',
                           '#FFFFFF', '#FAFAFA', '#B00020', '#323232', 
                           'rgba(0, 0, 0, 0.87)', 'rgba(0, 0, 0, 0.87)', '#FFFFFF', 'rgba(255, 255, 255, 0.87)',
                           'rgba(0, 0, 0, 0.87)', 'rgba(0, 0, 0, 0.54)', 'rgba(0, 0, 0, 0.38)', 
                           'rgba(0, 0, 0, 0.20)');

const darkOrange = new Theme('#3e2723', '#6a4f4b', '#1b0000', '#e65100', '#ff833a', '#ac1900', 
                             '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#000000', '#FFFFFF',
                             '#3e2723','#1b0000', '#B00020', '#323232', 
                             'rgba(255, 255, 255, 0.87)', 'rgba(255, 255, 255, 0.87)', '#FFFFFF', 'rgba(255, 255, 255, 0.87)',
                             'rgba(255, 255, 255, 0.87)', 'rgba(255, 255, 255, 0.54)', 'rgba(255, 255, 255, 0.38)', 
                             'rgba(255, 255, 255, 0.38)');

export { blueTeal, darkOrange }