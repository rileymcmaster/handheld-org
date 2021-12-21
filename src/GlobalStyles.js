import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      /* near black */
      --primary-colour: #383837;
      /* light beige */
      --secondary-colour: #EBE8D3;
      /* dark beige */
      --third-colour: #CFC1AE;
      --dropshadow-desktop: drop-shadow(2px 4px 1px rgba(0,0,0,.2));
    }
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body, div,
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
    }

    html {
        font-size: 20px;
    scroll-behavior: smooth;
    }
    @media (max-width: 900px) {
    html { font-size: 15px; }
    }
    @media (max-width: 400px) {
    html { font-size: 12px; }
    }


    body {
        font-family: 'Roboto', sans-serif;
        color: var(--primary-colour);
        background: rgb(235,232,211);
        background: radial-gradient(circle, rgba(235,232,211,.5) 15%, rgba(207,193,174,.5) 81%);
    }

    html, body {
        min-height: 100%;
        height: 100%;
    }

    h1 {

    }

        h2{
    }

    p, a {

    }


    h1, h2, h3, h4, h5, p, a, button {
        filter: var(--dropshadow-desktop);
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    }

    
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        /* list-style: none; */
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
 
`;
