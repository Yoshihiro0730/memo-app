import Link from "next/link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
import Button from "./Button";
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';

type Props = {
    id: number,
    importance: number,
    title: string,
    context:string,
    onComplete: (id: number) => void
}

const ListItem = (props:Props) => {
    const handleComplete = () => {
        props.onComplete(props.id);
    }
    return(
        <Card className="m-4" sx={{width: 1}}>
            <CardContent className="flex flex-col">
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {props.importance === 1 ? (
                        <KeyboardDoubleArrowUpOutlinedIcon sx={{color:"#e91e63"}} />
                    ) : props.importance === 2 ? (
                        <KeyboardDoubleArrowRightOutlinedIcon sx={{color:"#000"}} />
                    ) : props.importance === 3 ? (
                        <KeyboardDoubleArrowDownOutlinedIcon sx={{color:"#2196f3"}} />
                    ) : (
                        <HorizontalRuleOutlinedIcon />
                    )
                    }  
                    <Typography variant="h5" component="div" sx={{ ml: 1 }}>
                        {props.title}
                    </Typography>
                    <Button onClick={handleComplete}>
                        完了
                    </Button>
                </Box>
                <Typography variant="body2" color="text.secondary"  sx={{ ml: 4 }}>
                    {props.context}
                </Typography>

                
            </CardContent>
        </Card>
    )
}

export default ListItem