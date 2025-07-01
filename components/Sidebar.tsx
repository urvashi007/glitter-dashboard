'use client';

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import Image from 'next/image';

const drawerWidth = 252;

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openHomepage, setOpenHomepage] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('Dashboard');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const textStyle = { '& .MuiListItemText-primary': { fontSize: '14px' } };

  const navItems = [
    { label: 'Dashboard', icon: '/icon1.svg' },
    { label: 'Client Management', icon: '/icon2.svg' },
    { label: 'Category Management', icon: '/icon5.svg' },
    { label: 'CMS Management', icon: '/icon6.svg' },
    { label: 'Discount Management', icon: '/icon7.svg' },
    { label: 'Custom Order Management', icon: '/icon8.svg' },
    { label: 'Homepage Banner', icon: '/icon8.svg' },
    { label: 'Enquiry Management', icon: '/icon9.svg' },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        bgcolor: '#445B9C',
        color: 'white',
        height: '100vh',
        paddingTop: '20px',
        position: 'relative',
      }}
    >
      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'white',
            zIndex: 3,
           
          }}
        >
          <CloseIcon />
        </IconButton>
      )}

      <List disablePadding>
        {navItems.slice(0, 2).map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              selected={activeItem === item.label}
              onClick={() => {
                setActiveItem(item.label);
                if (isMobile) setMobileOpen(false);
              }}
              sx={{
                ...(activeItem === item.label && {
                  borderLeft: '2px solid #fff',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }),
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                <Image src={item.icon} alt={item.label} width={19} height={19} />
              </ListItemIcon>
              <ListItemText primary={item.label} sx={textStyle} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <ListItemButton onClick={() => setOpenHomepage(!openHomepage)}>
            <ListItemIcon sx={{ color: 'white' }}>
              <Image src="/icon3.svg" alt="Homepage" width={19} height={19} />
            </ListItemIcon>
            <ListItemText primary="Homepage Management" sx={textStyle} />
            {openHomepage ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openHomepage} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem disablePadding>
              <ListItemButton
                selected={activeItem === 'Banner'}
                onClick={() => {
                  setActiveItem('Banner');
                  if (isMobile) setMobileOpen(false);
                }}
                sx={{
                  ...(activeItem === 'Banner' && {
                    borderLeft: '2px solid #fff',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }),
                }}
              >
                <ListItemText primary="Banner" sx={textStyle} />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setOpenProduct(!openProduct)}>
            <ListItemIcon sx={{ color: 'white' }}>
              <Image src="/icon4.svg" alt="Product" width={19} height={19} />
            </ListItemIcon>
            <ListItemText primary="Product Management" sx={textStyle} />
            {openProduct ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openProduct} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            {['Product Catalog', 'Category Management'].map((label) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  selected={activeItem === label}
                  onClick={() => {
                    setActiveItem(label);
                    if (isMobile) setMobileOpen(false);
                  }}
                  sx={{
                    ...(activeItem === label && {
                      borderLeft: '2px solid #fff',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }),
                  }}
                >
                  <ListItemText primary={label} sx={textStyle} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>

        {navItems.slice(2).map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              selected={activeItem === item.label}
              onClick={() => {
                setActiveItem(item.label);
                if (isMobile) setMobileOpen(false);
              }}
              sx={{
                ...(activeItem === item.label && {
                  borderLeft: '2px solid #fff',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }),
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                <Image src={item.icon} alt={item.label} width={19} height={19} />
              </ListItemIcon>
              <ListItemText primary={item.label} sx={textStyle} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>

      {isMobile && !mobileOpen && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: theme.zIndex.drawer + 2,
            backgroundColor: '#445B9C',
            color: 'white',
            marginTop:{xs:'-9px', md:'0'}
          }}
        >
          <MenuIcon />
        </IconButton>
      )}


      {!isMobile && (
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            width: drawerWidth,
            flexShrink: 0,
          }}
        >
          {drawerContent}
        </Box>
      )}

  
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: theme.zIndex.appBar + 10,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: 0,
            height: '100vh',
            position: 'fixed',
            fontFamily: 'Manrope',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
