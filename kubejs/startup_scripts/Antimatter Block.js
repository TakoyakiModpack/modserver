StartupEvents.registry("block", (ev) => {
  ev.create("antimatter_block")
    .textureAll("kubejs:block/antimatter")
    .requiresTool(false)
    .soundType('stone')
});