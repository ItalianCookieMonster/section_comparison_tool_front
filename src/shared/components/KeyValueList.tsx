import KeyValue from "./KeyValue";
import { Project, Section, Block } from "../../features/dashboard/types/types";

interface KeyValueListProps {
    keyValueObject: Project | Section | Block;
}

const KeyValueList = ({ keyValueObject }: KeyValueListProps) => {
    return (
        <div className="w-full max-w-full">
            {keyValueObject && Object.entries(keyValueObject).map(([key, value]) => (
                <KeyValue key={key} keyProp={key} value={String(value)} />
            ))}
        </div>
    );
};

export default KeyValueList;