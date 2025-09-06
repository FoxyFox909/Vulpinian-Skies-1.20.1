ItemEvents.tooltip(event => {
    event.addAdvanced("splendid_slimes:slime_heart", (item, advanced, text) => {
        text.remove(1); // Remove "Place in incubator" line.
        if (!event.shift) {
        text.add([Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for summary.').darkGray()])
        } else {
            text.add(Text.of("Manually mix with Shrinking Serum, and then inject the resulting serum to a Flesh Blob to create a slime.").lightPurple())            
        }
    });

    event.addAdvanced("splendid_slimes:slime_item", (item, advanced, text) => {
        text.remove(1); // Remove "Place in incubator" line.
        if (!event.shift) {
        text.add([Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for summary.').darkGray()])
        } else {
            const slimeRecord = global["getPlayerSlimeRecord"](Client.player.uuid);
            text.add(Text.of(`You have ${slimeRecord.CurrentSlimeCount}/${slimeRecord.MaxSlimeCount} slimes active in the world.`).gold());

            // if (slimeRecord.CurrentSlimeCount >= slimeRecord.MaxSlimeCount) {
              // text.add(Text.of("\nYou can increase maximum slime capacity by leveling up skills.").gold());
            // }
            text.add(Text.of("\nYou can increase maximum slime capacity by leveling up skills.").gold());
            
            text.add(Text.of("\nUse Slime Hearts, Shrinking Serum, and a Bio-Injector to create slimes.").gold());
        }
    });

    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    if (event.alt && item.nbt) {
      text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
    }
  })
});