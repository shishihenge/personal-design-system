import './input.css';
import { Search } from 'lucide-react';

export interface InputProps {
  /** Label text for the input */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** State of the input */
  state?: 'default' | 'readonly' | 'disabled' | 'error' | 'warning' | 'focus';
  /** Variant: with or without icon */
  variant?: 'default' | 'left-icon';
  /** Optional icon for left-icon variant (default: Search) */
  icon?: React.ReactNode;
  /** Error/Warning message */
  message?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  placeholder,
  value,
  state = 'default',
  variant = 'default',
  icon = <Search size={16} />,
  message,
  onChange,
  onFocus,
  onBlur,
}: InputProps) => {
  const isReadonly = state === 'readonly';
  const isDisabled = state === 'disabled';

  const classes = [
    'input-wrapper',
    `input-wrapper--${variant}`,
    `input-wrapper--${state}`,
  ].join(' ');

  return (
    <div className={classes}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        {variant === 'left-icon' && (
          <span className="input-icon input-icon--left">{icon}</span>
        )}
        <input
          type="text"
          className="input-field"
          placeholder={placeholder}
          value={value}
          readOnly={isReadonly}
          disabled={isDisabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      {message && (
        <span className={`input-message input-message--${state}`}>
          {message}
        </span>
      )}
    </div>
  );
};