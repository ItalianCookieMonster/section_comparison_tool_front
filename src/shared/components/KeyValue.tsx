type KeyValueProps = {

    key: string;
    value: string;

};

const KeyValue: React.FC<KeyValueProps> = (keyValueObj) => {
    return (
        <div className="flex items-center">
            <dt className="border-2 border-border border-r-0 bg-[hsl(var(--key))] flex items-center p-3">{keyValueObj.key}</dt>
            <dd className="border-2 border-border bg-[hsl(var(--value))] flex items-center p-3">{keyValueObj.value}</dd>
        </div>
    )
}
export default KeyValue