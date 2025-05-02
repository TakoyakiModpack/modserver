StartupEvents.registry("block", (ev) => {
   ev.create("compressed_sand", "basic")
     .textureAll("kubejs:block/sand9")
     .requiresTool(false)
     .sandSoundType()
     .tagBlock("minecraft:mineable/shovel");
 });
