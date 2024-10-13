type KeyValueProps = {
    keyProp: string;
    value: string | null | undefined;
    icon?: React.ReactNode;  
};

const KeyValue = ({ keyProp, value, icon }: KeyValueProps) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg border border-gray-200 my-2">
            <div className="flex items-center space-x-3">
                {icon && <div className="text-primary">{icon}</div>} 
                <dt className="font-semibold text-lg text-gray-700">{keyProp}</dt>
            </div>
            <dd className="text-gray-600 text-md">{value}</dd>
        </div>
    );
};

export default KeyValue;