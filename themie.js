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

export { themie }