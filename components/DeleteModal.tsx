import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type Props = {
    isOpen: boolean,
    setIsOpen:(isOpen:boolean) => void,
    handleAction: () => void 
}

const DeleteModal:React.FC<Props> = ({ isOpen, setIsOpen, handleAction }) => {

    if (!isOpen) return null;

    const allDeleteHandler = () => {
        handleAction();
        setIsOpen(false);
    }

    return(
        <div>
            <Modal
                open={isOpen}
                onClose={ () => setIsOpen(false) }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        削除確認
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        全てのデータを削除しようとしています。
                    </Typography>
                    <Button onClick={allDeleteHandler} sx={{ mt: 2, color:'red' }}>
                        全て削除
                    </Button>
                    <Button onClick={() => setIsOpen(false)} sx={{ mt: 2, ml: 2, color:'rgb(203 213 225)' }}>
                        やめる
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}


export default DeleteModal