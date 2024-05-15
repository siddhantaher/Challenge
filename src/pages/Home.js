import { Button } from '@mui/material';
import CommingSoon from '../coming-soon-text-abstract-sunrise-dark-background-with-motion-effect_157027-1073.jpg'; // Import the image file
import signUp from "../Lets-go.jpeg"
import "../style.css"


export default function home() {
    return <div>

        <div className="image-container">
            {/* <div className="banner">
                <div class="container-signup">
                    <img src={signUp} alt="Snow">
                    </img>
                    <button class="btn">Button</button>
                </div>


            </div> */}
            <img src={CommingSoon} alt="Comming Soon" className="center-image">
            </img>
        </div>
    </div>
}