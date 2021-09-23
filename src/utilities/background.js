/**
 * Bg colors.
 */
export const getBgColor = () => {
    const bgColors = ['yellow', 'red', 'blue', 'green', 'indigo', 'purple', 'pink'];
    return bgColors[Math.floor(Math.random() * bgColors.length)];
};

export const getBgGradientClass = (bgColor, dir = 'r') => {
    return `bg-gradient-to-${dir} from-${bgColor}-300 to-white dark:from-${bgColor}-500 dark:to-black`;
};
