type KeyValueProps = {
    keyProp: string;
    value: string;
};

const KeyValue: React.FC<KeyValueProps> = ({ keyProp, value }) => {
    return (
        <div className="grid p-auto grid-template-columns: minmax(150px, 70%) minmax(50px, 30%) border-collapse">
            <dt className="border border-border_dark border-b-0 bg-[hsl(var(--key))] flex items-center p-3">
                {keyProp}
            </dt>
            <dd className="border border-border_dark bg-[hsl(var(--value))] flex items-center p-3 m-0">
                {value}
            </dd>
        </div>
    );
};

export default KeyValue;