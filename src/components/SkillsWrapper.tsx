type Props = {
    QueryMap: React.Component[]
}

const SkillsWrapper = ({QueryMap}: Props) => {

    return () => {
        return (
            <>
                {...QueryMap}
            </>
        )
    } 

}

export default SkillsWrapper;