
type Props = React.ComponentProps<"a">;

export function MDXAnchor({ href = "", ...props }): Props{
    const common = { target: "_blank", rel: "noopener noreferrer" };


    return <a href={href} {...common} {...props}/>
}