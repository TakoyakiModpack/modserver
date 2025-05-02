ServerEvents.recipes((ev) => {
   ev.shapeless(
     "kubejs:compressed_sand",
     new Array(9).fill({ tag: "minecraft:smelts_to_glass" })
   );
   ev.smelting("minecraft:glass", "kubejs:compressed_sand");
 });
