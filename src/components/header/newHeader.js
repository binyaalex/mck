import './header.css'

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png"
import MenuIcon from "@mui/icons-material/Menu";
import TollIcon from '@mui/icons-material/Toll';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import InfoIcon from '@mui/icons-material/Info';
const NewHeader = () => {
    return (
        <div className="header">
            <div className="top">
                <div className='burger'>
                    <MenuIcon
                        fontSize="large"
                        sx={{ color: 'var(--secondary)' }}
                    />
                </div>

                <img src={logo} />
                <div className='burger'>
                    <SearchOutlinedIcon
                        fontSize="large"
                        sx={{ color: 'var(--secondary)' }}
                    />
                </div>

            </div>
            <div className="bottom">
                <div className="par">
                    <div className="balanceH">מטבעות שוק</div>
                    <div className="balanceAmount">
                        1200
                        <TollIcon sx={{ color: 'var(--primary)' }}
                        />
                    </div>
                </div>


                <div className='collect'>
                    <InfoIcon />
                    <span>איך לצבור</span>
                    <TollIcon
                        fontSize="small"
                        sx={{ color: 'var(--primary)' }}
                    />

                    {/* <KeyboardArrowLeftIcon */}
                    {/* sx={{ color: 'var(--primary)' }} */}
                    {/* /> */}
                </div>
                <div className="notificationBlock">
                    <Button className="dropBtn">
                        <NotificationsNoneIcon />
                        <span className="subCount">3</span>
                    </Button>
                </div>
                {/* <form className="search-container active-search">
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
                    </form> */}

                {/* </div> */}
            </div>
        </div>
    )
}

export default NewHeader