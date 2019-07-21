

# Example of shell pipelines with docker


docker run --rm -ti 'dpe-producer' | docker run --rm -i 'dpe-consumer'


## To kill the pipeline

To kill it you seem to need to use ctrl-d before ctrl-c.
It should kill the producer first, which should then begin the demise of the consumer.