Themie is a CSS variable theming library that can be used to easily create [Material Design](https://material.io/design/color/the-color-system.html#color-usage-and-palettes) themes for web applications.

# Quick Start

## 1) Install
Install Themie from NPM:

```
npm i themie --save
```

## 2) Import Themie

```javascript
import { themie, Theme } from 'themie/themie.js';
```

## 3) Create a Theme

```javascript
/*
primary, lightPrimary, darkPrimary, secondary, lightSecondary, darkSecondary,
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
```

## 4) Register the Theme

```javascript
themie.register('blue-teal', blueTeal);
```

## 5) Apply the Theme

A theme can be applied globally (to the document).

```javascript
themie.apply('blue-teal');
```

Or to a DOM node (and its children).

```javascript
const el = document.getElementById('something');

themie.apply('blue-teal', el);
```

## 6) Use the Theme

Since a theme is just a bunch of CSS variables, you use them in CSS selectors as normal.

```css
.something {
    color: var(--theme-on-primary-color);
    background: var(--theme-primary-color);
    border: 1px solid var(--theme-divider-color);
}
```

Different themes can be applied to different nodes, and a theme applied to a child node will override any inherited theme.

# Theme Variables

|Item            |Variable                        |Description                                                              |
|----------------|--------------------------------|-------------------------------------------------------------------------|
|primary         |--theme-primary-color           |The primary color                                                        |
|lightPrimary    |--theme-light-primary-color     |A light variant of the primary color                                     |
|darkPrimary     |--theme-dark-primary-color      |A dark variant of the primary color                                      |
|secondary       |--theme-secondary-color         |The secondary or accent color                                            |
|lightSecondary  |--theme-light-secondary-color   |A light variant of the secondary color                                   |
|darkSecondary   |--theme-dark-secondary-color    |A dark variant of the secondary color                                    |
|onPrimary       |--theme-on-primary-color        |The text/icon color on a primary color background                        |
|onLightPrimary  |--theme-on-light-primary-color  |The text/icon color on a light primary color background                  |
|onDarkPrimary   |--theme-on-dark-primary-color   |The text/icon color on a dark primary color background                   |
|onSecondary     |--theme-on-secondary-color      |The text/icon color on a secondary color background                      |
|onLightSecondary|--theme-on-light-secondary-color|The text/icon color on a light secondary color background                |
|onDarkSecondary |--theme-on-dark-secondary-color |The text/icon color on a dark secondary color background                 |
|surface         |--theme-surface-color           |The background color for container surfaces, such as dialogs, etc.       |
|background      |--theme-background-color        |The background color for application windows                             |
|error           |--theme-error-color             |The background color for error containers, or error/validation text color|
|notification    |--theme-notification-color      |The background color for notifications, such as toast or tooltips        |
|onSurface       |--theme-on-surface-color        |The text/icon color on a surface color background                        |
|onBackground    |--theme-on-background-color     |The text/icon color on a background color background                     |
|onError         |--theme-on-error-color          |The text/icon color on an error color background                         |
|onNotification  |--theme-on-notification-color   |The text/icon color on a notification color background                   |
|textPrimary     |--theme-text-primary-color      |The color of primary text on (usually) surface backgrounds               |
|textSecondary   |--theme-text-secondary-color    |The color of secondary text on (usually) surface backgrounds             |
|textDisabled    |--theme-text-disabled-color     |The color of disabled text on (usually) surface backgrounds              |
|divider         |--theme-divider-color           |The color of dividers on (usually) surface backgrounds                   |

# Predefined Themes

There's a couple of predefined themes in the `themes.js` modules. To use theme just import the theme(s) you want and register them (you can use whatever name you want to register the predefined themes).

```javascript
import { themie, Theme } from 'themie/themie.js';
import { blueTeal, darkOrange } from 'themie/themes.js';

themie.register('blue-teal', blueTeal);
themie.register('dark-orange', darkOrange);

themie.apply('blue-teal');
```

These are the currently available predefined themes.

|Theme     |Description                                                |
|----------|-----------------------------------------------------------|
|blueTeal  |A light themen with blue primary and teal secondary colors |
|darkOrange|A dark theme with brown primary and orange secondary colors|