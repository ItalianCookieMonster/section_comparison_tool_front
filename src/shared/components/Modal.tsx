import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../../ui/dialog"

type ModalProps = {
    title: string
    message: string
    border_color: string
    open: boolean
    onOpenChange: (open: boolean) => void
}



const Modal = ({ title, message, border_color, open, onOpenChange }: ModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className={`${border_color} border-2`}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {message}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
export default Modal