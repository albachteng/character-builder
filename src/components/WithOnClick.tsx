const WithOnClick = (Child: (props: any) => JSX.Element, id: string, props: any) => {

    const NewComponent = () => {

        const handleClick = () => {
            const target = document.getElementById(id);
            target && (target.style.display === 'block'
                ? target.style.display = 'none' 
                : target.style.display = 'block'
            );
        }

        return (
            <>
                <Child onClick={handleClick} props={props}>
                    {/* <p onClick={handleClick}>click me!</p> */}
                    <div 
                        id={id} 
                        key={id}
                        style={{display: 'none'}}
                    >
                    </div>
                </Child>
            </>
        )
    }

    return NewComponent;
}

export default WithOnClick;