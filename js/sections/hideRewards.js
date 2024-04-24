const hideReward = () => {
        const popup = document.querySelector('.needsclick');
        const reward = document.querySelector('#smile-ui-lite-container');
        const chatIcon = document.querySelector('#gorgias-chat-container');
        const cookies = document.querySelector('#pandectes-banner');

        const visibilityProps = [reward, chatIcon, cookies].filter(Boolean);

        const isPopupClosed = popup ? popup.classList.contains('undefined') : false;
        if (!popup || isPopupClosed) {
            visibilityProps.forEach((e) => {
                e.style.opacity = '1';
            });
        } else {
            visibilityProps.forEach((e) => {
                e.style.opacity = '0';
            });
        }
   };

export default () => {
    const interval = setInterval(() => {
        hideReward();
    }, 1000);
};
