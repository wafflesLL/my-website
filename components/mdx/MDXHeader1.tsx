type Props = React.ComponentProps<"h1">;

export function MDXHeader1({...props }: Props) {
    return(
        <>
            <h1 {...props}/>
            <hr/>
        </>
    );
}