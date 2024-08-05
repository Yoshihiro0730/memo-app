import Link from "next/link";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';

type Props = {
    backlog: string,
    activeItem: string
}

const Sidenav = (props: Props) => {
    return (
        <div className="w-full h-screen flex-col" style={{backgroundColor:"#f4f5f7"}}>
            <BorderColorOutlinedIcon className="m-2" sx={{ width: 40, height: 40 }} />
            <div className="flex m-2">
                <ListAltOutlinedIcon className="mt-2" />
                <p className="w-full m-2">{props.backlog}</p>
            </div>
            <div className="flex m-2">
                <SpaceDashboardOutlinedIcon className="mt-2" />
                <p className="w-full m-2">{props.activeItem}</p>   
            </div>
        </div>
    )

}

export default Sidenav 