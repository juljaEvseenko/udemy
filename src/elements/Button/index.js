import cx from 'classnames';

export const Button = ({ className, children, outline, rounded, warning, plain, secondary, primary, success, ...rest }) => {

    const buttonStyle = cx('p-5 border ', [{
        [className] : className,
        'rounded-2xl': rounded,
        'bg-transparent text-black': outline,
        'border-blue-500 bg-blue-500 text-white': plain,
        'border-black-500 bg-black-500 text-white': secondary,
        'border-gray-500 bg-gray-500 text-white': primary,
        'border-green-500 bg-green-500 text-white': success,
        'border-red-500 bg-red-500 text-white': warning,

    }])
    return <button className={buttonStyle} {...rest}>{children}</button>
};

Button.propTypes = {
    checkVariationOfParams: (props) => {
        const sum = +!!props.warning + 
        +!!props.success + 
        +!!props.primary+ 
        +!!props.secondary+ 
        +!!props.plain;

        if(sum > 1) {
            return  new Error('Must be one of warning, success, primary, secondary, plain')
        }
    },
}