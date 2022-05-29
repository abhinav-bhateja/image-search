import {createContext, useContext, useState} from "react";
import axios from "axios";

const ApiContext = createContext();

const useApi = () => {
    return useContext(ApiContext);
};

function provideData() {
    const [data, setData] = useState([]);
    const [item, setItem] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const getData = async () => {
        const response = await axios.get("https://picsum.photos/v2/list");
        setData(response.data);
    };

    const getItem = async (id) => {
        const response = await axios.get(`https://picsum.photos/id/${id}/info`);
        setItem(response.data);
    };

    const openSidebar = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return {
        data,
        getData,
        item,
        getItem,
        isOpen,
        openSidebar,
        closeSidebar
    };
}

export const ApiProvider = ({children}) => {
    const api = provideData();
    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    );
};

export default useApi;