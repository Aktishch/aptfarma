const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    '.form': {
      display: 'flex',
      flexDirection: 'column',

      '&-label': {
        display: 'flex',
        flexDirection: 'column',
      },

      '&-wrapper': {
        display: 'block',
        position: 'relative',
        width: '100%',
      },

      '&-icon': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '40px',
        height: '100%',
        pointerEvents: 'none',

        '&--pointer': {
          pointerEvents: 'all',
        },

        '&--left': {
          left: 0,
        },

        '&--right': {
          right: 0,
        },
      },

      '&-error': {
        fontSize: theme('fontSize.12'),
        color: theme('colors.second.DEFAULT'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '-18px',
        opacity: 0,
        visibility: 'hidden',
        transition: '0.3s ease',
      },
    },
  })
})
