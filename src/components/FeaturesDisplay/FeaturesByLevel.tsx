import { useFragment, graphql } from 'react-relay'
import type { FeaturesByLevelFragment_class_levels$key } from './__generated__/FeaturesByLevelFragment_class_levels.graphql'

type Props = {
  class_level: FeaturesByLevelFragment_class_levels$key
}

function FeaturesByLevel({class_level}: Props) {

  const data = useFragment(
    graphql`
      fragment FeaturesByLevelFragment_class_levels on Level {
        level
      }
    `,
    class_level
  )

  return (
    <div>
      <p>{data?.level}</p>
    </div>
  )
};

export default FeaturesByLevel;
