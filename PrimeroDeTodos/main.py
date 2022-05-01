#!/usr/bin/env pybricks-micropython
from pybricks import ev3brick as brick
from pybricks.ev3devices import Motor
from pybricks.parameters import Port
from pybricks.robotics import DriveBase
from pybricks.tools import wait

# Play a sound.
brick.sound.beep()
# Initialize a motor at port B.
left = Motor(Port.D)
right = Motor(Port.A)
robot =DriveBase(left, right, 56, 114)
# Run the motor up to 500 degrees per second. To a target angle of 90 degrees.
robot.drive_time(-200,0,4080)
wait(100)
robot.drive_time(0,50,5580)
wait(100)
robot.drive_time(-200,0,650)
wait(100)
robot.drive_time(-200,0,4080)
wait(100)
robot.drive_time(0,50,5580)
wait(100)
robot.drive_time(-200,0,650)
wait(100)
robot.drive_time(-200,0,4080)
wait(100)
robot.drive_time(0,50,5580)
wait(100)
robot.drive_time(-200,0,650)
wait(100)
robot.drive_time(-200,0,4080)
wait(100)
robot.drive_time(0,50,5580)
wait(100)
robot.drive_time(-200,0,650)
wait(100)
# Play another beep sound.
# This time with a higher pitch (1000 Hz) and longer duration (500 ms).
brick.sound.beep(1000, 500)
