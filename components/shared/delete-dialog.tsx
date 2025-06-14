'use client';

import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const DeleteDialog = ({id, action}: {id: string, action: (id: string) => Promise<{ success: boolean; message: string }>;}) => {
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    // Handle delete order button click
    const handleDeleteClick = () => {
        startTransition(async () => {
            const res = await action(id);
            if (!res.success) {
                toast("",{
                    // variant: 'destructive',
                    description: res.message,
                });
            } else {
                setOpen(false);
                toast("",{
                    description: res.message,
                });
            }
        });
    };

    return (
        
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
            <Button size='sm' variant='destructive' className="bg-red-600 text-white border-red-600 ml-2">
                Delete
            </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                This action cannot be undone.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button onClick={handleDeleteClick} variant='destructive' size='sm' disabled={isPending} className="bg-red-600 border-red-600 ml-2">
                    {isPending ? 'Deleting...' : 'Delete'}
                </Button>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
 
export default DeleteDialog;