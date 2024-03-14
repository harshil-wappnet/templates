import { useState } from 'react';

function useAdditionalSidebar(initialState = false) {
    const [showAdditionalSidebar, setShowAdditionalSidebar] = useState(initialState);

    const toggleAdditionalSidebar = () => {
        setShowAdditionalSidebar(!showAdditionalSidebar);
    };

    return [showAdditionalSidebar, toggleAdditionalSidebar];
}

export default useAdditionalSidebar;