import classNames from "classnames";

export const Panel = ({children, className, ...rest}) => {
    const finalClassNamed = classNames('border rounded p-3 bg-white shadow w-full', className);

    return <div {...rest} className={finalClassNamed}>{children}</div>
}