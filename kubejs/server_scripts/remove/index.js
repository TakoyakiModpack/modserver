const removes = [
  "industrialforegoing:infinity_nuke",
  "mekanism:fuelwood_heater",
  "mekanism:resistive_heater", //なんで消すの...?熱源どうするの...?
  "industrialforegoing:ore_laser_base",
  "mekanismgenerators:wind_generator", //これもなぜ消すの？
];
ServerEvents.recipes((event) => {
  removes.forEach((e) => event.remove({ output: e }));
});
