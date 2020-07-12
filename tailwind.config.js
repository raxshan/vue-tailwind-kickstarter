module.exports = {
  theme: {
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
      display: ['Roboto', 'sans-serif']
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px'
    },
    borderRadius: {
      default: '0.25rem',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      '2lg': '1rem',
      '3lg': '1.5rem',
      '4lg': '2rem'
    },
    container: {
      center: true
    },
    extend: {
      textColor: {
        primary: '#E94545',
        secondary: '#D8F3FF'
      },
      borderColor: {
        primary: '#E94545',
        secondary: '#D8F3FF'
      },
      backgroundColor: theme => ({
        primary: '#E94545',
        secondary: '#D8F3FF'
      })
    },

    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.200'),
          '&:focus': {
            backgroundColor: theme('colors.white')
          }
        },
        select: {
          borderRadius: theme('borderRadius.lg'),
          '&:focus': {
            outline: 'none'
          }
        },
        checkbox: {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          '&:focus': {
            outline: 'none'
          }
        }
      }
    })
  },

  variants: {
    textColor: ['responsive', 'hover', 'focus', 'disabled'],
    backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
    borderColor: ['responsive', 'hover', 'focus', 'disabled']
  },

  plugins: [require('@tailwindcss/custom-forms')]
}
