type KeyValueProps = {
    keyProp: string;
    value: string;
};

const KeyValue = ({ keyProp, value } : KeyValueProps) => {
    return (
        <div className="flex border border-border_dark w-full">
            <dt className="flex-grow-[7] flex-shrink-0 min-w-[150px] flex items-center p-3 border-r bg-[hsl(var(--key))]">
                {keyProp}
            </dt>
            <dd className="flex-grow-[3] flex-shrink-0 min-w-[50px] flex items-center p-3 bg-[hsl(var(--value))]">
                {value}
            </dd>
        </div>
    );
};

export default KeyValue;