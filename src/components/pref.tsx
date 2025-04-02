import {useState} from 'react';
import Form2 from "./form2.tsx";
import PreferenceButton from "./reviewFiles/PreferenceButton.tsx";
import PreferencePopUp from "./reviewFiles/PreferencePopUp.tsx";
function Pref(){
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleClick = () => {
        setIsPopupOpen(true);
    }
    const handleClose = () => {
        setIsPopupOpen(false);
    }
    return (
        <div>
            <PreferenceButton onClick={handleClick} variant={'primary'} disabled={false}>Game Preference Survey
            </PreferenceButton>
            <PreferencePopUp isOpen={isPopupOpen} onClose={handleClose} title={"Questions:"}>
                <form>
                    <Form2></Form2>
                </form>
            </PreferencePopUp>
        </div>
    );
}
export default Pref;