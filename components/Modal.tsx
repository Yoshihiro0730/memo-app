import React, { useState } from 'react';
import { Box } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import Button from './Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const TextField = dynamic(() => import('@mui/material/TextField'), { ssr: false });

const ITEM_PREFIX = 'memo_item_';

interface ResistItem {
    id: number,
    priority: number,
    title: string,
    context: string
}

type Props = {
    isOpen: boolean,
    setIsModalOpen:() => void
}

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        }
    }
})

const Modal:React.FC<Props> = ({ isOpen, setIsModalOpen}) => {
    const [priority, setPriority] = useState<number>(1);
    const [title, setTitle] = useState<string>('');
    const [context, setContext] = useState<string>('');

    if (!isOpen) return null;
    
    const handlePriority = (event: SelectChangeEvent<number>) => {
        setPriority(Number(event.target.value));
    };

    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContext = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContext(event.target.value);
    };

    const saveHandler = () => {
        const lastId = parseInt(localStorage.getItem('lastId') || '0');
        const newId = lastId + 1;
        const newItem: ResistItem = { id: newId, priority, title, context };
        localStorage.setItem(`${ITEM_PREFIX}${newId}`, JSON.stringify(newItem));
        localStorage.setItem('lastId', newId.toString());
        alert(`ID: ${newId}, 優先度: ${priority}, タイトル: ${title} が保存されました`);
        resetModalForm();
    };

    const resetModalForm = () => {
        setPriority(1);
        setTitle('');
        setContext('');
        setIsModalOpen();
    }

    return (
        <ThemeProvider theme={theme}>
            <div className='w-full h-screen fixed z-1 top-0 left-0 flex justify-center justify-items-center' style={{backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
                <Box sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    m: 'auto',
                    p: 4,
                    width: '75%',
                    height: '75%',
                    position: 'relative'
                }}>
                    <div className='w-full' >
                        <h1 className='w-full text-3xl border-b'>メモを作成</h1>
                        <div className=''>
                            <h2 className='text-xl mt-4'>タイトル</h2>
                            <TextField fullWidth variant="outlined" margin="normal" placeholder='文字を入力' value={title} onChange={handleTitle} />
                        </div>
                        <div className=''>
                            <h2 className='text-xl mt-4'>優先度</h2>
                            <FormControl fullWidth>
                                <InputLabel id="priority-label">優先度</InputLabel>
                                <Select
                                    labelId="priority-label"
                                    id="priority-label"
                                    value={priority}
                                    label="優先度"
                                    onChange={handlePriority}
                                >
                                <MenuItem value={1}>高</MenuItem>
                                <MenuItem value={2}>中</MenuItem>
                                <MenuItem value={3}>低</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className=''>
                            <h2 className='text-xl mt-4'>概要</h2>
                            <TextField fullWidth variant="outlined" margin="normal" placeholder='文字を入力' multiline rows={4} value={context} onChange={handleContext} />
                        </div>
                        <div className='flex justify-between'>
                            <Button onClick={resetModalForm} style={{backgroundColor: 'rgb(203 213 225)'}}>Close</Button>
                            <Button onClick={saveHandler}>Submit</Button>
                        </div>
                    </div>
                </Box>
            </div>
        </ThemeProvider>
    )
}

export default Modal
