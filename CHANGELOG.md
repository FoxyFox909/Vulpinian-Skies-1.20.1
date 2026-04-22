# 0.0.1b Modpack Initiallized ⚙️🦊⚙️

## Overview 📝

Vulpinian Skies has taken its first steps to being updated to 1.20.1. The decision to port was made after much consideration and analysis.

 Every major content-adding mod, including Create and all of its addons, are at this point caught up to 1.20.1. After performign an extensive "mod audit", the modpack has only lost 7 minor mods that do not have a version in 1.20.1, or a successor mod, or an otherwise obvious replacement.
 
 This version is not playable as it will not boot up. This is more or less just the preliminary modlist. All in all, the Vulpinian Skies modpack remains almost the same, with its essence intact, just updated!
 
  The modpack will now use semantic versioning x.y.z, where z are minor updates/patches, y are major updates, and x will be the legendary number, where once it is 1 as in 1.0.0, the modpack will be considered release-ready. There might additionalyl be letters to provide some extra meaning, such as b for beta.
 
 Anyone who has helped or contributed up to this point, will still receive credit! The Starter Huts that players have made on the server will be migrated to the new version, etc.
 
 ## Mini Blog / Vulpinian Yapping 🗣
 
 The journey begins anew! There is much work to do. I will salvage and reuse everything I can, from all the progress that was made on 1.18.2, but there will still be over 5,000 lines of JavaScript need to be ported to the newer version. However, I am approaching this endeavor not only with renewed motivation and excitement, but also with a lot more experience.
 
 I have iterated on my modpack development workflow so that time can be used more efficiently, and I am also a significantly more experienced programmer today. As such, the most painful thing about rewriting all 5k lines of custom KubeJS scripts will mainly be reading my old, ameteur-ish code... and it being  JavaScript 😭 I will surely make use of this "clean canvas" opoprtunity to make a cleaner, more organized codebase.
 
 I have also taken this chance to reconsider my development philosophy. Polish and attention to detail will still be the name of the game, but I will try and keep the bigger picture in mind, appropriately prioritizing what I work on depending on its impact. As much as I want things to be perfect, a perfect modpack is a modpack that will never be released because it will never be finished.
 
 "Polish, not perfection". All in all, quality will stay the same. Dev time will be more wisely and efficiently spent. The essence of the modpack will remain the same.
 
 One of the techniques I have implemented to help out in the development of this modpack is utilizing "temporary" or "throwaway" git repos that live within actively-developed modpack instances, which are instantiated with a git alias I crated to initializes and configures a repo for the express purpose of letting me know efficiently what configs,scripts, mods I have changed etc and thus need to reflect on the "main instance" when ready to release a new patch. This lessens the cognitive load and allows me to spend more brainpower developing rather than keeping track of things manually.
 
 As far as  1.20.1, among the reasons  why that version was chosen is because I am more or less placing a bet that it will be a better-supported version in the future. What that means is I'm a bit paranoid that by the time Clockwork is in a feature-complete and polished state, there might be a chance that the Clockwork dev team decides to not backport the complete and polished features to 1.18.2 (and I would NOT blame them, because it would be a fairly old version by then, depending on how long Clockwork takes to be developed).
 
 A lot of mods are already abandoning 1.18.2, which in itself has the positive aspect to it that it leads to a more stable modpack dev environment with less breaking changes and updates, but it is NOT good when such an important mod of the modpack remains in an unfinished state.
 
 If the rest of the modpack is polished and complete, except one of its (if not THE) most important mods, then I think we can agree that's a bit of a bruh moment. On the bright side, as stated in the overview above, most mods have caught up to 1.20.1, and there's a couple signals or indicators that tell me that it's warming up to be a decently stable version for modding.  Among those indicators, the whole Forge kerfuffle with Forge being the loader that better supports 1.20.1, and 1.20.1 being the last version before the Crafter is added, which definitely makes modders rethink the balance of things especially for tech mods.
 
 The biggest concern I have right now, is performance, as I have heard 1.20.1 has a performance drop. I will be on the lookout, using profilers such as Spark to measure how the modpack performs across the board. It does seem like some bugs are fixed, and the lighting engine was rewritten to be a lot better, so this gives me some hope!
 
 # 0.0.2b First Bootable Modpack Instance ⚙️🦊⚙️
 
 ## Overview 📝
 
 - The modpack is now able to boot up, and a world can be created and played in!
 
 - Vulpinian Skies has now introduced the groundbreaking mod Sinytra Connector, which allows playing Fabric mods in Forge to great success. This power will be used wisely, with a minimal amount of  small, non-major-content-providing mods. Currently, the only Fabric mod that Connector is powering is Antique Atlas 4 (only way to keep Antique Atlas from 1.18.2).
 
 - In an unfortunate turn of events for dragon lovers, Ice and Fire has been removed from the modpack. The reason is that it was found via profiling to cause heavy lag. The mod might be reconsidered at a later time, if it can be configured in some way to mitigate the lag, but it was already a bit problematic in 1.18.2 in terms of performance, so no promises are made.
 
 - Rubidium has been replaced by Embeddium, which should help more with performance.
 
 - ModernFix was added to the list of performance mods.
 
 The result of testing is that 100+ fps can be steadily reached in my machine, and the modpack loads in about 1 minute 15 seconds (before Modern Fix, it wa about 2 minutes 45 seconds, a significant performance increase),
 
 # 0.0.3b Modlist Enhancement
 
 ## Overview 📝
 
 - The modlist has received some new life, as I have taken the time to peruse all the lovely mods that are now available to us at this point in 1.20.1.
 - There are a number of additions, and a few deletions.
 - The essence of the modpack remains the same, but the modlist should be more refined now.
 
 ## Mod Additions ➕
 
 ### Magic
 
 - Biomancy: A lovely magic mod that fills a niche I didn't know  Vulpinian Skies needed. Very unique and polished.
 
 ### Tech
 
