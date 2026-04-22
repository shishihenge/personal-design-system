import './button.css';
import { ExternalLink, ChevronDown } from 'lucide-react';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;  // Keep or remove if always true
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'medium' | 'large';  // Removed 'small'
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Disable the button */
  disabled?: boolean;
  /** Variant for different button types */
  variant?: 'default' | 'text-icon' | 'external-link' | 'dropdown' | 'text-icon-right';
  /** Optional icon for text-icon variant */
  icon?: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = true,  // Always true, or remove prop
  size = 'medium',  // Default to medium
  backgroundColor,
  label,
  disabled = false,
  variant = 'default',
  icon,
  ...props
}: ButtonProps) => {
  // Existing text color logic (unchanged)
  const getTextColor = (bgColor?: string) => {
    if (!bgColor) return primary ? 'white' : '#111827';
    return bgColor.startsWith('#') && parseInt(bgColor.slice(1, 3), 16) > 128 
      ? '#111827' 
      : 'white';
  };

  // Build the style object (add hover styles if needed)
  const buttonStyle = {
    backgroundColor: backgroundColor || 'var(--color-primary-500)',  // Use CSS var instead of hardcoded blue
    color: getTextColor(backgroundColor) || (primary ? 'white' : '#111827'),
    // Add hover effect example (or handle in CSS)
    ':hover': !disabled ? { opacity: 0.8 } : {},
  };
  
  const mode = 'storybook-button--primary';  // Always primary

  const variantClass = variant !== 'default' ? `storybook-button--${variant}` : '';
  const disabledClass = disabled ? 'storybook-button--disabled' : '';
  const classes = ['storybook-button', `storybook-button--${size}`, mode, variantClass, disabledClass].filter(Boolean).join(' ');

  // Render based on variant
  const renderContent = () => {
    switch (variant) {
      case 'text-icon':
        return (
          <>
            {icon && <span className="button-icon">{icon}</span>}
            {label}
          </>
        );
      case 'text-icon-right':  // New variant: icon on the right
        return (
          <>
            {label}
            {icon && <span className="button-icon">{icon}</span>}
          </>
        );
      case 'external-link':
        return (
          <>
            {label}
            <ExternalLink size={16} />  {/* Use the imported icon */}
          </>
        );
      case 'dropdown':
        return (
          <>
            {label}
            <ChevronDown size={16} />  {/* Use the imported icon */}
          </>
        );
      default:
        return label;
    }
  };

  return (
    <button
      type="button"
      className={classes}
      style={buttonStyle}
      disabled={disabled}
      {...props}
    >
      {renderContent()}
    </button>
  );
};