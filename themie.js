class Theme {
    constructor(primary, lightPrimary, darkPrimary, secondary, lightSecondary, darkSecondary,
                onPrimary, onLightPrimary, onDarkPrimary, onSecondary, onLightSecondary, onDarkSecondary,
                surface, background, error, notification, onSurface, onBackground, onError, onNotification,
                textPrimary, textSecondary, textDisabled, divider) {
    
        this.primary = primary;
        this.lightPrimary = lightPrimary;
        this.darkPrimary = darkPrimary;
        this.secondary = secondary;
        this.lightSecondary = lightSecondary;
        this.darkSecondary = darkSecondary;

        this.onPrimary = onPrimary;
        this.onLightPrimary = onLightPrimary;
        this.onDarkPrimary = onDarkPrimary;
        this.onSecondary = onSecondary;
        this.onLightSecondary = onLightSecondary;
        this.onDarkSecondary = onDarkSecondary;

        this.surface = surface;
        this.background = background;
        this.error = error;
        this.notification = notification;
        this.onSurface = onSurface;
        this.onBackground = onBackground;
        this.onError = onError;
        this.onNotification = onNotification;
        
        this.textPrimary = textPrimary;
        this.textSecondary = textSecondary;
        this.textDisabled = textDisabled;

        this.divider = divider;
    }
}

class Themie {
    constructor() {
        this._themes = new Map();
    }

    register(name, theme) {
        this._themes.set(name, theme);
    }

    unregister(name) {
        this._themes.delete(name);
    }

    hasTheme(name) {
        return this._themes.has(name);
    }

    get themeNames() {
        return Array.from(this._themes.keys());
    }

    apply(name, root) {
        const theme = this._themes.get(name);

        if (theme) {
            const rootElement = root || document.documentElement;
            const props = Object.getOwnPropertyNames(theme);

            props.forEach((name) => {
                rootElement.style.setProperty(this._varToCss(name), theme[name]);
            });
        }
    }

    _varToCss(string) {
        return '--theme-' + string.replace(/[\w]([A-Z])/g, function(m) {
            return m[0] + "-" + m[1];
        }).toLowerCase() + '-color';
    }
}

window._themie = window._themie || new Themie();
const themie = window._themie;

export { themie, Theme }