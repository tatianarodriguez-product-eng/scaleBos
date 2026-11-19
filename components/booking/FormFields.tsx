import type { ChangeEvent } from 'react';
import { SelectChevronIcon } from '@/components/ui/UiIcons';
import type { LeadField } from '@/lib/lead-form';

export const FIELD_ERROR_CLASS = 'mt-1.5 text-small font-semibold text-danger';
const LABEL_CLASS = 'mb-1.5 block text-small font-semibold tracking-[0.015rem] text-muted';
const INPUT_BASE_CLASS =
  'h-12 w-full rounded-lg border bg-background px-3.5 text-body placeholder:text-subtle focus:outline-none focus:ring-2 transition-colors';

const borderClass = (error?: string) =>
  error ? 'border-danger focus:ring-danger/40' : 'border-border-soft focus:ring-primary/40';
const errorId = (id: LeadField) => `${id}-error`;

interface FieldProps {
  id: LeadField;
  label: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function FieldError({ id, error }: { id: LeadField; error?: string }) {
  return error ? <p id={errorId(id)} className={FIELD_ERROR_CLASS}>{error}</p> : null;
}

export function TextField({
  id, label, value, error, onChange, type, placeholder,
}: FieldProps & { type: 'text' | 'email'; placeholder: string }) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? errorId(id) : undefined}
        className={`${INPUT_BASE_CLASS} text-foreground ${borderClass(error)}`}
      />
      <FieldError id={id} error={error} />
    </div>
  );
}

export function SelectField({
  id, label, value, error, onChange, placeholder, options,
}: FieldProps & { placeholder: string; options: readonly { value: string; label: string }[] }) {
  // Grey while empty, dark once something is chosen
  const textColor = value ? 'text-foreground' : 'text-subtle';
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>{label}</label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? errorId(id) : undefined}
          className={`${INPUT_BASE_CLASS} appearance-none pr-10 ${textColor} ${borderClass(error)}`}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-muted">
          <SelectChevronIcon className="h-4.5 w-4.5" />
        </span>
      </div>
      <FieldError id={id} error={error} />
    </div>
  );
}
