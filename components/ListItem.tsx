import Link from "next/link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';

type Props = {
    importance: number,
    title: string
}

const ListItem = (props:Props) => {
    return(
        <Card className="m-4" sx={{width: 1}}>
            <CardContent className="flex">
                <Typography className="mt-auto mb-auto" gutterBottom  component="div">
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
                </Typography>
                <Typography className="mt-auto mb-auto ml-4" variant="h5" component="div">
                    {props.title}
                </Typography>
                
            </CardContent>
        </Card>
    )
}

export default ListItem