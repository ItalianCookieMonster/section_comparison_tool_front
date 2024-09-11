import KeyValue from "./KeyValue";

type KeyValueListProps = {
    keyValueList: {
        key: string;
        value: string;
    }[];
};

const KeyValueList: React.FC<KeyValueListProps> = ({ keyValueList }) => {
    return (
        <div>
            {keyValueList.map((keyValueObj) => (
                <KeyValue keyValueObj={keyValueObj} key={keyValueObj.key} />
            ))}
        </div>
    );
};

export default KeyValueList;