import React from 'react';
import { useCycle } from 'framer-motion';
import { Toggle } from './components/toggle';
import { NavList } from './components/nav-list';
import { AnimatedStyledNav, StyledNavContainer } from './style';

const variants = {
  open: { right: 0, width: 300 },
  closed: { right: -300, width: 0 },
};

const NavMenu = ({ pages, companyName, logo, currentPath, toggleBackdrop, ...themeProps }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleToggle = () => {
    toggleOpen();
    toggleBackdrop();
  };

  return (
    <StyledNavContainer
      isOpen={isOpen}
      currentPath={currentPath}
      {...themeProps}
    >
      <AnimatedStyledNav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.25 }}
        isOpen={isOpen}
        {...themeProps}
      >
        <NavList
          pages={pages}
          toggle={handleToggle}
        />
      </AnimatedStyledNav>

      <Toggle
        toggle={handleToggle}
        fasIcon={isOpen ? 'times' : 'bars'}
      />
    </StyledNavContainer>
  );
};

export default NavMenu;
