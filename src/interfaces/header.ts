export interface HeaderLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

export interface HeaderProps {
  logo?: string;
  companyName?: string;
  primaryColor?: string;
  secondaryColor?: string;
  navigation?: HeaderLink[];
  megaMenus?: {
    [key: string]: MegaMenuSection[];
  };
  showThemeToggle?: boolean;
  showGetStartedButton?: boolean;
  getStartedButtonText?: string;
  onGetStartedClick?: () => void;
  onThemeToggle?: () => void;
}
