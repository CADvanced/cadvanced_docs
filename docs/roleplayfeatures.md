---
id: roleplayfeatures
title: Setting up roleplay features
sidebar_label: Setting up roleplay features
---

# Setting up roleplay features on your CAD
Setting up features including licenses and vehicle registration is easy, navigate to
your admin page and select define values. Going through the list one by one.

**CALLS** – Variables defined here are used to add functionality to the dispatch create call feature.

**UNITS** – Variables defined here are used to identify patrolling officers and their current status.

**CITIZENS** – Variables defined here are used to allow for citizen creation.

**LEGAL** – Variables defined here are used to define charges and what citizens license statuses.

**OFFICERS** – The variables defined here allows for law enforcement ranks to be added.

# Character choosing and creating
If you are roleplaying as a character (citizen or officer), their type and name will be
displayed in the top toolbar of CADvanced, the hammer represents law enforcement and the person represents civilians:

https://i.del.gg/i/kN5jU.png
https://i.del.gg/i/cqCQw.png

Creating citizens and officers is simple, just navigate to My Citizens or My Officers
and input any required information

# Dispatching
When using the dispatch system you must ensure the user using the dispatch area has the correct permissions in the user management page. The dispatching user is responsible for creating and removing calls, creating unit numbers, adding users to units and ranks and managing the live map. Creating calls and unit numbers can be done.

# Panic Button
Setting up the panic button feature requires you to navigate to the `Admin > Preferences` area and you should see:

 https://i.del.gg/i/jBCIv.png
 
  You can edit these to your exact liking!

# Terminal
The in game terminal is a way for officers to quickly see call attachments, status's and which unit they are assigned to. The terminal is a small box that can be moved around the screen using commands. The following are the commands which are all customisable within the **mdt_config.lua** file.
**/to** - opens the terminal.
**/tc** - closes the terminal.
**/mt** - allows you to drag the terminal around the screen.

https://i.del.gg/i/FCSFB.png


:::tip

Make sure you are set as the correct characters, only civilians can use the call emergency services feature and only officers can use the terminal, MDT and panic button!

:::

