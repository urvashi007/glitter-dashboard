// utils/theme.ts
import { createTheme } from '@mui/material/styles';

// Extend MUI Theme to support mixins
declare module '@mui/material/styles' {
  interface Mixins {
    pageLayout: {
      boxShadow: string;
      background: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-manrope), sans-serif',
    h1: { fontFamily: 'jost',color: '#222' },
    h2: { fontFamily: 'jost',color: '#222' },
    h3: { fontSize: '24px', color: '#222', fontWeight: '700' },
  },
  mixins: {
    pageLayout: {
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)',
      background: '#fff',
    },
  },
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          width: 40,
          height: 40,
          minWidth: 40,
          fontWeight: 500,
        },
        outlined: {
          '&.Mui-selected': {
            backgroundColor: '#445B9C !important',
            color: '#fff !important',
            border: '1px solid #445B9C !important',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#222',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 26,
          height: 14,
          padding: 0,
          display: 'flex',
        },
        switchBase: {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: '#259924',
              opacity: 1,
              border: 0,
            },
          },
        },
        thumb: {
          width: 12,
          height: 12,
          borderRadius: 6,
          boxShadow: 'none',
          marginTop: '-1px',
          marginLeft: '-1px',
        },
        track: {
          borderRadius: 8,
          opacity: 1,
          backgroundColor: '#ccc',
          boxSizing: 'border-box',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: '14px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '14px',
          whiteSpace: 'nowrap',
          marginRight: '10px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '10px 12px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px',
          fontWeight: 700,
          color: '#5e5e5e',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#b0b0b0',
          '&.Mui-checked': {
            color: '#445B9C',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          display: 'table-header-group',
          backgroundColor: '#F5F7F9',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: '#445B9C',
          color: '#445B9C',
          fontWeight: 500,
          fontSize: '16px',
          textTransform: 'none',
          padding: '8px 16px',
          borderRadius: 0,
          fontFamily: 'var(--font-jost), sans-serif',
          '&:hover': {
            backgroundColor: 'rgba(68, 91, 156, 0.05)',
            borderColor: '#445B9C',
          },
        },
      },
    },

    // ✅ Newly Added Styles:
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: 0,
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& input': {
              height: '48px',
              boxSizing: 'border-box',
            },
            '& textarea': {
              height: 'auto !important',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: 0,
          height: '48px',
          fontFamily:'jost',
        },
        select: {
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 0,
          paddingBottom: 0,
          fontFamily:'jost',
        },
        icon: {
          top: 'calc(50% - 12px)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: '#fff',
          fontFamily:'jost',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          fontWeight: 600,
          fontFamily:'jost',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily:'jost',
        },
      },
    },
  },
});

export default theme;
