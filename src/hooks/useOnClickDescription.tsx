/* 
    responsible for taking a 'withDescription' object type (a type that has, 
    at minimum, a desc property which is an array of strings and an index 
    which is a string) and returning the functionality to hide or show that 
    information on a click
*/ 

type WithDescription = {
    [key: string]: any,
    [key: number]: any,
    desc: string[],
    index: string,
}

const useOnClickDescription = (withDescription: WithDescription) => {

    const toggleDescription = () => { 
        for (let i = 0; i < withDescription.desc.length; i += 1) {
            const target = document.getElementById(`${withDescription.index}-desc${i}`);
            target && (target.style.display === 'block' 
                ? target.style.display = 'none' 
                : target.style.display = 'block');
        }
    }

    const description = withDescription.desc.map((paragraph, i) => {
        return ( 
            <p 
                style={{display: 'none'}} 
                id={`${withDescription.index}-desc${i}`}
                key={`${withDescription.index}-desc${i}`}
            >
                {paragraph}
            </p>)
    });

    return {
        toggleDescription, 
        description
    }
}

export default useOnClickDescription