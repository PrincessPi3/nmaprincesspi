#!/bin/bash
eval "$* 2>>./error.log 1>/dev/null&"