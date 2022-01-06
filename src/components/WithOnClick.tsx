const withOnClick = (Child: (props: any) => JSX.Element) => ({...props}) => {

    const handleClick = () => {
        const target = document.getElementById(props.id);
        target && (target.style.display === 'block'
            ? target.style.display = 'none' 
            : target.style.display = 'block'
        );
    }

    return (
        <>
            <p onClick={handleClick}>click me!</p>
            <div 
                id={props.id} 
                key={props.id}
                style={{display: 'none'}}
            >
                <Child {...props} />
            </div>
        </>
    )
}

export default withOnClick;