ServerEvents.recipes(event => {
    event.custom({
    "type": "mekanism:evaporating",
    "input": {
      "amount": 1,
      "fluid": "mekanism:sodium"
    },
    "output": {
      "amount": 1,
      "fluid": "mekanism:superheated_sodium"
    }
  })
})