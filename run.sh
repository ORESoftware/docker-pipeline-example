#!/usr/bin/env bash

set -e;
cd `dirname "$BASH_SOURCE"`


(
    cd consumer
    docker build -t 'dpe-consumer' .
) &

consumer_pid="$!"

(
    cd producer
    docker build -t 'dpe-producer' .
) &

producer_pid="$!"


wait "$consumer_pid" "$producer_pid";

docker run --rm -ti 'dpe-producer' | docker run --rm -i 'dpe-consumer'  > run.log