import photo0 from './0.jpg'
import photo1 from './1.jpg'
import photo2 from './2.jpg'
import photo3 from './3.jpg'
import photo4 from './4.jpg'
import {Link} from "react-router-dom";

const Renders = () => {
    return (
        <>
            <Link to={'/projects'}>
                <div className=" font-bold right-1 fixed flex backdrop-blur-sm bg-white/30 w-44 h-10 rounded-3xl pl-3 pt-2 mt-1">
                    PROJECTS
                </div>
            </Link>
            <img src={photo0} alt="ppp"/>
            <img src={photo1} alt="ppp"/>
            <img src={photo2} alt="ppp"/>
            <img src={photo3} alt="ppp"/>
            <img src={photo4} alt="ppp"/>

        </>
    );
};

export default Renders;
