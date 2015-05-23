# Esmarlz Arena
Esmarlz Arena is a robot game in the Esmarlz Universe.
http://www.esmarlz.com/

# Esmarlz Arena REST API
Esmarlz Arena REST API is a Open Source project to develop a REST API to be used for robots in the game Esmarlz Arena.

The REST API is developed in a Internet Programming language PHP.
http://php.net/

# REST API

    user/create
    user/update
    user/remove
    user/info
    user/login
    user/logout
    user/team/create
    user/team/update
    user/team/remove
    user/team/info
    user/robot/create
    user/robot/update
    user/robot/remove
    user/robot/info

    robot/history/info
    robot/actions/repair
    robot/actions/upgrade

    world/create
    world/update
    world/remove
    world/info

    game/create
    game/update
    game/remove
    game/info
    game/status
    game/join
    game/robot/actions/walk
    game/robot/actions/turn
    game/robot/actions/attack
    game/robot/actions/status
    game/robot/map/info
    game/team/map/info
    game/teams/map/info
    game/history/replay

# The robots

A robot is a Physical platform to run Client programs for Esmartlz Arena. The game is able to be simulated or played in a physical environment but every software must run in any robot platforms. Client programs can't run directly in a PC Plaform but it is possible to use third parties as Cloud computing, CRAY servers, others.

![ScreenShot](https://raw.githubusercontent.com/jabrena/livingrobots/master/chapter6/docs/twoBritys.jpg)

The maximum dimension of a Robot is 20cm square. This measure is used determinate every cell in the grid.

## Sensors

A basic configuration use a EV3 IR Sensor which detect in directed line of vision an obstacle or another robot in 100 cm. (4 cells)

https://raw.githubusercontent.com/jabrena/Esmarlz_Arena_REST_API/master/docs/ev3/sensors/ev3-ir-sensor2.png

Every robot incorporates a beacon to be detected by others.

https://raw.githubusercontent.com/jabrena/Esmarlz_Arena_REST_API/master/docs/ev3/sensors/ev3-ir-beacon.jpg

## Actuators

### Locomotion

The robots use different kind of actuators to move in the world but it is normal use EV3 large motors. Every robot can move 200 cm (10 cells)

https://raw.githubusercontent.com/jabrena/Esmarlz_Arena_REST_API/master/docs/ev3/actuators/ev3-large-motor.png

### Arms

In Esmarlz Arena, Robots incorporate virtual arms. Every turn, a robot is able to move and shoot in the same turn.

# The game

The game is designed as real time game using turns. If the robot in the period of time assigned doesn't send a command, the robot lost a turn. If the game detect that any robot doesn't send command in some turns, the game consider that the robot had some internal problem and this robot is not able to continue running in that game.

