import useOnClickDescription from '../../hooks/useOnClickDescription';
import { Feature as FeatureType } from '../../types';

type Props = {
  feature: FeatureType;
};

const originFromTypename: { [k: string]: string } = {
  Feature: 'Class Feature',
  Trait: 'Racial Trait',
  BackgroundFeature: 'Background Feature'
};

const Feature = ({ feature }: Props) => {

  const { description, toggleDescription } = useOnClickDescription<FeatureType>(feature);

  return (
    <div>
      <p onClick={toggleDescription}>
        {feature?.name}
        {feature?.level && `, Level ${feature?.level}`}
        {feature?.__typename &&
          ` | From: ${originFromTypename[feature?.__typename]}`}
      </p>
      {description}
    </div>
  );
};

export default Feature;
