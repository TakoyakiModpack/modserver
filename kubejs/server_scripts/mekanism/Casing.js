ServerEvents.recipes(event => {
   // event.recipes.mekanism.combining("create:copper_casing", "minecraft:copper_ingot", "forge:stripped_logs")
   event.custom({
    "type": "mekanism:combining",
    "extraInput": {
      "ingredient": {
        "tag": "forge:stripped_logs"
      }
    },
    "mainInput": {
      "ingredient": {
        "item": "minecraft:copper_ingot"
      }
    },
    "output": {
      "item": "create:copper_casing"
    }
  })
  event.custom({
    "type": "mekanism:combining",
    "extraInput": {
      "ingredient": {
        "tag": "forge:stripped_logs"
      }
    },
    "mainInput": {
      "ingredient": {
        "item": "create:andesite_alloy"
      }
    },
    "output": {
      "item": "create:andesite_casing"
    }
  })
  event.custom({
    "type": "mekanism:combining",
    "extraInput": {
      "ingredient": {
        "tag": "forge:stripped_logs"
      }
    },
    "mainInput": {
      "ingredient": {
        "item": "create:brass_ingot"
      }
    },
    "output": {
      "item": "create:brass_casing"
    }
  })
  event.custom({
    "type": "mekanism:combining",
    "extraInput": {
      "ingredient": {
        "tag": "forge:plates/obsidian"
      }
    },
    "mainInput": {
      "ingredient": {
        "item": "create:brass_casing"
      }
    },
    "output": {
      "item": "create:railway_casing"
    }
  })
  event.custom({
    "type": "mekanism:combining",
    "extraInput": {
      "ingredient": {
        "item": "minecraft:obsidian"
      }
    },
    "mainInput": {
      "ingredient": {
        "item": "createutilities:void_steel_ingot"
      }
    },
    "output": {
      "item": "createutilities:void_casing"
    }
  })
})