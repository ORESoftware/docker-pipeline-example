

# Example of shell pipelines with docker

To run the example:

```bash
git clone https://github.com/ORESoftware/docker-pipeline-example.git dpe
cd dpe
./run.sh

```

Basically we just want a shell pipeline to toy with (maybe we want to see about perf degradation when using
stdio and docker).

```bash

docker run --rm -ti 'dpe-producer' | docker run --rm -i 'dpe-consumer'

```


## To kill the pipeline

To kill it you seem to need to use <kbd>ctrl</kbd>-<kbd>d</kbd> before <kbd>ctrl</kbd>-<kbd>c</kbd>.
It should kill the producer first, which should then begin the demise of the consumer.