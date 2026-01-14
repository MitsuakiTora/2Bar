/* 

MIT License

Copyright (c) 2026 JustDeveloper <https://justdeveloper.is-a.dev/>

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

/* 
      ___    ____                      
    /'___`\ /\  _`\                    
   /\_\ /\ \\ \ \L\ \     __     _ __  
   \/_/// /__\ \  _ <'  /'__`\  /\`'__\
      // /_\ \\ \ \L\ \/\ \L\.\_\ \ \/ 
     /\______/ \ \____/\ \__/.\_\\ \_\ 
     \/_____/   \/___/  \/__/\/_/ \/_/ 
*/

(()=>{
    "use strict";
    if (typeof module === 'object' && module.exports) throw new Error('2Bar: Invalid environment.');

    let id = '__2Bar__';
    let cl = '__2Bar__';
    let c2 = '__SBar__';
    const i = ' !important';
    let initialized = false;

    const svg = (ID = id) => `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute;overflow:hidden;">
        <defs>
            <filter id="${typeof ID == 'string' ? ID : (()=>{
                throw new Error('2Bar: Invalid id input.');
            })()}" x="0%" y="0%" width="20%" height="100%">
                <feDisplacementMap in="SourceGraphic" scale="300" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
            </filter>
        </defs>
    </svg>`;
    const filter = document.createElement('div');
    filter.innerHTML = svg();

    const css = (class_ = cl, class2 = c2) => `
        div[class="${typeof class_ == 'string' ? class_ : (()=>{
            throw new Error('2Bar: Invalid class input.');
        })()}"], div[class="${typeof class2 == 'string' ? class2 : (()=>{
            throw new Error('2Bar: Invalid second class input.');
        })()}"] {
            position: fixed${i};
            top: 0px${i};
            width: 100%${i};
            transform: rotateZ(90deg)${i};
            height: 100vw${i};
            backdrop-filter: url(#${id})${i};
            -webkit-backdrop-filter: url(#${id})${i};
            z-index: calc(999 * 999 * 999 * 999 * 999)${i};
            translate: calc(20% - 1px) -10%${i};
            mask-image: linear-gradient(90deg, black 20%, transparent 20%)${i};
            -webkit-mask-image: linear-gradient(90deg, black 20%, transparent 20%)${i};
            pointer-events: none${i};
        }
        div[class="${class2}"] {
            translate: -10% -10%${i};
            transform: rotateZ(360deg)${i};
            mask-image: linear-gradient(180deg, black 20%, transparent 20%), linear-gradient(180deg, black 20%, transparent 20% 20%)${i};
            -webkit-mask-image: linear-gradient(180deg, black 20%, transparent 20%), linear-gradient(180deg, black 20%, transparent 20% 20%)${i};
            width: 200%${i};
        }
    `;
    const style = document.createElement('style');
    style.innerHTML = css();

    function update(SVG = svg(), CSS = css()) {
        filter.innerHTML = SVG;
        style.innerHTML = CSS;
    }

    function redefine(what) {
        throw new Error(`2Bar: Attempt to redefine window['2Bar']${
            what ? '.' + what : ''
        }.`);
    }

    Object.defineProperty(globalThis.window, '2Bar', {
        get: () => {
            return {
                get['spawn']() {
                    if (!initialized) {
                        initialized = true;
                        
                        document.head.appendChild(style);
                        document.body.appendChild(filter);
                    }
                    return function spawn(options = {}) {
                        if (typeof options != 'object') throw new Error('2Bar: Invalid options input.');

                        const opts = {
                            id,
                            class1: cl,
                            class2: c2,
                            ...options
                        };
                        [id, cl, c2] = [opts.id, opts.class1, opts.class2];
                        const main = document.createElement('div');
                        const side = document.createElement('div');
                        main.className = cl;
                        side.className = c2;

                        update(svg(id), css(cl, c2));
                        document.body.append(main, side);

                        return [main, side];
                    }
                },
                set['spawn'](any) {
                    redefine('spawn');
                },
                get[Symbol.toStringTag]() {
                    return '2Bar';
                }
            };
        },
        set: () => redefine()
    })
})()
