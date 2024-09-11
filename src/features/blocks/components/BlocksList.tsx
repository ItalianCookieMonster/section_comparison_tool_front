import KeyValueList from "../../../shared/components/KeyValueList";
import { Block } from "../types/types";

const BlocksList = ({ blocks, onBlockClick }: { blocks: Block[], onBlockClick: (id: number) => void }) => {
    return (
        <section className="grid grid-cols-3 gap-4 items-center justify-strech w-[80vw] my-10">
            {
                blocks.map((block, index) => (
                    <div key={index} onClick={() => onBlockClick(block.id)}> 
                        <KeyValueList keyValueObject={block} />
                    </div>
                ))
            }
        </section>
    );
};

export default BlocksList;