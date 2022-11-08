import './header.css'

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.jpg"
import MenuIcon from "@mui/icons-material/Menu";
import TollIcon from '@mui/icons-material/Toll';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const NewHeader = () => {
    return (
        <div className="header">
            <div className="top">
                <div className='burger'>
                    <MenuIcon
                        fontSize="large"
                        sx={{ color: 'var(--primary)' }}
                    />
                </div>

                <img src={logo} />
                <div className="balance">
                    <div className="balanceH">היתרה שלי</div>
                    <div className="balanceAmount">
                        1200
                        <TollIcon sx={{ color: 'white' }}
                        />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="right">

                    <form className="search-container active-search">
                        <div className="search-container__btn">
                            <SearchOutlinedIcon />
                        </div>
                        <input
                            type="text"
                            id="search-bar"
                            className="search-container__input"
                        // onChange={(e) => setSearchText(e.target.value)}
                        // onClick={openSearch}
                        // value={searchText}
                        />
                        <div className="mic-container__btn">
                            <MicIcon />
                        </div>
                    </form>
                    <div className="notificationBlock">
                        <Button className="dropBtn">
                            <NotificationsNoneIcon />
                            <span className="subCount">3</span>
                        </Button>
                    </div>
                </div>
                {/* <div className='coins_container'> */}
                <div className='coins'>
                    איך לצבור
                    <TollIcon
                        fontSize="small"
                        sx={{ color: 'var(--primary)', margin: "1%" }}
                    />

                    <KeyboardArrowLeftIcon
                        sx={{ color: 'var(--primary)' }}
                    />
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default NewHeader