export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  features?: string[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  stats?: HeroStat[];
  heroImage?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export interface HeroStat {
  iconName: string;
  value: string;
  label: string;
  color: string;
}
