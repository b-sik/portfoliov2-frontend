/**
 * Bg colors.
 */
export const getBgColor = () => {
    const bgColors = ['yellow', 'red', 'blue', 'green', 'indigo', 'purple', 'pink'];
    const color = bgColors[Math.floor(Math.random() * bgColors.length)];

    return color;
};

export const getBgGradientClass = (bgColor, dir = 'r') => {
    return `bg-gradient-to-${dir} from-${bgColor}-300 to-white dark:from-${bgColor}-500 dark:to-black`;
};
