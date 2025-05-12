import { useNavigate} from "react-router-dom";


function DashBoard () {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/"); //redirects to the homepage
    }

    return (
        <div>
            <h1>DashBoard</h1>
            <button onClick={goToHome}>Go Home</button>
        </div>
    )
}

export default DashBoard;