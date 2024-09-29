import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { FieldValues, UseFormRegisterReturn } from 'react-hook-form';

interface FormInputFieldProps {
    label: string;
    name: keyof FieldValues;
    placeholder: string;
    field: UseFormRegisterReturn;
    error?: string;
    type?: string;
    customStyle?: string;
}

export const FormInputField: React.FC<FormInputFieldProps> = ({
    label,
    placeholder,
    field,
    error,
    type = 'text',
    customStyle
}) => {
    return (
        <FormItem className={`space-y-0 mt-0 mb-0 w-[25vw] ${customStyle}`}>
            <FormLabel className='leading-9'>{label}</FormLabel>
            <FormControl>
                <Input placeholder={placeholder} {...field} type={type} className="hover:border-primary" />
            </FormControl>
            {error && <FormDescription className="text-destructive">{error}</FormDescription>}
            <FormMessage />
        </FormItem>
    );
};