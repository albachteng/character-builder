
function SpellMod() {

}

  const spellModMapFunc: MappingFunc<ClassSpellcastingSpellcasting_Ability> = (item, index, _) => {
    if (item?.name) {
      return (
        <p key={`${makeUniqueId('spellmod')}${index}`}>
          {item?.name}
          :
          {dice.mod(characterStats[item?.name as AbilityScoreName])}
        </p>
      );
    }
  };

export default SpellMod;
