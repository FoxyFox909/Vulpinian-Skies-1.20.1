BlockEvents.broken("vulpinian_skies:throne_block", event => {
    if (event.player.isCreative()) {
        // return;
    }
    Utils.server.runCommandSilent("gamerule showDeathMessages false")
    event.player.kill()
    Utils.server.tell(`${event.player.name.getString()} attempted to desecrate the Throne.`)
    Utils.server.runCommandSilent("gamerule showDeathMessages true")
    event.cancel()
});