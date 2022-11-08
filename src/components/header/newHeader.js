import './header.css'

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Button from "@mui/material/Button";

const NewHeader = () => {
  return (
        <div className="header">
            <div className="balance">
                <div className="balanceH">היתרה שלי</div>
                <div className="balanceAmount">1200₪</div>
            </div>
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
    )
}

export default NewHeader