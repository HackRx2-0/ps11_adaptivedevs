FROM redislabs/redisearch:2.2.0 as redisearch
FROM redislabs/rejson:2.0.0 as rejson
FROM redis:6.2.4

ARG REDIS_PASS 
ENV REDIS_PASS=$REDIS_PASS

WORKDIR /data

ENV LIBRARY_PATH /usr/lib/redis/modules/
# RUN mkdir -p "$LIBRARY_PATH";

COPY --from=redisearch /usr/lib/redis/modules/redisearch.so* "$LIBRARY_PATH"
COPY --from=rejson  /usr/lib/redis/modules/rejson.so* "$LIBRARY_PATH"


CMD ["sh", "-c", "redis-server --requirepass \"$REDIS_PASS\" --loadmodule /usr/lib/redis/modules/redisearch.so --loadmodule /usr/lib/redis/modules/rejson.so"]
