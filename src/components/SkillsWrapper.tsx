type Props = {
    QueryMap: React.Component
}

const SkillsWrapper = ({QueryMaps}: Props) => {

    return () => {
        return (
            <>
                {...QueryMaps}
            </>
        )
    } 

}

export default SkillsWrapper;