- Create: Metallurgy has been added to fill the void left by the removal of Tinkers Construct. We can still melt and cast metals, and now it's integrated with Create!
- Create: Optical is a lovely mod allowing us to use electromanetic waves, including visible light, to transfer data and small amounts of rotational power in create. Has really nice visuals and goodies inside!
- Create: New Age has been added to allow us to access late game power via thorium-fueled Nuclear Reactors, among other electrical goodies such as beautiful dynamo contraptions to actually generate the power.
- Botarium, a dependency of New Age, has been added.
- Create: Destroy has been added as an extremely unique and extremely in-depth mod about Chemistry! It will be used to gate the New Age nuclear reactor, by requiring an elaborate thorium enrichment process.
- Petrol's Parts adds a variety of beautiful and flexible mid-to-late game parts that can transmit rotational power in new ways, such as a planetary gear.
- pquality basically implements Quality from Factorio into the game.
- Petrolpark Library has been added as a dependency to Destroy, Petrol's parts, and pquality


### General

- Pufferfish's Skills has been added, as the modpack will implement its own custom skill trees!
- Pufferfish's Attributes are added to have more attribute to play with.
- Sophisticated Backpacks have been readded to the modpack. Forgor to add these. However, we will not be adding Sophisticated Storage, due to Create 6 basically making it redundant. If players want a sophisticated, automated storage system, I would like them to interact with Create. However, backpacks are still too good and useful on their own, so those stay.
- Sophisticated Core is added as Bacpacks dependency.
- Soul fire'd has been readded. Forgor about it, oops.
- Cobweb added, which is the dependency of Soul fire'd.
- Truly Modular Item API has been added as a replacement for Tinker's Construct. This is a modern, very polished, powerful, and vanilla-friendly alternative which is also a lot easier to use and does not require multiple in-game books to learn! For the fans of casting and melting metals, worry not! For Create: Metallurgy has been added to fill that hole and badass mechanic of Tinker's. Tinker's has served well.
     - Archery
	 - Arsenal
	 - Armory

## Food and Drink

- Vinery has been added because the modpack needs more booze. This mods adds beautiful  vineyard capabilities, placeable winebottles, and more goodies.
- Spice of Life: Carrot Edition has been added... forgor to add it previously, oops.

### Mobs and Worldgen

- Alex's Mobs and Alex's caves have been added!
- As such, their dependency Citadel has been added. I have concerns about Citadel's performance, but these mods are too high quality, and it's kind of a disservice to Forge players to deny them of them.
- Mobs from these mods will have their spawns configured and balanced as time goes.
- The Midnight is back! A 1.12.2 classic, it is back on 1.20.1, and its environment is beautiful and breath-taking!
- Lucent has been added, a Midnight dependency. There will be a close watch on this mod for performance. It has potential for compat with Create Dynamic Lights
- SmartBrainLib has been added as a midnight dependency. It enables advanced mob behavior.
- Nullscape; although Vulpinian Skies wants to have a more lively rather than barren End, the landscapes created by these gen rules are just breathtaking and fantastic..

### Utility

