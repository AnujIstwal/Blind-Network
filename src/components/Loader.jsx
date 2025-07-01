// components/Loader.jsx
import { HashLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <HashLoader size={50} color="#7c3aed" loading={true} />
        </div>
    );
};

export default Loader;
