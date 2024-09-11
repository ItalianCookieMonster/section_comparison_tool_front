import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createBlock, deleteBlock, getAllBlocks, getBockDetail, updateBlock } from "../services/blocksService"
import BlocksList from "./BlocksList"
import KeyValueList from "../../../shared/components/KeyValueList"
import { Button } from "../../../ui/button"
import { Block, BlockUpdate } from "../types/types"
import { Pencil, Trash2 } from "lucide-react"
import BlockForm from "./BlockForm"
import Modal from "../../../shared/components/Modal"

const BlocksView = () => {
    const queryClient = useQueryClient();
    const [selectedBlockId, setSelectedBlockId] = useState<number | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [showFormCreate, setShowFormCreate] = useState(false);
    const [modalData, setModalData] = useState(
        {
            open: false,
            title: "",
            message: "",
            borderColor: "",
        }
    );

    const { data: blocks, isError: isBlocksError, isLoading: isBlocksLoading, error: blocksError } = useQuery({
        queryKey: ['blocks'],
        queryFn: () => getAllBlocks(),
    })

    const { data: blockDetail, isError: isBlockError, isLoading: isBlockLoading, error: blockError } = useQuery({
        queryKey: ['block', selectedBlockId],
        queryFn: () => getBockDetail(selectedBlockId ? selectedBlockId : 0),
        enabled: !!selectedBlockId,
    });

    const handleBlockClick = (id: number) => {
        setSelectedBlockId(id);
    }

    const handleOnChangeModal = () => {
        setModalData({ ...modalData, open: false })
        setShowForm(false);
        setShowFormCreate(false);
    }

    const handleDeleteBlock = (id: number) => {
        setModalData({ ...modalData, open: true, title: "Delete Block", message: "Are you sure you want to delete this block?", borderColor: "border-destructive" });

        deleteBlockMutation.mutate(id);
    }

    const updateBlockMutation = useMutation({
        mutationKey: ['block'],
        mutationFn: (block: BlockUpdate) => updateBlock(block),
        onSuccess: () => {
            setModalData({ ...modalData, open: true, title: "Block Updated", message: "Block has been updated successfully.", borderColor: "border-accent" });
            queryClient.invalidateQueries(['blocks']);
            queryClient.invalidateQueries(['block', blockDetail.id]);
        },
        onError: (error) => {
            console.error("Error getting block detail:", error);
            setModalData({ ...modalData, open: true, title: "Error", message: "An error occurred while updating the block.", borderColor: "border-error" });
        }
    });

    const deleteBlockMutation = useMutation({
        mutationKey: ['block'],
        mutationFn: (id: number) => deleteBlock(blockDetail.id),
        onSuccess: () => {
            setModalData({ ...modalData, open: true, title: "Block Deleted", message: "Block has been deleted successfully.", borderColor: "border-destructive" });
            queryClient.invalidateQueries(['blocks']);
        },
        onError: (error) => {
            console.error("Error getting block detail:", error);
            setModalData({ ...modalData, open: true, title: "Error", message: "An error occurred while deleting the block.", borderColor: "border-error" });

        }
    });


    const createBlockMutation = useMutation({
        mutationKey: ['block'],
        mutationFn: (newBlock: Block) => createBlock(newBlock),
        onSuccess: () => {
            setModalData({ ...modalData, open: true, title: "Block Created", message: "Block has been created successfully.", borderColor: "border-success" });
            queryClient.invalidateQueries(['blocks']);

        },
        onError: (error) => {
            console.error("Error getting block detail:", error);
            setModalData({ ...modalData, open: true, title: "Error", message: "An error occurred while creating the block.", borderColor: "border-error" });
        }
    });



    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-5xl font-bold">Block Manager</h1>
            {isBlocksLoading && <div>Loading...</div>}
            {isBlocksError && <div>Error: {blocksError}</div>}

            {blocks && <BlocksList blocks={blocks} onBlockClick={handleBlockClick} />}
            <section className="my-10">
                <h2 className="text-4xl font-bold">Block Details</h2>

                {isBlockLoading && <div>Loading...</div>}
                {isBlockError && <div>Error: {blockError}</div>}
                <div className="flex justify-end w-full gap-2 my-6">
                    <Button onClick={() => setShowFormCreate(!showFormCreate)} >
                        Create Block
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDeleteBlock(blockDetail.id)}
                        className="text-destructive hover:bg-destructive hover:text-destructive-foreground">
                        <Trash2 />
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setShowForm(!showForm)}
                        className="text-warning hover:bg-warning hover:text-warning-foreground">
                        <Pencil />
                    </Button>
                </div>
                {!showForm && blockDetail && !showFormCreate && <div className="grid grid-cols-4 gap-1 items-stretch">
                <KeyValueList keyValueObject={blockDetail}/> </div>}

                {showForm && blockDetail ? (
                    <BlockForm blockDetail={blockDetail} onSubmit={updateBlockMutation.mutateAsync} />
                ) : showFormCreate ? (
                    <BlockForm onSubmit={createBlockMutation.mutateAsync} />
                ) : null}
            </section>


            <Modal
                open={modalData.open}
                title={modalData.title}
                message={modalData.message}
                border_color={modalData.borderColor}
                onOpenChange={handleOnChangeModal}

            />


        </div>
    )
}
export default BlocksView