- CrashAssistant. It is not a matter of if, but a matter of when the modpack crashes. This will increase our tools to fix whatever caused the crash.
- Just Enough Resources to allow viewing mob, loot, and plant, drops and more.
- No Chat Reports is added because Vulpinian Skies values privacy and self-sovereignty.
- EntityJS has been added for some custom entity, arrow, and projectiel toomfoolery.
 
 ## Mod Deletions ➖
 
 - Tinker's Construct: See above about Truly Modular and Create: Metallurgy. It has served well o7
 - Mantle, Tinker's Dependency thus is also removed (I don't think anything else depends on it at least...)
 - Enlightend: It started feeling a bit off, as a sort of abandoned MCreator mod. The upper mini islands were getting in the way a lot and not looking the best.
 - Pam's mod suite is getting removed, as the mods honestly prioiritize quantity over quality and feels rather bloated. Not to worry, some new food mods will be added in a future update, which are of higher quality (even in the textures alone) and have much better intergration and fun mechanics.
 - Cooking For Blockheads is also getting removed sadly, as it is no longer needed since no Pam's. There is still a whole suite of Create food-related add-ons to help with automated food, though, and more coming... (Bitterballen is one)
 
 ## Configs ⚙

 - Finally configured Quark
 - Tweaked BetterCombat so that combat is more vanilla-like.
     - Buffed default sweeping edge (but not too much, so Sweeping Edge enchant is still relevant.
	 - Also made it so the aoe damage is reduced less, relative to the number of entities struck (more damage to more entities will be dealt now).
	 - Buffed movespeed multiplier while attacking from 0.5 to 0.85.
	 
# 0.0.4 Create 6, Slimes, Bees, Other Additions and Major Updates

This major update brings some lovely new mods, such as Bumblezone but also an up-and-coming mod: Splendid Slimes, with mechanics overhauled via KubeJS.
A large portion of the modlist has received updates, some with major content. Create 6 is now online, and the vast majority of add-ons have caught up to it.

**Forge has been updated to 47.4.8.**

A recent data corruption after attemping to manually update thet server instanc has inspired me to streamline server operations: 
- Server now has its own Packwiz instance with a separate modlist that omits client-only mods and has a few extra server-only ones.
- .bat file has been written to mirror KubeJS scripts, data, and configs. Server can still have exclusive files here.
- It will be tracked in this same repo.

## Mod Updates

### Create
Way too much to list here. This video does a nice documentation of it, however: https://www.youtube.com/watch?v=FGVkC8ZVHHw
This is basically the reason why I took a break from the  modpack last time; because I was waiting for add-ons and stuff to catch up to Create 6.

### Zombified Players:
- Zombified players are now immune to fire and lava,
- fixed inventory not being saved correctly	 
- Now supports Curios API (zombies with accessories?)

### Target Dummy:
- Bugfixes
- Renaming a dummy with a number will give the dummy that max health.

### Born in Chaos
- Tweaks
- QoL
- Small Additions

### CC:C Bridge
- Now supports Create 6.

### Delightful
- New foods, new pie!
- New food effects
- Other tweaks and recipe changes.

### FramedBlocks
- Now supports Create 6
- Bugfixes and smal QoL

### ChoiceTheorem's Overhauled Village
- Scorched Guns compat
- Oh the Biomes We've Gone compat
- Create: Dynamic Village compat
- Let's do Vinery compat

### Collective
- Refactoring and extensions to this library.

### Create: Diesel Engines
- Create 6 support
- Major content additions and polish.
- Bulk Fermenters
- Chemical Turrets
- Burners
- KubeJS support
- Bugfixes

### Create: New Age
- Create 6 support
- Bugfixes and QoL

### Create: Big Cannons
- Create 6 Support
- Polish
- Now requires a new Ritchie's Projectile library.

### Create: Steam 'n' Rails
- Create 6 support
- Bugfixes

### Create: Central Kitchen
- Create 6 support
- More compat with other mods
- Bugfixes

### Create: Slice & Dice
- Create 6 support
- Polish
- Slicer recipes can be part of sequenced assembly

### Create Deco
- Create 6 support
- Texture updates
- Bugfixes

### Create: Crafts and Additions
- Create 6 support
- Mod compat with Enchantment Industry
- Polish

### Create: Enchantment Industry
- Create 6 support
- Bugfixes

### Create Optical
- Create 6 support

### Create: Metallurgy
- Create 6 support
- QoL and Bugfixes
- Streams of molten material now do the ouchie ouchies

### KueJS Create
- Create 6 support

### LootJS
- Bugfix

### EntityJS
- Bugfixes
- More entity-bulding utilities, including ability to copy/create entities based on existing ones, including modded ones.
- Now adds dispenser behavior to trident and other projectiel entities.

### Just Enough Items
- Many, many Bugfixes
- Refactoring, optimizations
- Probably QoL?

### Jade
- Bugfixes and QoL

### Jade Addons
- Create 6 Support.

### Scorched Guns 2
- A lot of new content (including more guns!!)
- Many tweks
- QoL
- More configs
- Bugfixes
- Polish

### CC: Tweaked
- Create 6 support
- New functions
- Bugfixes
- Is now installed via Modrinth, as CF page is no longer updated.

### Advanced Peripherals
- Create 6 support
- Bugfixes and QoL

### Octolib
- Backported bhanges from 1.21.1

### Framework
- Library Bugfixes and QoL

### Oh The Biomes We've Gone
- Major content update: The Village Update. New biomes, biome revamps, structures, pumpkin warden
- Now requires Forge 47.4.0+ so Forge is updated

### Oh the Tress You'll Grow
- Logic rewrites and bugfixes


### L_Ender's Cataclysm
- Major content update
- Many Bugfixes

### Mowzie's Mobs
- Small content
- Bugfixes
- Polish

### The Midnight
- Bugfixes
- Is now downloaded via Modrinth

### Dramatic Doors
- Create 6 support
- Better mod compat including with Create Deco, Biomancy, Ars Nouveau
- Polish
- Bugfixes

### Goblin Traders
- QoL and Bugfixes
- Polish

### Collectibles
- Small content
- QoL and Bugfixes

### Balm
- Library bugfixes and backports.

### CorgiLib
- Library bugfixes and backports.

### Lithostiched
- Library bugfixes and extensions
- Utility to check if a block is in a structure?

### Curios API
- Bugfixes

### Forgified API
- Library extensions and bugfixes

### GUI Compass
- Logic improvements

### GeckoLib
- Library Additions
- Bugfixes

### ModernFix
- Numerous new performance improvements

### Fastsuite
- Better safety with its optimizations

### Simple Backups
- Can exclude files/directories
- Better config
- Bugfixes

### Botany Pots
- Polish

### Waystones
- More configs
- Bugfixes

### Zeta
- Library refactoring and bugfixes

### GUI Clock
- Logic improvement

### Infinity Buttons
- More buttons, more compat!

### Pufferfish's Skills
- New experience sources, such as enchanting items
- Has level limit option, required exclusions
- Now supports animated backgrounds
- Comparison operators to expressions
- Team-shared experience
- Other QoL and Bugfixes

### Pufferfish's Attributes
- New attributes
- Bugfixes

### Truly Modular API
- Bugfixes and QoL

### Truly Modular: Arsenal
- Added medium shields
- Safety and Bugfixes

### Polymorph
- Bugfixes

### Artifacts
- Toomfoolery
- Bugfixes

### Reliquary Reincarnations
- Bugfixes adn QoL
- New tag to alllow mobs to ignore Interdiction Torch.

### Citadel
- Library bugfixes

### Inline
- Functionality extensions
- Refactoring
- Bugfixes

### Sophisticated Core
- Bugfixes, many Bugfixes
- Better compat with Create
- More configs
- New Alchemy upgrades to automatically drink potions or eat food with effects, with configurable options

### Sophisticated Backpacks
- Same improvements from Sophisticated Core but additional stuff just for backpacks.
- Backpack templates, might use for starter backpacks?
- Configurable effect for carrying too many backpacks.

### Separated Leaves
- Removed biomes.json and now works when a namespace has rules for Separated Leaves.

### Ars Nouveau
- Bugfixes

### Ars Creo
- Now supports Create 6.
- Potion Jars can now be piped from/into Create fuild tanks, and other QoL
- Starbuncle config

# Ars Elemental
- Bugfixes

### FancyMenu
- Fancy goodies

### Gems & Jewels
- Features such as tool leveling of gemmed tools
- Other content

### TerraBlender
- Bugfixes
- Reverts of reverst? (supports End and Nether)

### Ecologics
- Bugfixes

### NFF: Girls
- Content Additions
- Bugfixes

### Farmer's Delight
- Tag Additions
- QoL
- Bugfixes

### Vinery
- QoL
- JEI Compat
- Bugfixes

### Unusual End
- Polish and Bugfixes
- Pinned to non-Blueprint version

### Friends&Foes
- More configs
- Bugfixes

### Hostile Mobs and Girls
- Mod compat
- QoL
- BUgfixes

### Quark
- Mod compat
- Bugfixes

### Amplified Nether
- ???
- Weirdly named, but datapack-oriented so it's still for 1.20.1

### Crash Assistant
- QoL and Improvements
- Somehow, Create 6 support

### Placebo
- Library refactoring

### Moonlight Lib
- Library refactoring

## Every Compat (Wood Good)
- More good wood
- More config

### Aquaculture 2
- Bugfixes

### Bedspreads
- Bugfix

## Mod Removals ➖

### Immersive Paintings
- Essentially replaced with Exposure mod.

### Create: Crystal Clear
- Has not received Create 6 support sadge
- Will be re-added when it receives support.

### Extended Cogwheels
- Same as above.

### Antique Atlas
- Has been found to cause extreme lag, to the point of causing the server to crash by tick watchdog.
- Has been replaed with Xaero's.

### Surveyor
- Dependency of Antique Atlas and likely the real culprit of the lag.

## Mod Additions ➕

### Splendid Slimes
- Slime Rancher but in Minecraft!
- Extremely configurable, fully data-driven. Custom slimes will be made!
- Slime acquisition behavior has been fully overhauled via KubeJS Scripts

### The Bumblezone
- Extremely high-quality mod with a lovely, super well-crafted buzzy dimension.
- Has wide mod compat and config and data-driven behavior
- Other mods from this author will be added in future updates.

### Potion of Bees
- Buzzy friend goodness (weaponizable too)
- Has compat with Bumblezone, can be used to revive brood blocks.

### Critters And Companions
- Has some adorable creatures
- Has JUMPING SPIDERS that can be tamed! <3
- GeckoLib dependency, which we already have.

### Xaero's Minimap
- Replaces Antique Atlas.

### MarbleGate's Exotic Enchantment: Flowing Agony: Reborn
- This mod was in the 1.18.2 version of the modpack, and it recently has been ported to 1.20.1, as suggested by its second "Reborn" sub-title!

### Create: Escalated
- Funny little new Create add-on, by the same maker of Create: Big Cannons

### Geologic Expansion
- An addition to the Exploration category, has some small but quite nice biomes, particularly the Prismatic Caldera serving as a very colorful sea-side biome
- Also has ducks.

### (TEMPORARY/DEV-ONLY) Nature's Compass
- Only for debugging purposes, Nature's Compass has been added.
- Will only be available for Admins/Creative players or for testing purposes.

### Bocchium
- Simple performance mod that culls the top or bottom of a dimenson's blocks

### What Are They Up To
- Neat little mod showing what other players are doing.

### Exposure
- A mod about film photography
- Essentially a more immersive "Immersive Paintings".
- Fabric mod running through Connector, so eyes on this one for stability.

### Raw's Visual Keybinder
- It adds an extra way to manage keybinds. It provides an extra screen which will be accessible  by the button next to the default edit 'keybind button' in the options menu.
- The screen has a layout like a keyboard with all conflicting and used buttons highlighted. This way players have a great overview of which keys are still available and which ones need attention.

### Ritchie's Projectile LIbrary
- New dependency of Create: Big Cannons

### Connected Glass
- I thought we had clear glass somewhere in the pack but apparently we don't, oops.

### Fusion (Connected Textures)
- Library that Connected Glass uses. Has cool features, might us for other stuff.

### SuperMartijn642's Core Lib
- Library that Connected Glass uses.

## Configs ⚙

### Crash Assistant
- Added config with names and links to Vulpinian Skies discord etc.


# 0.0.5 Major Mod Updates & Polish ⚙️🦊⚙️

## Overview 📝

This update is primarily a **mod update pass** across nearly the entire modlist. Many  mods have received significant content updates, and the vast majority of Create add-ons have now caught up to Create 6.0.8. A few mods have also received major balance or compatibility-affecting changes.

* 85+ mods updated.
* Create 6.0.6 → 6.0.8, plus an avalanche of Create add-on updates to match.
* Several mods received MAJOR content updates (Cataclysm "Howling Storm", Create: Metallurgy 1.0, Scorched Guns 2 0.5, Splendid Slimes 0.19, Aquamirae 6.3, Exposure 1.9, Biomancy 2.9, Oh The Biomes We've Gone 1.7).
* Pay attention to the **Compatibility & Breaking Changes** section at the bottom of this entry before migrating worlds.

## Mini Blog / Vulpinian Yapping 🗣

We're back baby! The release of Aero has reignited the Minecraft spark. I gotta give this modpack some love once in a while.
Sadly I do have a number of other projects that I do have to prioritize. To this end, I will start leveraging LLMs to automate time-consuming tasks, such as drafting this changelog of 85 mod updates.
I have to disclose it, but also will say that LLMs are only going to be used as a tool to help me do more with my time. I will dutifully review and manually test anything it spits out. LLMs are a tool and not a replacement.
Nonetheless, if managed and guided accordingly, there are definitely several uses I have in mind where it is actually a time-saving tool for modpack dev, since a lot of tasks are repetitive or "routine".

Create: Metallurgy finally hitting 1.0 after a year of alpha is particularly exciting — Ladles, Labeling Stations, and proper molten fluid water interactions fill in a lot of the rough edges that made metallurgy feel like a placeholder. Similarly, Scorched Guns 2 has quietly transformed from a gun mod into a full-blown progression mod with raids, new bosses, and mech-style energy weapons. The modpack gets noticeably meatier without me adding a single new mod.


## Mod Updates ⬆

### Create Ecosystem

#### Create (6.0.6 → 6.0.8)

* **Content & Compat**
  + ComputerCraft integration expanded to Update 6 blocks (stockkeepers, packagers, frogports, signals, etc.).
  + Xaero's World Map compatibility for the Train Map feature — trains now show on Xaero's map.
  + JEI support for the StockKeeperRequestScreen (uses/recipes lookups now work from inside the stock UI).
  + Allow any wrench tagged as such to connect mechanical crafters (major mod compat win).
  + Updated BOP, Atmospheric, BYG/BWG compat.
  + Track tracks clearable by shift-clicking air. Same for logistically linked items (clear frequency by shift-click air).
  + Chain riding allowed with a wrench in the offhand.
  + Overstress animation for rotating visuals.
* **Balance**
  + Added config option to prevent block dropping when contraption is replacing blocks.
  + Allow conditions on retrieve package instructions.
  + Consolidate gauge inputs with the same item into a single request.
* **Performance**
  + Optimized basin recipe lookup, package address checking, TreeCutter, contraption sync limiting, vault comparator/inventory access.
* **Bugfixes** — a MASSIVE bugfix sweep. Over 60 bugs fixed across contraptions, schematics, trains, signals, packagers, potato cannons, deployers, blaze burners, toolboxes, mechanical bearings, mechanical crafters, steam engines, display links, crushing wheels, and more.

#### Create: Steam 'n' Rails (1.6.13 → 1.7.2)

* Deployers can copy train names to/from nametags.
* Moss carpets and snow can now encase tracks (new `railways:track_casing_whitelist` tag).
* Snow now falls on tracks.
* New `unlimitedCreativeRelocation` config option for infinite-range train relocation in creative.
* Full Create 6.0.8 support.
* Bugfixes (instanced carriage rendering, wide scotch yoke bogey model, etc.).

#### Create: Big Cannons (5.9.1 → 5.11.2)

* **MAJOR CONTENT**: Bronze and steel ingots/blocks are finally added (after 3 years 🎉).
* Added view transparency config for molten metal fluids.
* Added ability to top up cannon cast fluids in Creative.
* **Propellant overhaul**: Can now combine different propellant types. By default, big cartridges must come before powder charges. Propellant datapack format changed (`maximum_amount` → `maximum_amount_ahead`).
* **Balance**: Increased nethersteel screw breech max stress (8→10), steel screw breech max stress (6→8). Changed Impact Fuze and Delayed Impact Fuze trigger conditions.
* Updated FramedBlocks compatibility for FramedBlocks 10.5.
* Bugfixes (ram rod/worm item display, autocannon UI, etc.).

#### Create: Metallurgy (0.0.7 → 1.0.1) 🎉 First Stable Release!

* **MAJOR CONTENT UPDATE**: Creator Luc_Creeper74 finally released Metallurgy 1.0, ending the long alpha period.
* Added **Ladles** (with random models from Community Contest winners RestingPhantom and Aaby).
* Added **Ladle Filter** item.
* Added **Labeling Station**.
* Added **Slag blocks**.
* Added **Refractory Mortar Ball**.
* Added belt processing behaviour to Faucets.
* Added Gauge attachment item description.
* Added molten fluid/water interactions (splash, steam, etc.).
* Added Industrial Crucible & Foundry Unit.
* Added Obdurium Alloy.
* Added Dutch translation.
* Direct belt input behaviour for crucibles.
* Merged Glassed Foundry lid with regular lid.
* Faucet fluid streams now hurt entities (for `#minecraft:lava` or `#forge:molten_materials`).
* Molten fluids can no longer be a bottomless source by default (configurable).
* Many recipe and behavior bugfixes.

#### Create: Diesel Generators (1.3.5 → 1.3.12)

* Bugfixes and QoL.
* Better Create 6.0.8 compatibility.

#### Create: Factory (0.4b → 0.5a)

* Create 6.0.8 support.
* New food content additions and tweaks.
* Bugfixes.

#### Create: Misc & Things (4.0A → 4.1.0)

* Content additions.
* Create 6.0.8 support.
* Bugfixes.

#### Create: Escalated (1.1.0 → 1.2.1)

* Create 6.0.8 support.
* Content additions.
* Polish and bugfixes.

#### Create Slice & Dice (3.4.1 → 3.6.0)

* Create 6.0.8 support.
* Content additions.
* Bugfixes.

#### Create: New Age (1.1.4 → 1.1.7f)

* Create 6.0.8 support.
* Polish and bugfixes.

#### Create Optical (0.3.1 → 0.4.1)

* Create 6.0.8 support.
* Content additions.
* Bugfixes.

#### Create Crafts & Additions (1.3.2 → 1.3.3)

* Bugfixes.

#### Create Cafe (1.2.4 → 1.3)

* Content additions.
* Polish and bugfixes.

### Magic

#### Biomancy (2.8.19 → 2.9.8.1)

**⚠ Compatibility note**: Mod author now ships the 1.20.1 jar as a NeoForge build (`biomancy-neoforge-1.20.1-2.9.8.1-alpha.0.jar`). Runs fine on Forge via compatibility; see Breaking Changes section below.

* **Content**
  + New Biomancy keybinds with modifier key support.
  + AlexMobs banana & peel and AlexCaves plants are now decomposable.
  + Any `#forge:crops` can now be decomposed.
  + New `fleshkin_ignores` entity tag for prey that Flesh Pigs and Hungry Flesh Blobs should ignore.
  + Added NBT support to SerumContainers (compatible with fluids, potions, etc.).
  + Storage Sac inventory is now compatible with loot table randomization.
  + Added custom tooltip frames for the tooltip overhaul mod.
* **Compat**
  + Watergel is now a real water fluid (not fake water) — fixes compatibility with Farmer's Delight farmland!
  + KubeJS integration with Biomancy recipes, serums, bio-forge tabs, nutrients fuel/repair.
  + Pehkui integration with configurable enlargement/shrinking serum settings.
  + Corrosive effect added to `is_acid` forge tag.
* **Bugfixes**: membranes blocking pathfinding correctly, cradle advancements, injector damage order, Flesh Blob models, and many more.

#### Hex Casting (0.11.2 → 0.11.3)

* Bugfixes and polish.

#### Ars Elemental (0.6.7.8 → 0.6.7.9)

* Bugfixes.

#### Reliquary Reincarnations (2.0.52 → 2.0.55)

* Bugfixes.
* Polish.

### Mobs & Entities

#### L_Ender's Cataclysm (3.16 → 3.27 — "Howling Storm" update) 🌩

* **MAJOR CONTENT**: The Howling Storm update introduces **Scilla**, the resident of the Acropolis. Players will need to navigate to his lair and venture into the sky to defeat him. This is a new full boss fight with a new gear tier.
* Version includes a laser-fix and enchant-fix patch (we're on 3.27-curios-fix, the latest stable).
* Balance tweaks across existing bosses.
* Many bugfixes and crash fixes across dungeons and bosses.

#### Mowzie's Mobs (1.7.3 → 1.8.2)

* Content additions.
* Balance polish across existing mobs.
* Bugfixes.

#### Splendid Slimes (0.14.4 → 0.19.3) 🟢

* **MAJOR CONTENT**: Tons of new traits and features added across 5 minor version bumps.
  + New traits: **Friendly** (follows nearby players), **Diverse** (needs proximity to 3 unique breeds), **Inverse** (flips good/bad effects based on mood), **Nuclear** (furious slime bursts into block-breaking explosion), **Putrid** (strengthens + doubles effect duration), **Weeping** (cries water periodically).
  + Added **hat to Ender Slime** (hehe).
  + **Slime offline mode**: Slimes will no longer perform effects or get hungry when their owner is offline (configurable).
  + Added **Largo Jamming** to Slime Vac: Largos get stuck in the vac when close to the player, so ranchers can drag them around without sneaking.
  + Slime Vac now inserts slimes directly into the player's inventory.
  + Added traits display to Slime in item form while pressing shift.
* **Balance**
  + Reduced Weeping trait radius (3 → 2) and time (30 → 2.6 minutes, 4x slime effect cooldown config option).
* Bugfixes across traits, slime commands, and Plort Press.

#### Born in Chaos (1.7.2 → 1.7.5)

* Small content and balance tweaks.
* Bugfixes.

#### Hostile Mobs and Girls / HMaG (9.0.33 → 9.0.37)

* Content tweaks.
* Mod compat.
* Bugfixes.

#### NFF: Girls (0.2.30.6 → 0.2.32)

* Content additions.
* Bugfixes.

#### Grimoire of Gaia (4.0.0-alpha.11 → 4.0.0-alpha.12)

* Bugfixes.
* Polish.

#### Critters and Companions (2.3.2 → 2.3.5)

* Small content updates.
* Bugfixes.

#### The Bumblezone (7.9.0 → 7.11.2)

* Content additions.
* Mod compat improvements.
* Bugfixes.

#### Aquamirae (6.API15 → 6.3.3) 🥶

* **MAJOR CONTENT**: Complete overhaul of Ice Maze generation, backported from the upcoming Aquamirae 7. The dense wall-clusters that didn't feel maze-like are replaced with a multi-layered noise-based system. Exploration is more immersive AND significantly better-performing (fewer generated structures).
* Weather inside the Ice Maze is adjusted — it now properly snows within the biome.
* Added subtle ambient background loop to reinforce the atmosphere of the frozen wasteland.
* Rune of the Storm can now be applied via the Smithing Table.
* Removed procedurally generated loot armor from Creative tab.
* Bugfixes (shelters flooding in underground water pockets, drowned from Dead Sea Scroll despawning, music discs interrupted, crystallization damage type, mixin apply error).

### Worldgen

#### Oh The Biomes We've Gone (1.6.5 → 1.7.5) 🌎

* **⚠ BREAKING**: `skyrise_vale` was renamed to `skyris_vale` to fix a typo. Old chunks will display as "plains" in F3 and won't be findable via `/locate`, but the biome itself still generates correctly visually. New chunks will have the correct ID.
* **⚠ BREAKING**: The `/bwg` villager upgrade command has been removed (was slated for 2.5.0 anyway).
* Added Autumnity compat: when Autumnity is present, the Medium Pumpkin Feature is replaced with Autumnity's Pumpkin Feature.
* Added PathBlockType to BlueBerry Bush and Desert Plants.
* Barrel Cactus now gives Cactus Damage when collided with.
* Bugfixes for BWG Chest Boats changing to Aspen type on server reload, Baby Villager → Pumpkin Warden transformation, and many more.

#### Oh The Trees You'll Grow (1.3.13 → 1.6.0) 🌳

* **MAJOR CONTENT**: Library rewrite with many new capabilities.
* **Tree From Structure NBT v2** — new system for defining trees from NBT with blockstate providers.
* Added ability to use blocks within the NBT to place Blockstates via Blockstate providers.
* Allow specifying multiple leaf targets and multiple leaf block state providers.
* Allow `BlockStateProperties.FACING` on `AttachedToLogsDecorator` with correct Direction setting.
* Added sideways and upside-down tree config choices (!).
* Added structure checks to tree growth during world generation.
* Concurrency safety for random scheduled ticks.
* Many, many bugfixes for trunks, canopies, log decorators, leaf placements, chunk-range crashes, etc.

#### Amplified Nether (1.2.11 → 1.2.14)

* Datapack-oriented tweaks.
* Bugfixes.

#### Ecologics (2.2.2 → 2.2.4)

* Bugfixes.

### Tools, Weapons & Equipment

#### Scorched Guns 2 (0.4.6.5 → 0.5.5) 🔫

* **MASSIVE CONTENT UPDATE across 5 versions.**
* **New Guns added**: Minksy Laser Rifle, Mas Peddler, Teslock Rifle, Libertas, Jury Rigged Wrist Breaker, Whistler Sniper, Blooper Grenade Launcher, Triquetra Grenade Launcher, Hammer GL, Truant GL, Zilk 45, Hyperbaria.
* **New Grenade Rounds**: High Explosive, Bouncy, Gas, Fire. Rebalanced blast radii.
* **New Mobs**: Mother Ghast (rare Nether spawn, member of Piglin Raids), Praetor.
* **New Items/Gear**: Mine Unit, Shock Coil, Metal Detector, Iron Mask, Bat Guano (bats occasionally poop it), Guano Candle (light source attracting bats), Frog Dart projectile.
* **Ammo swap system** added — Thunderhead can now swap to Krahg rounds.
* **Raid system overhaul**: Blueprints now require blueprint scraps (from structures and mob drops). Each tier of raid drops a required trophy item to craft the next tier's blueprint. Added Flare Gun for manually calling raids, and Flares.
* **Enchantment rebalance**: Heavy Shot, Hyper Velocity, and Sharpshooter rebalanced to be in line with each other. New stat formulas for damage, fire rate, recoil, knockback, armor bypass, crit chance.
* Reworked Turret Recipes so they can be obtained earlier.
* Reworked Sculk Resonator.
* Reworked Choke Bombs.
* Overhauled Cog Minion (can wear helmets now).
* Split creative menu into 3 tabs (items, blocks, guns).
* Tons of new Asgharian Bricks and building blocks (thanks Albatroz).
* New plasma shotgun sounds, new Dissident sounds.
* Supply Scamp and Viventrum now use Repair Kits for healing.
* Fixed Viventrum dupe bug.
* Many, many balance tweaks, bugfixes, and texture improvements (huge thanks to JaDn for visual work).

#### Dramatic Doors (3.3.1 → 3.3.3)

* Bugfixes.
* Compat improvements.

#### Artifacts (9.5.16 → 9.5.19)

* Small content tweaks.
* Bugfixes.

#### Truly Modular - Modular Item API (1.1.48 → 1.1.49)

* Library bugfixes.

#### Truly Modular: Armory (1.11 → 1.13)

* Content additions.
* Safety and bugfixes.

### Food & Farming

#### Farmer's Delight (1.2.9 → 1.2.11a)

* Tag additions.
* QoL.
* Bugfixes.

#### Delightful (3.7.6 → 3.7.8)

* Small content tweaks.
* Recipe changes.
* Bugfixes.

#### Aquaculture 2 (2.5.5 → 2.5.7)

* Bugfixes.

#### Botany Pots (13.0.41 → 13.0.43)

* Polish.
* Bugfixes.

#### Botany Trees (9.0.18 → 9.0.20)

* Bugfixes.

### Creative / Aesthetic / Media

#### Exposure (1.7.16 → 1.9.20) 📷

* **MAJOR UPDATE across many versions.**
* Camera interaction sounds are now audible for other players.
* Reduced color photograph print time (10s → 8s).
* Camera interaction animations — player moves their hand slightly when changing viewfinder settings or attachments.
* New **background capture method**: no more screen flicker when taking a photo (old direct method still available, auto-used with Iris).
* Added **Glass Photograph Frame**.
* Added `/exposure export` command for exporting exposures to PNGs in `<world>/exposures` folder.
* Added creative-mode tools in Photograph screen.
* Added **Splitting the Photon** advancement for exposing a frame with R/G/B filter.
* **Custom color palettes** can now be defined.
* **Image loading from URL** supported in Projector.
* Projector now breaks when loading fails (instead of being consumed).
* Printing now requires light level 12+ above the Lightroom (no longer emits light).
* Chromatic Printing now requires a Tinted Glass placed on top of the Lightroom (previously Amethyst Cluster).
* Mundane, Awkward and Thick potions now have distinct colors during developing.
* Color Film recipe now uses Gold instead of Iron; Camera recipe now uses only Iron Ingots instead of Iron Nuggets and Pressure Plate.
* Tooltip on camera components and ability to view available Lenses/Filters.
* Camera controls keybind can be remapped now.
* Lightroom comparator output now based on output slot count rather than selected frame.
* Many bugfixes.

#### Joy of Painting (1.0.1 → 1.1.0)

* Content additions.
* Polish.
* Bugfixes.

#### FancyMenu (3.7.0 → 3.8.1)

* New fancy goodies.
* QoL.
* Bugfixes.

### Skills, Attributes & Progression

#### Pufferfish's Skills (0.16.5 → 0.17.3)

* Content additions.
* Configurable improvements for skill trees.
* Bugfixes and QoL.

#### Pufferfish's Attributes (0.7.6 → 0.8.2)

* New attributes.
* Bugfixes.

#### AttributeFix (21.0.4 → 21.0.5)

* Bugfixes.

### Storage & Inventory

#### Sophisticated Core (1.2.89 → 1.3.21) 🎒

* **Many iterative improvements across 30+ patch versions.**
* Better compatibility with Create.
* More configuration options.
* New Alchemy upgrades to automatically drink potions or eat food with effects (with configurable options) — polish of the feature introduced in 0.0.4.
* Many, many bugfixes and crash fixes.

#### Sophisticated Backpacks (3.24.5 → 3.24.35)

* All the improvements from Sophisticated Core.
* Additional backpack-specific polish.
* Backpack templates refinement.
* Bugfixes.

### Utility & QoL

#### Just Enough Items / JEI (15.20.0.112 → 15.20.0.130)

* Many, many bugfixes.
* Performance improvements.
* Refactoring and QoL.

#### Collective (8.3 → 8.20)

* **Many library versions bumped.**
* Refactoring and extensions.
* Used by a large chunk of the modpack's utility mods, so indirect bugfixes across many mods.

#### Waystones (14.1.17 → 14.1.20)

* More config options.
* Bugfixes.

#### Crash Assistant (1.9.15 → 1.11.8)

* QoL improvements.
* Better crash grouping and reporting.
* Create 6 integration improvements.

#### Tips (12.1.8 → 12.1.9)

* Bugfixes.

#### Enchantment Descriptions (17.1.19 → 17.1.21)

* Bugfixes.

#### Level Text Fix (7.0.2 → 7.0.3)

* Bugfixes.

#### Additional Banners (14.0.4 → 14.0.5)

* Bugfixes.

#### Raw's Visual Keybinder (0.1.7 → 0.1.12)

* QoL improvements.
* Bugfixes.

### Libraries & Core

#### GeckoLib (4.7.4 → 4.8.3)

* Library additions.
* Animation improvements.
* Bugfixes.

#### Moonlight Lib (2.16.10 → 2.16.30)

* Library refactoring.
* Bugfixes across all Moonlight-dependent mods.

#### Citadel (2.6.2 → 2.6.3)

* Library bugfixes.

#### Balm (7.3.35 → 7.3.38)

* Library bugfixes and backports.

#### Framework (0.7.15 → 0.8.0)

* Library extensions and bugfixes.

#### Bookshelf (20.2.13 → 20.2.15)

* Library bugfixes.

#### Zeta (1.0-30 → 1.0-31)

* Library refactoring.
* Bugfixes.

#### Obscure API (15 → 18)

* Library extensions.
* Bugfixes (Aquamirae dependency).

#### Patchouli (84.1 → 85)

* Library bugfixes and polish.

#### FramedBlocks (9.4.2 → 9.4.3)

* Bugfixes.

#### Kotlin for Forge (4.11.0 → 4.12.0)

* Library update.

#### Lionfish API (2.4 → 2.7)

* Library extensions.
* Bugfixes.

#### Ritchie's Projectile Library (2.1.0 → 2.1.1)

* Bugfixes for Create: Big Cannons.

#### SuperMartijn642's Core Lib (1.1.18 → 1.1.21)

* Library bugfixes.

#### LootJS: KubeJS Addon (2.13.0 → 2.13.1)

* Bugfixes.

#### EntityJS (0.6.3 → 0.6.7)

* More entity-building utilities.
* Bugfixes.

### ComputerCraft / Automation

#### CC: Tweaked (1.116.1 → 1.117.1)

* Create 6.0.7/6.0.8 integration (via Create itself; see Create notes).
* New functions.
* Bugfixes.

#### Advanced Peripherals (0.7.45r → 0.7.46r)

* Create 6 support.
* Bugfixes and QoL.

### Performance

#### ModernFix (5.24.4 → 5.27.8)

* Numerous new performance improvements.
* More bugfixes and safety.

#### FastSuite (5.1.0 → 5.1.2)

* Safer recipe-handling optimizations.
* Bugfixes.

### Compat / World-Touching

#### Every Compat (Wood Good) (2.9.2 → 2.9.20)

* Tons more wood/stone compat across mods.
* More config options.
* Bugfixes.

#### Fusion (Connected Textures) (1.2.11a → 1.2.12)

* Bugfixes.

#### Sinytra Connector (beta.46 → beta.48)

* **Critical compatibility mod update**. Continues to improve Fabric-mod support on Forge. We're still using it for Antique Atlas alternatives and now implicitly for Biomancy (which ships as NeoForge).
* Bugfixes.

### Server / Admin

#### Simple Backups (3.1.16 → 3.1.24)

* More config refinements.
* Bugfixes.

### Client / Map

#### Xaero's Minimap (25.2.10 → 25.3.10)

* Xaero updated to the newer Modrinth-distributed jar format.
* **Compat**: Create 6.0.7+ Train Map feature now integrates with Xaero's World Map (see Create section).
* Bugfixes.

### Miscellaneous

#### Zombified Player - Kill Your Inner Zombie (1.2.7 → 1.4.0)

* Content additions.
* Polish.
* Bugfixes.

## Pinned Mods (Skipped)

* **Unusual End** — update skipped (pinned to non-Blueprint version, intentional).
* **Lovely Snails** — Packwiz failed to find a valid 1.20.1 version; remains at current version. Not a blocking issue.
* **The Midnight** — Modrinth has an inconsistency between the "latest version" number (1.20.1-0.6.2-beta.3) and the newest release date (0.6.7). Will monitor and bump manually once Modrinth resolves.

equires Gold (was Iron). Camera now uses Iron Ingots only (no more nuggets + pressure plate). Old cameras still work fine, but fresh crafts use the new recipe.

## Configs ⚙

* Added Midnight config

## KubeJS Scripts

* Scripts should remain compatible. New KubeJS integrations available:
  + **Biomancy KubeJS**: Serums, bio-forge tabs, nutrients fuel/repair. Will evaluate for use in future updates.
  + **Create: Diesel Generators KubeJS**: Already in use from 0.0.4.
  + **EntityJS**: New utilities for copying entities (including modded ones) — may be useful for custom Splendid Slimes or custom Biomancy creatures.