import KeyValue from "./KeyValue";

type KeyValueListProps = {
    keyValueList: {
        key: string;
        value: string;
    }[];
};

const KeyValueList: React.FC<KeyValueListProps> = ({ keyValueList }) => {
    return (
        <>
            {keyValueList.map(({ key, value }) => (
                <KeyValue key={key} keyProp={key} value={value} />
            ))}
        </>
    );
};

export default KeyValueList;