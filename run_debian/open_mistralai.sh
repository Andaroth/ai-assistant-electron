#!/bin/bash
# This script is for Debian 12 with XFCE
# Requirements: xdotool and wmctrl

PROGRAM_NAME="mistralai-electron.mistralai-electron"

OPENED_ID=$(wmctrl -lx | grep -i "$PROGRAM_NAME" | tail -1 | awk '{print $1}') # find window

if [ -n "$OPENED_ID" ]; then # found
    MINIMIZED=$(xprop -id $OPENED_ID | grep "_NET_WM_STATE_HIDDEN") # get state
    if [ -n "$MINIMIZED" ]; then # if window in minimized
        xdotool windowactivate $OPENED_ID # re-display
    else
        xdotool windowminimize $OPENED_ID # hide
    fi
else
    ./mistralai-electron-linux-x64/mistralai-electron & # open new window
    sleep 0.5
    WINDOW_ID=$(wmctrl -lx | grep -i "$PROGRAM_NAME" | tail -1 | awk '{print $1}') # find window
    # decoration:
    wmctrl -ir $WINDOW_ID -b remove,fullscreen # prevent full size window
    wmctrl -ir $WINDOW_ID -b add,undecorated # remove titlebar
    sleep 0.5
    # position:
    wmctrl -ir $WINDOW_ID -e 0,1935,280,400,750 # weight,X,Y,width,height
    wmctrl -ir $WINDOW_ID -b add,sticky # always visible on all workspace
fi
