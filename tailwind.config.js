/** @type {import('tailwindcss').Config} */

// Single source of truth for every raw color value.
const primitives = {
  green: {
    950: '#0F1F14',
    900: '#162C1E',
    800: '#1F3D2B',
    700: '#2B523A',
  },
  warm: {
    50:  '#faf9f6',  // page background
    100: '#f4f4f0',  // tinted surface (callouts, permission boxes)
    200: '#e8e8e5',  // subtle fill (dictate button)
    300: '#e3e3df',  // input fill (surface-container)
    500: '#727972',  // standard border / mid-tone
    700: '#424843',  // text-secondary / border-strong
    900: '#1a1c1a',  // text-primary
  },
  white: '#FFFFFF',
  red:   { 700: '#B22A29' },
  amber: { 600: '#D97706' },
  blue:  { 700: '#20467B' },
};

module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    // -------------------------------------------------------------------------
    // BORDER RADIUS
    // Zero radius — SAFENET's "austere editorial" aesthetic.
    // -------------------------------------------------------------------------
    borderRadius: {
      'radius-sm':   '0px',
      'radius-md':   '0px',
      'radius-lg':   '0px',
      'radius-full': '0px',
    },

    extend: {
      // -----------------------------------------------------------------------
      // COLORS
      // -----------------------------------------------------------------------
      colors: {
        // Primitives
        ...primitives,

        // Semantic Tokens — components must use these, never primitives directly.
        'surface':               primitives.warm[50],    // #faf9f6 — page bg
        'surface-elevated':      primitives.white,        // #FFFFFF — cards, sheets
        'surface-container':     primitives.warm[300],   // #e3e3df — input fill
        'surface-tinted':        primitives.warm[100],   // #f4f4f0 — callouts
        'surface-subtle':        primitives.warm[200],   // #e8e8e5 — dictate btn
        'border':                primitives.warm[500],   // #727972 — standard border
        'border-strong':         primitives.warm[700],   // #424843 — emphasis
        'border-faint':          'rgba(114, 121, 114, 0.20)', // section dividers
        'text-primary':          primitives.warm[900],   // #1a1c1a
        'text-secondary':        primitives.warm[700],   // #424843
        'text-disabled':         primitives.warm[500],   // #727972
        'action-primary':         primitives.green[800],  // #1F3D2B
        'action-primary-hover':   primitives.green[900],
        'action-primary-pressed': primitives.green[950],
        'on-action-primary':     primitives.white,
        'action-secondary':           primitives.warm[300],
        'surface-container-pressed':  primitives.warm[300],
        'status-error':          primitives.red[700],
        'status-warning':        primitives.amber[600],
        'status-info':           primitives.blue[700],
      },

      // -----------------------------------------------------------------------
      // FONT FAMILY
      // -----------------------------------------------------------------------
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },

      // -----------------------------------------------------------------------
      // TYPOGRAPHY SCALE
      // -----------------------------------------------------------------------
      fontSize: {
        'display':     ['40px', { lineHeight: '48px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'heading-xl':  ['32px', { lineHeight: '40px', fontWeight: '700', letterSpacing: '-0.01em' }],
        'heading-lg':  ['24px', { lineHeight: '32px', fontWeight: '700', letterSpacing: '0'       }],
        'heading-md':  ['20px', { lineHeight: '28px', fontWeight: '600', letterSpacing: '0'       }],
        'heading-sm':  ['18px', { lineHeight: '24px', fontWeight: '600', letterSpacing: '0'       }],
        'body-lg':     ['20px', { lineHeight: '30px', fontWeight: '400', letterSpacing: '0'       }],
        'body':        ['17px', { lineHeight: '26px', fontWeight: '400', letterSpacing: '0'       }],
        'body-sm':     ['15px', { lineHeight: '22px', fontWeight: '400', letterSpacing: '0'       }],
        'caption':     ['13px', { lineHeight: '18px', fontWeight: '500', letterSpacing: '0.02em'  }],
        'overline':    ['11px', { lineHeight: '16px', fontWeight: '700', letterSpacing: '0.05em'  }],
        // Form-specific scale
        'label':       ['12px', { lineHeight: '16px', fontWeight: '700', letterSpacing: '0.05em'  }],
        'section':     ['14px', { lineHeight: '20px', fontWeight: '700', letterSpacing: '0.05em'  }],
        'input':       ['16px', { lineHeight: '24px', fontWeight: '400', letterSpacing: '0'       }],
      },

      // -----------------------------------------------------------------------
      // SPACING SCALE — 4px grid
      // -----------------------------------------------------------------------
      spacing: {
        'space-1':  '4px',
        'space-2':  '8px',
        'space-3':  '12px',
        'space-4':  '16px',
        'space-5':  '20px',
        'space-6':  '24px',
        'space-7':  '28px',
        'space-8':  '32px',
        'space-10':     '40px',
        'space-12':     '48px',
        'touch-min':    '56px',
        'touch-primary': '64px',
      },

      // -----------------------------------------------------------------------
      // BOX SHADOW — Elevation
      // -----------------------------------------------------------------------
      boxShadow: {
        'raised':  '0px 1px 40px 0px rgba(26, 28, 26, 0.06)',
        'submit':  '0px -4px 8px 0px rgba(31, 61, 43, 0.04)',
      },
    },
  },
  plugins: [],
};
