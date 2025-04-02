import {useState} from 'react';
import ReviewButton from "./reviewFiles/ReviewButton.tsx";
import ReviewPopUp from "./reviewFiles/ReviewPopUp.tsx";
import Form1 from "./form1.tsx";
function Review(){
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleClick = () => {
        setIsPopupOpen(true);
    }
    const handleClose = () => {
        setIsPopupOpen(false);
    }
    return (
        <div>
            <ReviewButton onClick={handleClick} variant={'primary'} disabled={false}>Write your own
            </ReviewButton>
            <ReviewPopUp isOpen={isPopupOpen} onClose={handleClose} title={"Review"}>
                <form>
                    <Form1></Form1>
                </form>
            </ReviewPopUp>
        </div>
    );
}
export default Review;