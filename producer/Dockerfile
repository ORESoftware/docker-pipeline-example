FROM node:12.6.0-alpine

USER root

WORKDIR /app


COPY . .


ENV FORCE_COLOR=1

ENTRYPOINT ["node", "."]
CMD ["--default","arg"]