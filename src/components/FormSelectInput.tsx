// import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
// import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select';
// import { SelectItem } from '@radix-ui/react-select';

// interface FormSelectInputProps {
//     name: string;
//     label: string;
//     placeholder: string;
//     form: any;
//     options: string[];
//     value?: string;
//     error?: string;
// }

// const FormSelectInput = ({
//     name,
//     form,
//     label,
//     placeholder,
//     options,
// }: FormSelectInputProps) => {
//     return (
//         <FormField
//                     control={form.control}
//                     name="block_name"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Block Name</FormLabel>
//                             <Select  onValueChange={field.onChange} value={field.value}>
//                                 <FormControl>
//                                     <SelectTrigger>
//                                         { field.value || placeholder }
//                                     </SelectTrigger>
//                                 </FormControl>
//                                 <SelectContent>
//                                     <SelectItem value="block 1">Block 1</SelectItem>
//                                     <SelectItem value="block 2">Block 2</SelectItem>
//                                     <SelectItem value="block 3">Block 3</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//     );
// }

// export default FormSelectInput;