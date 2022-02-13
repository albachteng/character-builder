/* 
    responsible for taking a 'withDescription' object type (a type that has, 
    at minimum, a desc property which is an array of strings and an name 
    which is a string) and returning the functionality to hide or show that 
    information on a click
*/
import { Maybe, Scalars } from '../types';

type WithDescription = {
  [key: string]: any;
  [key: number]: any;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<string> | undefined 
};

const useOnClickDescription = <T extends WithDescription>(
  withDescription?: T,
  name?: string
) => {
  const toggleDescription = () => {
    const length = withDescription?.desc?.length || 0;
    for (let i = 0; i < length; i += 1) {
      const target = document.getElementById(
        `${withDescription?.name || name}-desc${i}`
      );
      target &&
        (target?.style?.display === 'block'
          ? (target.style.display = 'none')
          : (target.style.display = 'block'));
    }
  };

  const description = withDescription?.desc?.map((paragraph, i) => {
    return (
      <p
        style={{ display: 'none' }}
        id={`${withDescription?.name || name}-desc${i}`}
        key={`${withDescription?.name || name}-desc${i}`}
      >
        {paragraph}
      </p>
    );
  });

  return {
    toggleDescription,
    description
  };
};

export default useOnClickDescription;
