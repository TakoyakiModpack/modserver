const upgradeables = {
  "mekanism:metallurgic_infuser": "mekanism:ultimate_infusing_factory",
};
ServerEvents.recipes((event) => {
  for (const base in upgradeables) {
    const upgrated = upgradeables[base];
    event.shapeless(upgrated, [
      "mekanism:basic_tier_installer",
      "mekanism:advanced_tier_installer",
      "mekanism:elite_tier_installer",
      "mekanism:ultimate_tier_installer",
      base,
    ]);
  }
});
